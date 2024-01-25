import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export default function ProfileMenu() {
  return (
    <Menubar className="h-14">
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <MenubarContent>
              <Link href={"/logout"}>
                <MenubarItem>Sair</MenubarItem>
              </Link>
            </MenubarContent>
          </Avatar>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
