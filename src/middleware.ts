import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = await fetch(`${request.nextUrl.origin}/api/auth/check-auth`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { authenticated } = await res.json();

  if (!authenticated) {
    // Si no está autenticado, redirigimos al login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
