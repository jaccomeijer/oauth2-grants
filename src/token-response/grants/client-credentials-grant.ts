import { requestToClient } from '../../lib/request-to-client'
import { ResponseToSend } from '../../lib/response'
import { tokenResponseParametersFactory } from '../parameters/token-response-parameters-factory'
import { TokenResponse } from '../token-response'
import { requestToScopes } from '../../lib/request-to-scopes'

export const clientCredentialsGrant = async ({
  audience,
  collectionApi,
  issuer,
  jwtApi,
  maxAge,
  req,
}: TokenResponse): Promise<ResponseToSend> => {
  const client = await requestToClient({ collectionApi, req })
  const scopes = await requestToScopes({ client, req })

  const parameters = await tokenResponseParametersFactory({
    audience,
    client,
    collectionApi,
    grant: 'client_credentials',
    issuer,
    jwtApi,
    maxAge,
    req,
    scopes,
  })

  return { parameters }
}
