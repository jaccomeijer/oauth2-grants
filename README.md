# oauth2-grants

Library for handling OAuth 2 auth requests with Express.

## Database models

- [AuthCodeCollection](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/collection/auth-code.ts)
- [ClientCollection](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/collection/client.ts)
- [ScopeCollection](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/collection/scope.ts)
- [TokenCollection](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/collection/token.ts)
- [UserCollection](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/collection/user.ts)

## Database API interface

- [CollectionApi](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/collection/collection-api.ts)

## Implemented grants

### Authorization code

- RFC: <https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1>)
- Source: [authorization-code-grant.ts](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/token-response/grants/authorization-code-grant.ts)

### Client Credentials

- RFC: <https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.4>)
- Source: [client-credentials-grant.ts](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/token-response/grants/client-credentials-grant.ts)

### Refresh token

- RFC: <https://datatracker.ietf.org/doc/html/rfc6749#section-1.5>)
- Source: [refresh-token-grant.ts](https://github.com/jaccomeijer/oauth2-grants/blob/main/src/token-response/grants/refresh-token-grant.ts)

## Unsafe grants (not implemented)

- Implicit (<https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.2>)
- Resource Owner Password Credentials (<https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.3>)

## PKCE

- PKCE (<https://datatracker.ietf.org/doc/html/rfc7636>)

## Roadmap

- [ ] Unit tests
- [ ] Documented express oath2 server example
