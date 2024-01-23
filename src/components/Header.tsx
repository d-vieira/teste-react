"use client";

import { ModeToggle } from "@/components/ModeToggle";

import { Menubar } from "@/components/ui/menubar";

import ProfileMenu from "@/components/ProfileMenu";
import ClientsMenu from "@/components/ClientsMenu";

export default function Header() {
  return (
    <header className="flex justify-between mt-1">
      <Menubar className="h-14 ml-3">
        <ClientsMenu />
      </Menubar>
      <div className="flex gap-1">
        <ModeToggle />
        <ProfileMenu />
      </div>
    </header>
  );
}
