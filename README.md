# oauth2-grants

Library for handling OAuth 2 auth requests with Express, inspired by
`jasonraimondi/ts-oauth2-server`

## Collections

- code
- client
- token
- scope
- user

## Grants

(<https://datatracker.ietf.org/doc/html/rfc6749#section-1.3>)

- Authorization code
- Refresh token (<https://datatracker.ietf.org/doc/html/rfc6749#section-1.5>)

- Client Credentials (not implemented)
- Implicit (not implemented because unsafe)
- Resource Owner Password Credentials (not implemented because unsafe)

## PKCE

- PKCE (<https://datatracker.ietf.org/doc/html/rfc7636>)

## Roadmap

- [ ] Unit tests
- [ ] Docs
- [ ] Express oath2 server example
