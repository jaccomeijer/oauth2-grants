export interface TokenResponseParameters {
  /** The issued access token */
  accessToken: string
  /** When the access token expired. */
  expiresInSeconds: number
  idToken?: string
  /** A refresh token is used to renew an expired access token. */
  refreshToken?: string
  /** The scope the access token is valid for. */
  scopes: string
}

export const tokenResponseParameters = ({
  accessToken,
  expiresInSeconds,
  idToken,
  refreshToken,
  scopes,
}: TokenResponseParameters) => {
  return {
    access_token: accessToken,
    expires_in: expiresInSeconds,
    id_token: idToken,
    refresh_token: refreshToken,
    scope: scopes,
    token_type: 'Bearer',
  }
}
