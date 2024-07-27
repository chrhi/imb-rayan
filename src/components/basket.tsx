import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import type { FC } from "react";
import { Button } from "./ui/button";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { BasketStore } from "@/lib/zustand";
import Image from "next/image";

interface BasketProps {}

const Basket: FC = ({}) => {
  const products = BasketStore((item) => item.products);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className=" flex items-center justify-center  relative border-black"
        >
          <ShoppingBag className="w-6 h-6 " />

          {products.length !== 0 && (
            <span className="w-5 h-5 bg-red-500  rounded-full p-1 font-bold absolute top-0 right-0 text-white flex items-center justify-center">
              {products?.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Panier</SheetTitle>
        </SheetHeader>
        {products?.length === 0 ? (
          <div className="w-full h-full flex flex-col gap-y-4 items-center justify-center">
            <Image
              src="/empty/empty.svg"
              alt="this is empty image"
              width={200}
              height={200}
            />

            <span>Votre panier est vide</span>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col gap-y-4 items-start justify-start py-4">
            {products?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full h-[150px]  flex items-center gap-x-2"
                >
                  <div className="w-[150px]  h-[150px] border border-black  relative  rounded-xl">
                    <Image
                      src={item?.images[0]?.url}
                      alt={item.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                  <div className="w-fit min-w-[150px] h-[150px] flex flex-col gap-y-2 justify-start items-start">
                    <span className="text-start text-lg">{item.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Basket;
