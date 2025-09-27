import { allowedCategories } from "@/data/data";
import { getNewsByCategory } from "@/services/fetchNews.services";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams;
  const category = params.get("category") || "sports";

  if (!allowedCategories.includes(category)) {
    return NextResponse.json(null, { status: 400, statusText: "Unknown Category" });
  }

  const news = getNewsByCategory(category);
  return NextResponse.json(news, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  return NextResponse.json(await request.json(), { status: 201 });
};
