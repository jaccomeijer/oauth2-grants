import { KJUR, hextob64 } from 'jsrsasign'
import { JWT } from './jwt'

export interface CreateIdTokenPayload {
  clientId: string
  expiresAtSeconds: number
  issuedAtSeconds: number
  issuer: string
  nonce?: string
  notBeforeSeconds: number
  userEmail?: string
  userId?: string
  userName?: string
}

export const createIdTokenPayload = ({
  clientId,
  expiresAtSeconds,
  issuedAtSeconds,
  issuer,
  nonce,
  notBeforeSeconds,
  userEmail,
  userId,
  userName,
}: CreateIdTokenPayload) => {
  const payload: JWT = {
    aud: clientId,
    cid: clientId,
    email: userEmail,
    exp: expiresAtSeconds,
    iat: issuedAtSeconds,
    iss: issuer,
    name: userName,
    nbf: notBeforeSeconds,
    nonce,
    // The client_credentials grant is intended for machine to machine
    // communication. This grant does not require a user. Thus, use the client
    // id for that grant.
    sub: userId || clientId,
  }
  const md = new KJUR.crypto.MessageDigest({ alg: 'sha1', prov: 'cryptojs' })
  payload.jti = hextob64(<any>md.digestString(JSON.stringify(payload)))
  return payload
}
