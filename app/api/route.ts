import { NextResponse } from "next/server";

export async function GET() {
  console.log("Hello from '/' Route");

  return Response.json({ message: "Hello From '/' Route" }, { status: 200 });
}
