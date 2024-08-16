"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown, MenuIcon, User2Icon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

export default function Header() {
  return (
    <header className="w-full h-[100px] border-b border-gray-300 fixed z-10 bg-white">
      <div className="w-full h-full px-8 flex items-center justify-between">
        {/*Logo*/}
        <div className="h-full flex items-center">
          <Image src="/logo.png" alt="logo" width={180} height={120} />
        </div>

        {/*Menu Button*/}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-300 border-gray-400"
              >
                <MenuIcon size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-0 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-start">Menu</SheetTitle>
              </SheetHeader>
              <div className="h-full flex flex-col justify-between">
                <div className="py-5">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="item-1"
                      className="w-full border-0  text-sm text-black/80"
                    >
                      <AccordionTrigger className="flex justify-start hover:no-underline gap-2 hover:bg-gray-50">
                        Alugar
                      </AccordionTrigger>
                      <AccordionContent className="flex">
                        <ul className="mt-3 flex gap-y-2 flex-col w-full">
                          <li className="hover:bg-gray-100 p-2">São Paulo</li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Rio de Janeiro
                          </li>
                          <li className="hover:bg-gray-100 p-2">
                            Belo Horizonte
                          </li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Porto Alegre
                          </li>{" "}
                          <li className="hover:bg-gray-100 p-2">Campinas</li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Outras Cidades
                          </li>{" "}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="w-full border-0  text-sm text-black/80"
                    >
                      <AccordionTrigger className="flex justify-start hover:no-underline gap-2 hover:bg-gray-50">
                        Comprar
                      </AccordionTrigger>
                      <AccordionContent className="flex">
                        <ul className="mt-3 flex gap-y-2 flex-col w-full">
                          <li className="hover:bg-gray-100 p-2">São Paulo</li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Rio de Janeiro
                          </li>
                          <li className="hover:bg-gray-100 p-2">
                            Belo Horizonte
                          </li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Porto Alegre
                          </li>{" "}
                          <li className="hover:bg-gray-100 p-2">Campinas</li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Outras Cidades
                          </li>{" "}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="w-full border-0  text-sm text-black/80"
                    >
                      <AccordionTrigger className="flex justify-start hover:no-underline gap-2 hover:bg-gray-50">
                        Anunciar
                      </AccordionTrigger>
                      <AccordionContent className="flex">
                        <ul className="mt-3 flex gap-y-2 flex-col w-full">
                          <li className="hover:bg-gray-100 p-2">São Paulo</li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Rio de Janeiro
                          </li>
                          <li className="hover:bg-gray-100 p-2">
                            Belo Horizonte
                          </li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Porto Alegre
                          </li>{" "}
                          <li className="hover:bg-gray-100 p-2">Campinas</li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Outras Cidades
                          </li>{" "}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-4"
                      className="w-full border-0  text-sm text-black/80"
                    >
                      <AccordionTrigger className="flex justify-start hover:no-underline gap-2 hover:bg-gray-50">
                        Links Úteis
                      </AccordionTrigger>
                      <AccordionContent className="flex">
                        <ul className="mt-3 flex gap-y-2 flex-col w-full">
                          <li className="hover:bg-gray-100 p-2">Sobre Nós</li>{" "}
                          <li className="hover:bg-gray-100 p-2">
                            Redes Sociais
                          </li>
                          <li className="hover:bg-gray-100 p-2">
                            Fale Conosco
                          </li>{" "}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex gap-x-4 items-center justify-center text-sm mt-6 bg-gray-800 text-white p-2">
                    <User2Icon size={18}></User2Icon> Faça seu login
                  </div>
                </div>
                <footer className="text-xs text-gray-500 border-t border-solid py-3">
                  Era Real Estate @Copyright 2024
                </footer>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/*Options*/}
        <div className="hidden lg:flex">
          <div className="flex gap-x-8">
            <Popover>
              <PopoverTrigger className="flex items-center gap-2">
                Alugar <ChevronDown size={18} />
              </PopoverTrigger>
              <PopoverContent className="relative left-[60px] w-[200px] ">
                {" "}
                <div className="px-2 py-1">
                  <h2 className="text-md font-bold border-b border-solid p-2">
                    Cidade
                  </h2>
                  <ul className="mt-3 flex gap-y-2 flex-col">
                    <li className="hover:bg-gray-100 p-2">São Paulo</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Rio de Janeiro</li>
                    <li className="hover:bg-gray-100 p-2">
                      Belo Horizonte
                    </li>{" "}
                    <li className="hover:bg-gray-100 p-2">Porto Alegre</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Campinas</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Outras Cidades</li>{" "}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className="flex items-center gap-2">
                Comprar <ChevronDown size={18} />
              </PopoverTrigger>
              <PopoverContent className="relative left-[55px] w-[200px] ">
                <div className="px-2 py-1">
                  <h2 className="text-md font-bold border-b border-solid p-2">
                    Cidade
                  </h2>
                  <ul className="mt-3 flex gap-y-2 flex-col">
                    <li className="hover:bg-gray-100 p-2">São Paulo</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Rio de Janeiro</li>
                    <li className="hover:bg-gray-100 p-2">
                      Belo Horizonte
                    </li>{" "}
                    <li className="hover:bg-gray-100 p-2">Porto Alegre</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Campinas</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Outras Cidades</li>{" "}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className="flex items-center gap-2">
                Anunciar <ChevronDown size={18} />
              </PopoverTrigger>
              <PopoverContent className="relative left-[55px] w-[200px] ">
                {" "}
                <div className="px-2 py-1">
                  <h2 className="text-md font-bold border-b border-solid p-2">
                    Cidade
                  </h2>
                  <ul className="mt-3 flex gap-y-2 flex-col">
                    <li className="hover:bg-gray-100 p-2">São Paulo</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Rio de Janeiro</li>
                    <li className="hover:bg-gray-100 p-2">
                      Belo Horizonte
                    </li>{" "}
                    <li className="hover:bg-gray-100 p-2">Porto Alegre</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Campinas</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Outras Cidades</li>{" "}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className="flex items-center gap-2">
                Links Úteis <ChevronDown size={18} />
              </PopoverTrigger>
              <PopoverContent className="relative left-[45px] w-[200px] ">
                <div className="px-2 py-1">
                  <h2 className="text-md font-bold border-b border-solid p-2">
                    Utilidades
                  </h2>
                  <ul className="mt-3 flex gap-y-2 flex-col">
                    <li className="hover:bg-gray-100 p-2">Sobre Nós</li>{" "}
                    <li className="hover:bg-gray-100 p-2">Redes Sociais</li>
                    <li className="hover:bg-gray-100 p-2">Fale Conosco</li>{" "}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            <Button
              variant="ghost"
              className="text-md font-lighter flex gap-x-4 p-2 border border-solid rounded-xl"
            >
              <User2Icon size={18}></User2Icon>Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
