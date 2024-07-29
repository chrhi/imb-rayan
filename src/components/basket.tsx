import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import type { FC } from "react";
import { Button, buttonVariants } from "./ui/button";
import { MoveRight, ShoppingBag, ShoppingCart } from "lucide-react";
import { BasketStore } from "@/lib/zustand";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
          <div className="w-full h-full flex flex-col gap-y-4 items-start justify-start pb-5 ">
            <ScrollArea className="h-screen w-full rounded-md flex flex-col  p-4">
              {products?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full h-[150px] my-4  flex items-center gap-x-2"
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
            </ScrollArea>

            <div className="w-full h-[100px] flex items-center justify-center">
              <Link
                href="/confirme-order"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-[50px] w-full text-xl text-white font-bold flex items-center justify-center gap-x-2"
                )}
              >
                confirmer la commande
                <MoveRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Basket;
