import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/infra/supabase/supabaseClient";

const projectRef = "jioiwpygfezsjcdojhcq";
const cookieName = `sb-${projectRef}-auth-token`;

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const supabase = getSupabaseClient(token);

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: {
      id: user.id,
      email: user.email,
      username: user.user_metadata.username,
      email_verified: user.user_metadata.email_verified,
      created_at: user.created_at,
    },
  });
}
