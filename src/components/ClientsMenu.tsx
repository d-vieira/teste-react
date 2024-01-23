import Link from "next/link";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export default function ClientsMenu() {
  return (
    <MenubarMenu>
      <MenubarTrigger>
        Clientes
        <MenubarContent>
          <MenubarItem>
            <Link href={"/register-customer"}>Cadastrar Cliente</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={"/customers"}>Listar Clientes</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarTrigger>
    </MenubarMenu>
  );
}
