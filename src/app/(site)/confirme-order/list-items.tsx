"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BasketStore } from "@/lib/zustand";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { FC } from "react";

interface ListItemsProps {}

const ListItems: FC = ({}) => {
  const products = BasketStore((item) => item.products);
  return (
    <div className="w-full h-full flex flex-col gap-y-4 p-8 border-r">
      <div className="w-full h-[50px] flex items-center justify-start pt-4">
        <span className="text-2xl font-bold text-start">
          Votre commande contient ces produits
        </span>
      </div>
      <ScrollArea className="h-[500px] w-full rounded-md flex flex-col gap-y-6  p-4">
        {products.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full h-[100px] flex items-start justify-start gap-x-1"
            >
              <Image
                src={item?.images[0]?.url}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-xl object-cover"
              />

              <span className="text-lg  text-start">{item.name}</span>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default ListItems;
