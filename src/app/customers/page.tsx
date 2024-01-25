"use client";

import Header from "@/components/Header";
import ProtectedRoute, { User } from "@/components/ProtectedRoute";
import RegisterClienteForm from "@/components/RegisterClientForm";
import {
  CustomerValues,
  getCustomerFromLS,
  remCustomerFromLs,
} from "@/components/assets/localStorage";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditIcon, TrashIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Customers() {
  const [user, setUser] = useState<User>();
  const [customers, setCustomers] = useState<CustomerValues[]>([]);
  const [edit, setEdit] = useState<number | undefined>();

  useEffect(() => {
    setCustomers(getCustomerFromLS());
  }, [setCustomers, edit]);

  function handleRemCustomer(index: number) {
    return () => {
      remCustomerFromLs(index);
      setCustomers(getCustomerFromLS());
    };
  }

  function handleEditCustomer(index: number) {
    return () => {
      setEdit(index);
    };
  }

  return (
    <div>
      <ProtectedRoute login={setUser}>
        <Header />
        {edit != undefined && (
          <div className="relative">
            <Button
              className="absolute top-0 right-0"
              onClick={() => {
                setEdit(undefined);
              }}
            >
              <XIcon />
            </Button>
            <RegisterClienteForm defaultValues={customers[edit]} edit={edit} />
          </div>
        )}
        {edit == undefined && (
          <Table className="relative rounded-lg mt-6 bg-gray-200 dark:bg-gray-700">
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Nº de Telefone</TableHead>
                <TableHead>Opções</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer, index) => (
                <TableRow key={index}>
                  <TableCell>{`${customer.personalData.name} ${customer.personalData.lastName}`}</TableCell>
                  <TableCell>{customer.personalData.email}</TableCell>
                  <TableCell>{customer.contacts.contact.phoneNumber}</TableCell>
                  <TableCell className="flex gap-1">
                    <Button type="button" onClick={handleEditCustomer(index)}>
                      <EditIcon />
                    </Button>
                    <Button type="button" onClick={handleRemCustomer(index)}>
                      <TrashIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </ProtectedRoute>
    </div>
  );
}
