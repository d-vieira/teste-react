import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export default function ContactsForm({ form }: any) {
  return (
    <div className="flex flex-col mx-10 p-10">
      <FormLabel className="mb-6 text-lg">Contatos</FormLabel>
      <div className="grid grid-cols-3 items-center justify-evenly gap-3">
        <FormField
          control={form.control}
          name={"contacts.contact.contactName"}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="dark:text-black/80 placeholder:text-black/60"
                  placeholder="Nome"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"contacts.contact.email"}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="dark:text-black/80 placeholder:text-black/60"
                  placeholder="Email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"contacts.contact.phoneNumber"}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="dark:text-black/80 placeholder:text-black/60"
                  placeholder="Telefone"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
