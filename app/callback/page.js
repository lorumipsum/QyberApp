"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      console.log("Cognito authorization code:", code);
      // TODO: Exchange the code for tokens with Cognito
      router.push("/");
    }
  }, [router]);

  return <p>Processing login…</p>;
}
