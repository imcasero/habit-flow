import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { accessToken } = await req.json();

  if (!accessToken) {
    return NextResponse.json({ error: "No token" }, { status: 400 });
  }

  (await cookies()).set("sb:token", accessToken, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  return NextResponse.json({ success: true });
}
