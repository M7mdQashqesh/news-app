import { login } from "@/services/auth.services";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json() as { email: string, password: string };
  const user = login(body.email, body.password);

  if (!user) return new NextResponse("User Not Found!", { status: 401 });

  return NextResponse.json(user, { status: 200 });
};
