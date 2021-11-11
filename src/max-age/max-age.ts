export type AuthorizeEndpoint = {
  codeToken: number
}

export type TokenEndpoint = {
  authorizationCodeGrant: {
    response: number
    accessToken: number
    idToken: number
    refreshToken: number
  }
  clientCredentialsGrant: {
    response: number
    accessToken: number
  }
  refreshTokenGrant: {
    response: number
    accessToken: number
    refreshToken: number
  }
}

export type TokenEndpointGrants = keyof TokenEndpoint

// All max age settings are in seconds
export type MaxAge = {
  authorizeEndpoint: AuthorizeEndpoint
  tokenEndpoint: TokenEndpoint
}
