"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
import { useOpenProductDeleteAction } from "@/lib/zustand";
import Link from "next/link";

export type Product = {
  id: string;
  images: {
    id: string;
    name: string;
    url: string;
  }[];
  name: string;
  status: "DARFT" | "PUBLISHED";
  range: string;
  company: string;
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
    accessorKey: "",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="">
          <Badge variant="default">
            {row.original.status === "DARFT" ? "Brouillon" : "Publié"}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "range",
    header: "Range",
    cell: ({ row }) => {
      return (
        <div className="">
          <Badge variant="default">{row.original.range}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      return (
        <div className="">
          <Badge variant="destructive">{row.original.company}</Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { setId, setIsOpen } = useOpenProductDeleteAction();

      const deleteAction = () => {
        setId(row.original.id);
        setIsOpen(true);
      };

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
            <Link href={`/dashboard/products/${row.original.id}`}>
              <DropdownMenuItem className=" cursor-pointer">
                Edit product
              </DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500 cursor-pointer"
              onClick={deleteAction}
            >
              Delete Product
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
