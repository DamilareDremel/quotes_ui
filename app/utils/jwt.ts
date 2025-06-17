export function decodeJWT(token: string) {
  const base64Payload = token.split(".")[1];
  return JSON.parse(Buffer.from(base64Payload, "base64").toString());
}
