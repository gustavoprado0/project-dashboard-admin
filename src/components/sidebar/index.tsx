'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Tooltip, TooltipProvider } from "../ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">

    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
              <Link 
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-black
              text-white rounded-full"
              >
                <Package className="h-4 w-4" />
                <span className="sr-only">Dashboard Avatar</span>
              </Link>
              
              <Tooltip>
                <TooltipTrigger asChild>
                <Link 
                  href="#"
                  className="flex h-9 w-9 shrink-0
                  text-zinc-500 hover:text-zinc-900 items-center justify-center rounded-lg"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Início</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent
                 side="right"
                 className="text-white font-semibold text-xs border border-gray-200
                 px-2 rounded-full bg-zinc-600">
                  Início
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                <Link 
                  href="#"
                  className="flex h-9 w-9 shrink-0
                  text-zinc-500 hover:text-zinc-900 items-center justify-center rounded-lg"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Pedidos</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent
                 side="right"
                 className="text-white font-semibold text-xs border border-gray-200
                 px-2 rounded-full bg-zinc-600">
                  Pedidos
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                <Link 
                  href="#"
                  className="flex h-9 w-9 shrink-0
                  text-zinc-500 hover:text-zinc-900 items-center justify-center rounded-lg"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Produtos</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent
                 side="right"
                 className="text-white font-semibold text-xs border border-gray-200
                 px-2 rounded-full bg-zinc-600">
                  Produtos
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                <Link 
                  href="#"
                  className="flex h-9 w-9 shrink-0
                  text-zinc-500 hover:text-zinc-900 items-center justify-center rounded-lg"
                >
                  <Users className="h-5 w-5" />
                  <span className="sr-only">Clientes</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent
                 side="right"
                 className="text-white font-semibold text-xs border border-gray-200
                 px-2 rounded-full bg-zinc-600">
                  Clientes
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                <Link 
                  href="#"
                  className="flex h-9 w-9 shrink-0
                  text-zinc-500 hover:text-zinc-900 items-center justify-center rounded-lg"
                >
                  <Settings2 className="h-5 w-5" />
                  <span className="sr-only">Configuração</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent
                 side="right"
                 className="text-white font-semibold text-xs border border-gray-200
                 px-2 rounded-full bg-zinc-600">
                  Configuração
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
         <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link 
                href="#"
                className="flex h-9 w-9 shrink-0
                text-zinc-500 hover:text-zinc-900 items-center justify-center rounded-lg"
                >
                 <LogOut className="h-5 w-5 text-red-500" />
                 <span className="sr-only">Sair</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent
                 side="right"
                 className="text-white font-semibold text-xs border border-gray-200
                 px-2 rounded-full bg-zinc-600">
                  Sair
                </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
    </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex 
        h-14 items-center px-4 border-b bg-background
        gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <DialogTitle className="sr-only">Abrir/Fechar menu</DialogTitle>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link 
                href="#"
                className="flex h-10 w-10 bg-black
                 rounded-full text-lg items-center justify-center text-white md:text-base
                 gap-2"
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Logo do projeto</span>
                </Link>

                <Link 
                href="#"
                className="flex items-center gap-4 px-2.5
                 text-zinc-500 hover:text-zinc-900"
                >
                  <Home className="h-5 w-5 transition-all" />
                  Início
                </Link>

                <Link 
                href="#"
                className="flex items-center gap-4 px-2.5
                 text-zinc-500 hover:text-zinc-900"
                >
                  <ShoppingBag className="h-5 w-5 transition-all" />
                  Pedidos
                </Link>

                <Link 
                href="#"
                className="flex items-center gap-4 px-2.5
                 text-zinc-500 hover:text-zinc-900"
                >
                  <Package className="h-5 w-5 transition-all" />
                  Produtos
                </Link>

                <Link 
                href="#"
                className="flex items-center gap-4 px-2.5
                 text-zinc-500 hover:text-zinc-900"
                >
                  <Users className="h-5 w-5 transition-all" />
                  Clientes
                </Link>

                <Link 
                href="#"
                className="flex items-center gap-4 px-2.5
                 text-zinc-500 hover:text-zinc-900"
                >
                  <Settings2 className="h-5 w-5 transition-all" />
                  Configurações
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h4>Menu</h4>
        </header>
      </div>
    </div>
  );
}
