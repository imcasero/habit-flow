"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/infra/supabase/supabaseClient";

function CallbackContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    const confirmAndSetCookie = async () => {
      const token_hash = searchParams.get("token_hash");
      const type = searchParams.get("type");

      if (!token_hash || type !== "email") {
        setStatus("error");
        return;
      }

      const { error: confirmError } = await supabase.auth.verifyOtp({
        token_hash,
        type: "email",
      });

      if (confirmError) {
        setStatus("error");
        return;
      }

      const { data, error: sessionError } = await supabase.auth.getSession();
      const accessToken = data.session?.access_token;

      if (!accessToken || sessionError) {
        setStatus("error");
        return;
      }

      localStorage.setItem("auth-event", Date.now().toString());

      setStatus("success");
    };

    confirmAndSetCookie();
  }, [searchParams]);

  return (
    <div className="p-6 text-center">
      {status === "loading" && <p>Confirming your account...</p>}
      {status === "success" && (
        <>
          <h2 className="text-2xl font-bold">Account confirmed ✅</h2>
          <p>You can close this tab now.</p>
        </>
      )}
      {status === "error" && (
        <>
          <h2 className="text-2xl font-bold text-red-500">
            Error confirming account
          </h2>
          <p>The link may be expired or already used.</p>
        </>
      )}
    </div>
  );
}

export default function Callback() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <CallbackContent />
    </Suspense>
  );
}
