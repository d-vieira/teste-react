"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChangeEvent } from "react";

const signUpSchema = z.object({
  username: z.string().min(1),
  email: z.string().email().min(1).toLowerCase(),
  password: z.string().min(6),
  phone: z.string().min(12),
  image: z.string(),
});

type SignUpFormProps = {
  handleImagePreview: (image: string) => void;
};

export default function SignUpForm({ handleImagePreview }: SignUpFormProps) {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      phone: "",
      image: "",
    },
  });

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        handleImagePreview(reader.result as string);
      };
    }
  }

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                className="dark:text-black/80 placeholder:text-black/60"
                placeholder="Email"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                className="dark:text-black/80 placeholder:text-black/60"
                placeholder="Nome de Usuário"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                className="dark:text-black/80 placeholder:text-black/60"
                placeholder="Número de Telefone"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                type="password"
                className="dark:text-black/80 placeholder:text-black/60"
                placeholder="Senha"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-zinc-200 file:text-black/80
                hover:file:bg-zinc-50"
        onChange={handleFileChange}
      />
      <FormMessage>
        <Button
          disabled
          type="submit"
          className="text-lg text-black/70 bg-emerald-400 hover:bg-emerald-950 hover:text-white"
        >
          Cadastrar Usuário
        </Button>
        Temporariamente desativado, tente fazer login diretamente.
      </FormMessage>
    </Form>
  );
}
