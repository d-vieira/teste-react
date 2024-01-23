"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, TrashIcon, ListPlusIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const registerClientSchema = z.object({
  personalData: z.object({
    name: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    cpf: z.string().length(8),
    rg: z.string(),
    birthDate: z.date(),
  }),
  addresses: z.object({
    address: z.object({
      addressLineOne: z.string(),
      addressLineTwo: z.string(),
      number: z.string(),
      cep: z.string().length(8),
      city: z.string(),
      state: z.string(),
    }),
  }),
  contacts: z.object({
    contact: z.object({
      contactName: z.string(),
      email: z.string(),
      phoneNumber: z.string(),
    }),
  }),
});

function onSubmit(values: z.infer<typeof registerClientSchema>) {
  // Do something with the form values.
  console.log(values);
}

export default function RegisterClienteForm() {
  const form = useForm<z.infer<typeof registerClientSchema>>({
    resolver: zodResolver(registerClientSchema),
    defaultValues: {
      personalData: {
        name: "",
        lastName: "",
        email: "",
        cpf: "",
        rg: "",
        birthDate: new Date(),
      },
      addresses: {
        address: {
          addressLineOne: "",
          addressLineTwo: "",
          number: "",
          cep: "",
          city: "",
          state: "",
        },
      },
      contacts: {
        contact: {
          contactName: "",
          email: "",
          phoneNumber: "",
        },
      },
    },
  });
  return (
    <div className="border-2 rounded-lg mt-6 bg-gray-200 dark:bg-gray-700">
      <div className="flex">
        <h2 className="mx-auto mt-10 text-2xl font-extrabold">
          Cadastrar Pessoa Física
        </h2>
      </div>
      <Form {...form}>
        <div className="flex flex-col mx-10 p-10">
          <FormLabel className="mb-6 text-lg">Dados Pessoais</FormLabel>
          <div className="grid grid-cols-3 items-center justify-evenly gap-3">
            <FormField
              control={form.control}
              name={"personalData.name"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:text-black/80 placeholder:text-black/60"
                      placeholder="Nome"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"personalData.lastName"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:text-black/80 placeholder:text-black/60"
                      placeholder="Sobrenome"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"personalData.email"}
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
              name={"personalData.email"}
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
              name={"personalData.rg"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:text-black/80 placeholder:text-black/60"
                      placeholder="RG"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"personalData.birthDate"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black/80 dark:text-gray-200">
                    Data de Nascimento
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PP", { locale: ptBR })
                            ) : (
                              <span>Escolha uma data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          captionLayout="dropdown-buttons"
                          fromYear={1900}
                          toYear={2050}
                          locale={ptBR}
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col mx-10 px-10">
          <FormLabel className="mb-6 text-lg">Endereços</FormLabel>
          <div className="grid grid-cols-3 items-center justify-evenly gap-3">
            <FormField
              control={form.control}
              name={"addresses.address.addressLineOne"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:text-black/80 placeholder:text-black/60"
                      placeholder="Logradouro"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"addresses.address.number"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:text-black/80 placeholder:text-black/60"
                      placeholder="Número"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"addresses.address.addressLineTwo"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:text-black/80 placeholder:text-black/60"
                      placeholder="Complemento"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"addresses.address.cep"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:text-black/80 placeholder:text-black/60"
                      placeholder="CEP"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"addresses.address.city"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:text-black/80 placeholder:text-black/60"
                      placeholder="Cidade"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"addresses.address.state"}
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Estado"
                          className="dark:text-black/80 placeholder:text-black/60"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {states.map((state) => {
                        return (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between my-4">
            <Button>
              <ListPlusIcon className="mr-2 opacity-50" />
              Novo Endereço
            </Button>
            <Button>
              Remover Endereço
              <TrashIcon className="ml-2 opacity-50" />
            </Button>
          </div>
        </div>

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
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex">
          <Button className="mx-auto my-4 w-40">Salvar</Button>
        </div>
      </Form>
    </div>
  );
}

const states: string[] = [
  "RO",
  "AC",
  "AM",
  "RR",
  "PA",
  "AP",
  "TO",
  "MA",
  "PI",
  "CE",
  "RN",
  "PB",
  "PE",
  "AL",
  "SE",
  "BA",
  "MG",
  "ES",
  "RJ",
  "SP",
  "PR",
  "SC",
  "RS",
  "MS",
  "MT",
  "GO",
  "DF",
].sort();
