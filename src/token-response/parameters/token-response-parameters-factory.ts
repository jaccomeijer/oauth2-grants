import Express from 'express'
import { AuthCodeCollection } from '../../collection/auth-code'
import { ClientCollection } from '../../collection/client'
import { CollectionApi } from '../../collection/collection-api'
import { ScopeCollection } from '../../collection/scope'
import { TokenCollection } from '../../collection/token'
import { UserCollection } from '../../collection/user'
import { jwtErrorFactory } from '../../error/oauth2-error'
import { createAccessTokenPayload } from '../../jwt/access-token'
import { createIdTokenPayload } from '../../jwt/id-token'
import { JwtApi } from '../../jwt/jwt-api'
import { createRefreshTokenPayload } from '../../jwt/refresh-token'
import { MaxAge } from '../../max-age/max-age'
import { tokenResponseParameters } from './token-response-parameters'

export interface TokenResponseParametersFactoryBase {
  /** Added to the aud claim in the tokens */
  audience: string
  /** Client used to add name and id to tokens */
  client: ClientCollection
  /** Api methods to access storage layer */
  collectionApi: CollectionApi
  /** Added to the iss claim in the tokens */
  issuer: string
  /** Api methods used to sign and verify JSON Web Tokens */
  jwtApi: JwtApi
  /** Used to get nonce for authorize_code grant */
  knownAuthCode?: AuthCodeCollection
  /** Max ages object containing max ages in seconds */
  maxAge: MaxAge
  /** The current request, passed to collectionApi (e.g. for user agent handling) */
  req: Express.Request
  /** Current scopes */
  scopes: ScopeCollection[]
}

export interface TRPFAuthorizationCode
  extends TokenResponseParametersFactoryBase {
  /** The grant for which the token parameters are created */
  grant: 'authorization_code'
  /** Current user, not required for client_credentials grant */
  user: UserCollection
}

export interface TRPFClientCredentials
  extends TokenResponseParametersFactoryBase {
  /** The grant for which the token parameters are created */
  grant: 'client_credentials'
}

export interface TRPFRefreshToken extends TokenResponseParametersFactoryBase {
  /** The grant for which the token parameters are created */
  grant: 'refresh_token'
  /** Current user, not required for client_credentials grant */
  user: UserCollection
}

export const tokenResponseParametersFactory = async ({
  audience,
  client,
  collectionApi,
  grant,
  issuer,
  jwtApi,
  knownAuthCode,
  maxAge,
  req,
  scopes,
  ...rest
}: TRPFAuthorizationCode | TRPFClientCredentials | TRPFRefreshToken) => {
  let accessTokenMaxAge = 0
  let refreshTokenMaxAge = 0
  let responseMaxAge = 0
  let userEmail: string | undefined
  let userId: string | undefined
  type Rest = { user: UserCollection }
  if (grant === 'authorization_code') {
    const thisMaxAge = maxAge.tokenEndpoint.authorizationCodeGrant
    accessTokenMaxAge = thisMaxAge.accessToken
    refreshTokenMaxAge = thisMaxAge.refreshToken
    responseMaxAge = thisMaxAge.response
    userEmail = (rest as Rest).user.email
    userId = (rest as Rest).user.id
  } else if (grant === 'client_credentials') {
    const thisMaxAge = maxAge.tokenEndpoint.clientCredentialsGrant
    accessTokenMaxAge = thisMaxAge.accessToken
    responseMaxAge = thisMaxAge.response
    // The client_credentials grant is intended for machine to machine
    // communication. This grant does not require a user. Leave userEmail and
    // userId undefined. There's no refresh token for this grant. Leave
    // refreshTokenMaxAge undefined.
  } else if (grant === 'refresh_token') {
    const thisMaxAge = maxAge.tokenEndpoint.refreshTokenGrant
    accessTokenMaxAge = thisMaxAge.accessToken
    refreshTokenMaxAge = thisMaxAge.refreshToken
    responseMaxAge = thisMaxAge.response
    userEmail = (rest as Rest).user.email
    userId = (rest as Rest).user.id
  }

  const newAccessTokenPayload = createAccessTokenPayload({
    audience,
    clientId: client.id,
    expiresAtSeconds: Math.ceil(Date.now() / 1000) + accessTokenMaxAge,
    issuedAtSeconds: Math.ceil(Date.now() / 1000),
    issuer,
    notBeforeSeconds: Math.ceil(Date.now() / 1000) - 5,
    scopes: scopes.map((scope) => scope.name).join(' '),
    userEmail,
    userId,
  })

  let refreshToken
  let idToken
  if (grant === 'authorization_code' || grant === 'refresh_token') {
    const newRefreshTokenPayload = createRefreshTokenPayload({
      clientId: client.id,
      expiresAtSeconds: Math.ceil(Date.now() / 1000) + refreshTokenMaxAge,
      scopes: scopes.map((scope) => scope.name).join(' '),
      userId: userId!,
    })
    refreshToken = await jwtApi.sign({ payload: newRefreshTokenPayload })
    if (typeof refreshToken !== 'string') {
      throw jwtErrorFactory({ description: 'Error signing refresh token' })
    }

    const newIdTokenPayload = createIdTokenPayload({
      clientId: client.id,
      expiresAtSeconds:
        Math.ceil(Date.now() / 1000) +
        maxAge.tokenEndpoint.authorizationCodeGrant.idToken,
      issuedAtSeconds: Math.ceil(Date.now() / 1000),
      issuer,
      nonce: knownAuthCode?.nonce,
      notBeforeSeconds: Math.ceil(Date.now() / 1000) - 5,
      userEmail,
      userId,
      userName: 'not implemented',
    })
    idToken = await jwtApi.sign({ payload: newIdTokenPayload })
    if (typeof idToken !== 'string') {
      throw jwtErrorFactory({ description: 'Error signing id token' })
    }
  }

  const accessToken = await jwtApi.sign({ payload: newAccessTokenPayload })
  if (typeof accessToken !== 'string') {
    throw jwtErrorFactory({ description: 'Error signing access token' })
  }

  const tokenCollection: TokenCollection = {
    accessToken,
    accessTokenExpiresAt: new Date(Date.now() + 1000 * accessTokenMaxAge),
    client,
    refreshToken,
    refreshTokenExpiresAt: new Date(Date.now() + 1000 * refreshTokenMaxAge),
    scopes,
    user: (rest as Rest).user,
  }

  await collectionApi.token.persist({ token: tokenCollection, req })

  const parameters = tokenResponseParameters({
    accessToken,
    expiresInSeconds: responseMaxAge,
    idToken,
    refreshToken,
    scopes: scopes.map((scope) => scope.name).join(' '),
  })
  return parameters
}
