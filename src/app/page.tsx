"use client";

import Header from "@/components/Header";
import ProtectedRoute, { User } from "@/components/ProtectedRoute";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User>();

  return (
    <ProtectedRoute login={setUser}>
      <Header />
    </ProtectedRoute>
  );
}
