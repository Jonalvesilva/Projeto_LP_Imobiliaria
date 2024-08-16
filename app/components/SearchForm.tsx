"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import { Button } from "./ui/button";
import Switch from "./Switch";
import {
  MapPin,
  SearchIcon,
  Building,
  Banknote,
  BedSingle,
} from "lucide-react";

const formSchema = z.object({
  cidade: z.string().min(2, {
    message: "Minimo de 2 caracteres",
  }),
  bairro: z.string().min(2, {
    message: "Minimo de 2 caracteres",
  }),
  valor: z.string(),
  quartos: z.string(),
});

export default function SearchForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cidade: "",
      bairro: "",
      valor: "",
      quartos: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="bg-white w-[600px] p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">
        Os melhores imóveis você encontra aqui
      </h2>
      <Switch />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="cidade"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <div className="flex w-full items-center border-gray-200 border rounded-xl px-2">
                    <MapPin size={18} />
                    <input
                      placeholder="Rio de Janeiro"
                      {...field}
                      className="border-0 outline-none focus-visible:outline-none p-2 w-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bairro"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <div className="flex w-full items-center border-gray-200 border rounded-xl px-2">
                    <Building size={18} />
                    <input
                      placeholder="São Gonçalo"
                      {...field}
                      className="border-0 outline-none focus-visible:outline-none p-2 w-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-x-8">
            <FormField
              control={form.control}
              name="valor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <div className="flex w-full items-center border-gray-200 border rounded-xl px-1">
                      <Banknote size={18} />
                      <Select>
                        <SelectTrigger className="w-full border-0 text-gray-400 text-md">
                          <SelectValue placeholder="Escolha o valor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Valores</SelectLabel>
                            <SelectItem value="a">
                              Entre R$ 1.000 a R$ 10.000
                            </SelectItem>
                            <SelectItem value="b">
                              Entre R$ 10.000 a R$ 100.000
                            </SelectItem>
                            <SelectItem value="c">
                              Entre R$ 100.000 a R$ 1.000.000
                            </SelectItem>
                            <SelectItem value="e">Outros Valores</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quartos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quartos</FormLabel>
                  <FormControl>
                    <div className="flex w-full items-center border-gray-200 border rounded-xl px-1">
                      <BedSingle size={18} />
                      <Select>
                        <SelectTrigger className="w-full border-0 text-gray-400 text-md">
                          <SelectValue placeholder="Número de Quartos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Valores</SelectLabel>
                            <SelectItem value="a">+1</SelectItem>
                            <SelectItem value="b">+2</SelectItem>
                            <SelectItem value="c">+3</SelectItem>
                            <SelectItem value="e">Outros Valores</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="flex items-center gap-x-2 w-full mt-12"
          >
            <SearchIcon size={18} />
            Pesquisar
          </Button>
        </form>
      </Form>
    </div>
  );
}
