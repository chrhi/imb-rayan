"use client";

import type { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home, Package, Package2, Settings, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: FC = ({}) => {
  const path = usePathname();

  const isPathActive = ({ currectPath }: { currectPath: string }) => {
    if (currectPath === path) {
      return true;
    }

    return false;
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard"
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isPathActive({
                  currectPath: "/dashboard",
                })
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } `}
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-black text-white">
            Dashboard
          </TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard/products"
              className={`flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isPathActive({
                  currectPath: "/dashboard/products",
                })
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } `}
            >
              <Package className="h-5 w-5" />
              <span className="sr-only">Products</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-black text-white">
            Products
          </TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard/customers"
              className={`flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isPathActive({
                  currectPath: "/dashboard/customers",
                })
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } `}
            >
              <Users2 className="h-5 w-5" />
              <span className="sr-only">Customers</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-black text-white">
            Customers
          </TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard/settings"
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                isPathActive({
                  currectPath: "/dashboard/settings",
                })
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } `}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-black text-white">
            Settings
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default Sidebar;
