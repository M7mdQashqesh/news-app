import { IUser } from "@/types";
import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.jwt || "";

export const hashPassword = (password: string): string => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};

export const comparePassword = (password: string, hashedPassword: string): boolean => {
  return compareSync(password, hashedPassword);
};

export const generateToken = (user: IUser): string => {
  const token = jwt.sign(
    { email: user.email, role: user.role, displayName: user.displayName },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
}

export const verifyToken = (token: string): IUser | null => {
  try {
    const user = jwt.verify(token, JWT_SECRET);
    return user as IUser;
  } catch {
    return null;
  }
}
