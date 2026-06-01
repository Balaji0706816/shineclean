import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  if (body.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("admin_auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}