"use client";

import Header from "@/components/Header";
import ProtectedRoute, { User } from "@/components/ProtectedRoute";
import RegisterClienteForm from "@/components/RegisterClientForm";
import { useState } from "react";

export default function RegisterCustomer() {
  const [user, setUser] = useState<User>();
  return (
    <div className="flex flex-col">
      <ProtectedRoute login={setUser}>
        <Header />
        <RegisterClienteForm />
      </ProtectedRoute>
    </div>
  );
}
