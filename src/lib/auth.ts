import { jwtVerify, SignJWT } from "jose";
import { nanoid } from "nanoid";
import type { NextResponse } from "next/server";

interface UserJwtPayload {
  jti: string;
  iat: number;
}

export function getJwtSecretKey(): string {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error("JWT secret key is not defined ");
  }
  return secret;
}



export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified.payload as UserJwtPayload;
  } catch (err) {
    throw new Error("Your token has expired.");
  }
};

/**
 * Adds the user token cookie to a response.
 */
export async function setUserCookie(res: NextResponse) {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(getJwtSecretKey()));

  res.cookies.set("user-token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 2, 
  });

  return res;
}





export function getJwtSecretKeyWaiter(): string {
  const secretWaiter = process.env.JWT_SECRET_KEY_WAITER;

  if (!secretWaiter || secretWaiter.length === 0) {
    throw new Error("JWT secret key is not defined ");
  }
  return secretWaiter;
}

export const verifyAuthWaiter = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKeyWaiter())
    );
    return verified.payload as UserJwtPayload;
  } catch (err) {
    throw new Error("Your token has expired.");
  }
};

/**
 * Adds the user token cookie to a response.
 */
export async function setUserCookieWaiter(res: NextResponse) {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(getJwtSecretKeyWaiter()));

  res.cookies.set("user-token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 2, 
  });

  return res;
}