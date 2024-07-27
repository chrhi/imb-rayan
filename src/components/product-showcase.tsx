"use client";

import type { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@prisma/client";
import { TProduct } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Cable, Flame, Info, Layers3, ShoppingBasket } from "lucide-react";
import dynamic from "next/dynamic";
import { BasketStore } from "@/lib/zustand";
// Dynamically import React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface ProductShowcaseProps {
  product: TProduct;
}

const ItemDetails = [
  {
    icon: <Info className="w-6 h-6 text-white" />,
    title: "Reference",
  },
  {
    icon: <Layers3 className="w-6 h-6 text-white" />,
    title: "Matiere",
  },
  {
    icon: <Flame className="w-6 h-6 text-white" />,
    title: "Gaz",
  },
  {
    icon: <Cable className="w-6 h-6 text-white" />,
    title: "Puissance Gaz ",
  },
];

// Custom toolbar options
const modules = {
  toolbar: false,
};

const ProductShowcase: FC<ProductShowcaseProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = React.useState<string>(
    product.images[0]?.url || ""
  );

  const addProduct = BasketStore((item) => item.addProduct);

  console.log(product?.description);

  return (
    <>
      <div className="w-full min-h-[600px] h-fit mx-auto  grid grid-cols-3">
        <div className="w-full h-[600px] flex  my-20  col-span-2 pr-8">
          <div className="w-[20%] h-full flex justify-start  ">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full  "
            >
              <CarouselContent className=" h-[600px] w-full flex flex-col items-start ">
                {product.images.map((item) => {
                  return (
                    <CarouselItem
                      onClick={() => {
                        setSelectedImage(item.url);
                      }}
                      key={item.id}
                      className=" md:basis-1/4"
                    >
                      <div className="w-[130px] h-[130px]  rounded-2xl border relative">
                        <Image
                          alt="image"
                          src={item.url}
                          fill
                          className="rounded-2xl object-cover"
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="w-[80%]  h-[600px]    border rounded-2xl relative">
            <Image
              alt="image"
              src={selectedImage}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="w-full min-h-[300px]  h-[600px]  my-20  flex flex-col rounded-2xl gap-y-6">
          <Button
            onClick={() => {
              addProduct(product);
            }}
            className="bg-primary h-[50px] font-bold gap-x-4"
            size={"lg"}
          >
            <ShoppingBasket className="w-6 h-6 text-white" />
            Add aux panier
          </Button>

          <Separator />
          <h2 className="text-2xl font-bold">Caractéristiques</h2>
          <div className="w-full h-fit min-h-[100px]  flex flex-col border-2 border-black gap-y-1 bg-black ">
            {ItemDetails.map((item) => {
              return (
                <div
                  key={item.title}
                  className="w-full h-[70px] flex items-center justify-start  border-b border-black"
                >
                  <div className="w-[40%] h-full bg-black  flex items-center justify-start gap-x-4 px-2">
                    {item.icon}
                    <span className="text-white font-bold">{item.title}</span>
                  </div>

                  <div className="bg-secondary w-[60%] h-[70px]  "></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-fit min-h-[100px] gap-y-4  flex flex-col ">
        <h2 className="text-4xl font-bold">Description</h2>

        <div className="w-full h-fit ">
          <ReactQuill
            value={product?.description || []}
            readOnly
            modules={modules}
          />
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
