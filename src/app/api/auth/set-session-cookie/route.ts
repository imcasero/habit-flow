import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const cookieValue = body;

    const response = NextResponse.json({ message: "Cookie set successfully" });
    response.cookies.set(
      "sb:session:cookie",
      JSON.stringify({ authenticated: true, ...cookieValue }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "strict",
      }
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to set cookie" },
      { status: 500 }
    );
  }
}
