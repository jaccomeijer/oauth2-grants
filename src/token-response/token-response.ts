import { CommonResponseInput, ResponseToSend } from '../lib/response'
import { authorizationCodeGrant } from './grants/authorization-code-grant'
import { clientCredentialsGrant } from './grants/client-credentials-grant'
import { refreshTokenGrant } from './grants/refresh-token-grant'

export type TokenResponse = CommonResponseInput

export const tokenResponse = async (
  args: TokenResponse
): Promise<ResponseToSend | undefined> => {
  const grantType = args.req.body['grant_type']

  switch (grantType) {
    case 'authorization_code':
      return authorizationCodeGrant(args)

    case 'client_credentials':
      return clientCredentialsGrant(args)

    case 'refresh_token':
      return refreshTokenGrant(args)

    default:
      return
  }
}
