import { requestToClient } from '../../../lib/request-to-client'
import { requestToRedirectUri } from '../../../lib/request-to-redirect-uri'
import { requestToScopes } from '../../../lib/request-to-scopes'
import { invalidRequestErrorFactory } from '../../../error/oauth2-error'
import { RefreshTokenPayload } from '../../../jwt/refresh-token'
import { OAuth2Response } from '../../response'
import { TokenResponse } from '../token-response'
import { createBody } from '../create-body'

export const refreshTokenGrant = async ({
  collectionApi,
  jwtApi,
  req,
}: TokenResponse): Promise<OAuth2Response> => {
  const existingRefreshToken = req.body['refresh_token']
  if (typeof existingRefreshToken !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'Refresh token body parameter is required',
    })
  }

  const existingRefreshTokenPayload = (await jwtApi.verify(
    existingRefreshToken
  )) as RefreshTokenPayload

  if (!existingRefreshTokenPayload) {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'JWT verification failed',
    })
  }

  const knmownRefreshToken = await collectionApi.token.refreshToken.get({
    refreshToken: existingRefreshToken,
    req,
  })

  if (Date.now() > existingRefreshTokenPayload.expire_time * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Refresh token has expired',
    })
  }

  if (Date.now() > knmownRefreshToken.refreshTokenExpiresAt.getTime() * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Refresh token was revoked',
    })
  }

  const user = await collectionApi.user.get({
    userId: existingRefreshTokenPayload.user_id,
    req,
  })
  const client = await requestToClient({ collectionApi, req })

  if (existingRefreshTokenPayload.client_id !== client.id) {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'client_id field in refresh_token JWT is invalid',
    })
  }

  const scopes = await requestToScopes({ collectionApi, req })
  const redirectUri = requestToRedirectUri({ req, client })
  const body = await createBody({
    client,
    collectionApi,
    jwtApi,
    req,
    scopes,
    user,
  })

  await collectionApi.token.refreshToken.revoke({
    refreshToken: existingRefreshToken,
    req,
  })

  return { body, url: redirectUri }
}