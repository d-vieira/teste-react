"use client";

import { setUserOnLS } from "@/components/assets/localStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    setUserOnLS("");
    router.push("/");
  });

  return null;
}
