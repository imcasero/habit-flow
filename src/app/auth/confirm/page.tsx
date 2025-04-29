"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { serialize } from "cookie";

const ConfirmPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  useEffect(() => {
    if (!token_hash || type !== "email") {
      router.replace("/error");
      return;
    }

    const cookie = serialize("auth_token", token_hash as string, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 10,
      path: "/",
    });

    document.cookie = cookie;

    router.replace("/dashboard");
  }, [token_hash, type, router]);

  return null;
};

export default ConfirmPage;
