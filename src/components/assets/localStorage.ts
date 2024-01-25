type Address = {
  addressLineOne: string;
  addressLineTwo: string;
  number: string;
  cep: string;
  city: string;
  state: string;
};

export type CustomerValues = {
  personalData: {
    name: string;
    lastName: string;
    email: string;
    cpf: string;
    rg: string;
    birthDate: Date;
  };
  addresses: Address[];
  contacts: {
    contact: {
      contactName: string;
      email: string;
      phoneNumber: string;
    };
  };
};

export const setUserOnLS = (email: string) => {
  const userObj = { email };
  localStorage.setItem("user", JSON.stringify(userObj));
};

export const getUserFromLS = () => {
  const result = localStorage.getItem("user");
  return result ? JSON.parse(result) : "";
};

export const setCustomerOnLs = (data: CustomerValues) => {
  localStorage.setItem("Customers", JSON.stringify(data));
};

export const getCustomerFromLS = () => {
  const result = localStorage.getItem("Customers");
  return result ? JSON.parse(result) : "";
};

export const addCustomerOnLs = (data: CustomerValues) => {
  const previousCustomers = getCustomerFromLS();
  localStorage.setItem(
    "Customers",
    JSON.stringify([...previousCustomers, data])
  );
};

export const remCustomerFromLs = (index: number) => {
  const previousCustomers = getCustomerFromLS();
  const result = previousCustomers.toSpliced(index, 1);
  localStorage.setItem("Customers", JSON.stringify(result));
};

export const updateCustomerOnLs = (data: CustomerValues, index: number) => {
  const previousCustomers = getCustomerFromLS();
  previousCustomers[index] = data;
  localStorage.setItem("Customers", JSON.stringify(previousCustomers));
};
