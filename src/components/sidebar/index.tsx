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
    <div className="flex w-full flex-col bg-white">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-muted/40 sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center bg-black text-white rounded-full"
            >
              <Package className="h-4 w-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            {[
              { icon: <Home className="h-5 w-5" />, label: "Início" },
              { icon: <ShoppingBag className="h-5 w-5" />, label: "Pedidos" },
              { icon: <Package className="h-5 w-5" />, label: "Produtos" },
              { icon: <Users className="h-5 w-5" />, label: "Clientes" },
              { icon: <Settings2 className="h-5 w-5" />, label: "Configuração" },
            ].map(({ icon, label }, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center text-zinc-500 hover:text-zinc-900 rounded-lg"
                  >
                    {icon}
                    <span className="sr-only">{label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="text-white font-semibold text-xs border border-gray-200 px-2 rounded-full bg-zinc-600"
                >
                  {label}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>

        {/* Logout */}
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center text-zinc-500 hover:text-zinc-900 rounded-lg"
                >
                  <LogOut className="h-5 w-5 text-red-500" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="text-white font-semibold text-xs border border-gray-200 px-2 rounded-full bg-zinc-600"
              >
                Sair
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col flex-1">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <PanelBottom className="w-5 h-5" />
                <DialogTitle className="sr-only">Abrir/Fechar menu</DialogTitle>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                {[
                  { icon: <Home className="h-5 w-5" />, label: "Início" },
                  { icon: <ShoppingBag className="h-5 w-5" />, label: "Pedidos" },
                  { icon: <Package className="h-5 w-5" />, label: "Produtos" },
                  { icon: <Users className="h-5 w-5" />, label: "Clientes" },
                  { icon: <Settings2 className="h-5 w-5" />, label: "Configurações" },
                ].map(({ icon, label }, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-zinc-500 hover:text-zinc-900"
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <h4>Menu</h4>
        </header>
      </div>
    </div>
  );
}
