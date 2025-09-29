import { findUserByEmail } from "@/services/auth.services";
import { IUser } from "@/types";
import { comparePassword } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { email, password } = await request.json() as { email: string, password: string };

  if (!email || !password) {
    return new NextResponse("Email And Password Are Required", { status: 400 });
  }

  const user: IUser = findUserByEmail(email);
  if (!user) return new NextResponse("Invalid Credentials!", { status: 401 });

  const isValidPassword = comparePassword(password, user.password || "");

  if (!isValidPassword) {
    return new NextResponse("Invalid Credentials!", { status: 401 });
  }

  delete user.password;
  return NextResponse.json(user, { status: 200 });
};
