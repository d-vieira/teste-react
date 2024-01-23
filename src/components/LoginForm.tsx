"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const loginSchema = z.object({
  email: z.string().email().min(1).toLowerCase(),
  password: z.string().min(6),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="dark:text-black/80 placeholder:text-black/60"
                placeholder="Email"
                {...field}
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
                type="password"
                className="dark:text-black/80 placeholder:text-black/60"
                placeholder="Senha"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="submit"
        className="text-lg text-black/70 bg-emerald-400 hover:bg-emerald-950 hover:text-white"
      >
        Entrar
      </Button>
    </Form>
  );
}
