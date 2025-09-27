import { getNewsByArticle } from "@/services/fetchNews.services"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest, { params }: { params: { slug: string } }) => {
  const slug = (await params).slug;

  const article = getNewsByArticle(slug);
  return NextResponse.json({ result: article }, { status: 200 });
};
