"use client";

import { ReactNode, useEffect, useState } from "react";
import { getUserFromLS } from "./assets/localStorage";
import { useRouter } from "next/navigation";

export type User = {
  email: string;
};

type ProtectedRoute = {
  children: ReactNode;
  login?: (user: User) => void;
};

export default function ProtectedRoute({ children, login }: ProtectedRoute) {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userLs = getUserFromLS();
    setUser(userLs);
    setLoading(false);
  }, [setUser]);

  if ((!user || !user.email) && !loading) {
    router.push("/login");
  }

  if (user) login && login(user);

  return user ? children : "Carregando...";
}
