export type AuthorizeEndpoint = {
  codeToken: number
}

export type TokenEndpoint = {
  authorizationCodeGrant: {
    accessToken: number
    idToken: number
    refreshToken: number
  }
  clientCredentialsGrant: {
    accessToken: number
  }
  refreshTokenGrant: {
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
