import { IUser } from "@/types";
import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import * as jose from 'jose';
const JWT_SECRET = process.env.JWT_SECRET || "";

export const hashPassword = (password: string): string => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};

export const comparePassword = (password: string, hashedPassword: string): boolean => {
  return compareSync(password, hashedPassword);
};

export const generateToken = async (user: IUser) => {
  const token = await new jose.SignJWT({ email: user.email, role: user.role, displayName: user.displayName })
    .setExpirationTime('1w')
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode(JWT_SECRET));

  return token;
}

export const verifyToken = async (token: string): Promise<IUser | null> => {
  try {
    const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return payload as unknown as IUser;
  } catch (err) {
    console.log(err);
    return null;
  }
}
