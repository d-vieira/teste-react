"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { ListPlusIcon, TrashIcon } from "lucide-react";

import AddressesForm from "./AddressesForm";
import { useState } from "react";
import ContactsForm from "./ContactsForm";
import PersonalDataForm from "./PersonalDataForm";
import {
  CustomerValues,
  addCustomerOnLs,
  updateCustomerOnLs,
} from "./assets/localStorage";

type RegisterClienteForm = {
  defaultValues: CustomerValues;
  edit?: number | undefined;
};

const registerClientSchema = z.object({
  personalData: z.object({
    name: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    cpf: z.string().length(11),
    rg: z.string(),
    birthDate: z.date(),
  }),
  addresses: z.array(
    z.object({
      addressLineOne: z.string(),
      addressLineTwo: z.string(),
      number: z.string(),
      cep: z.string().length(8),
      city: z.string(),
      state: z.string(),
    })
  ),
  contacts: z.object({
    contact: z.object({
      contactName: z.string(),
      email: z.string(),
      phoneNumber: z.string(),
    }),
  }),
});

const customerDefaultData = {
  personalData: {
    name: "",
    lastName: "",
    email: "",
    cpf: "",
    rg: "",
    birthDate: new Date(),
  },
  addresses: [
    {
      addressLineOne: "",
      addressLineTwo: "",
      number: "",
      cep: "",
      city: "",
      state: "",
    },
  ],
  contacts: {
    contact: {
      contactName: "",
      email: "",
      phoneNumber: "",
    },
  },
};

export default function RegisterClienteForm({
  defaultValues = customerDefaultData,
  edit,
}: RegisterClienteForm) {
  const form = useForm<z.infer<typeof registerClientSchema>>({
    resolver: zodResolver(registerClientSchema),
    defaultValues,
  });

  const [addresses, setAddresses] = useState([AddressesForm]);

  function handleAddAddress() {
    setAddresses([...addresses, AddressesForm]);
  }

  function handleRemAddress() {
    if (addresses.length < 2) return;
    setAddresses(addresses.slice(0, -1));
  }

  function onSubmit(values: z.infer<typeof registerClientSchema>) {
    typeof edit === "number"
      ? updateCustomerOnLs(values, edit)
      : addCustomerOnLs(values);
  }

  return (
    <div className="border-2 rounded-lg mt-6 bg-gray-200 dark:bg-gray-700">
      <div className="flex">
        <h2 className="mx-auto mt-10 text-2xl font-extrabold">
          {typeof edit === "number"
            ? "Editar Dados de Pessoa Física"
            : "Cadastrar Pessoa Física"}
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <PersonalDataForm form={form} />

          {addresses.map((Address, i) => (
            <Address key={i} form={form} name={`addresses.${i}`} />
          ))}

          <div className="flex justify-between my-4 mx-20">
            <Button type="button" onClick={handleAddAddress}>
              <ListPlusIcon className="mr-2 opacity-50" />
              Novo Endereço
            </Button>
            <Button type="button" onClick={handleRemAddress}>
              Remover Endereço
              <TrashIcon className="ml-2 opacity-50" />
            </Button>
          </div>

          <ContactsForm form={form} />

          <div className="flex">
            <Button type="submit" className="mx-auto my-4 w-40">
              Salvar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
