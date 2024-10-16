import { Token } from "../store/auth-api-slice";

export function hasExpired(token: Token) {
  const expirationTime = new Date(token.expirationTime);
  const now = new Date();

  return now.getTime() >= expirationTime.getTime();
}

export function getTokenDuration(token: Token): number {
  const expirationTime = new Date(token.expirationTime);
  const now = new Date();
  return expirationTime.getTime() - now.getTime();
}

export function roundTo(num: number, precision: number) {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
}
