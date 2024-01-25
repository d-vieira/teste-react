import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function AddressesForm({ form, name }: any) {
  return (
    <div className="flex flex-col mx-10 px-10">
      <FormLabel className="mb-6 text-lg">Endereços</FormLabel>
      <div className="grid grid-cols-3 items-center justify-evenly gap-3">
        <FormField
          control={form.control}
          name={`${name}.addressLineOne`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="dark:text-black/80 placeholder:text-black/60"
                  placeholder="Logradouro"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`${name}.number`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="dark:text-black/80 placeholder:text-black/60"
                  placeholder="Número"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`${name}.addressLineTwo`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="dark:text-black/80 placeholder:text-black/60"
                  placeholder="Complemento"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`${name}.cep`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="dark:text-black/80 placeholder:text-black/60"
                  placeholder="CEP"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`${name}.city`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="dark:text-black/80 placeholder:text-black/60"
                  placeholder="Cidade"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`${name}.state`}
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Estado"
                      className="dark:text-black/80 placeholder:text-black/60"
                    />
                  </SelectTrigger>
                </FormControl>
                <FormMessage />
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
