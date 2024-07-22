"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { isArrayOfFile } from "@/lib/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string;
  images: {
    id: string;
    name: string;
    url: string;
  }[];
  name: string;
  status: "DARFT" | "PUBLISHED";
  price: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "images",
    header: "Photo",
    cell: ({ row }) => {
      return (
        <>
          {row?.original?.images.length > 0 ? (
            <img
              alt={row.original.name + "image"}
              src={row?.original?.images[0]?.url || ""}
              className="w-[60px] h-[60px] object-cover rounded-2xl"
            />
          ) : (
            <div className="w-[60px] h-[60px] rounded-2xl bg-gray-500 flex items-center justify-center"></div>
          )}
        </>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Prix",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit product</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete Product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
