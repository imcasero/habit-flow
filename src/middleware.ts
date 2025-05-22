import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("sb:session:cookie")?.value;

  let authenticated = false;

  try {
    authenticated = cookie ? JSON.parse(cookie).authenticated : false;
  } catch (e) {
    console.error("Invalid cookie format:", cookie);
    authenticated = false;
  }

  if (!authenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
