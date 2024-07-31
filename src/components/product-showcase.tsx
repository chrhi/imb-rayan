"use client";

import type { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TProduct } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Cable,
  Flame,
  Info,
  Layers3,
  Scale3D,
  ShoppingBasket,
} from "lucide-react";
import dynamic from "next/dynamic";
import { BasketStore, useOpenGazSelectionAction } from "@/lib/zustand";
import { Zoom } from "./zoom-image";
import { Skeleton } from "./ui/skeleton";
import OptionGaz from "./modals/option-gaz";

// Dynamically import React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface ProductShowcaseProps {
  product: TProduct;
}

const ItemDetails = [
  {
    icon: <Info className="w-8 h-8 text-white" />,
    title: "Reference",
    text: "-Sur Four  CG904III-Do",
  },
  {
    icon: <Layers3 className="w-8 h-8 text-white" />,
    title: "Matiere",
    text: "INOXAISI 304",
  },
  {
    icon: <Flame className="w-8 h-8 text-white" />,
    title: "Gaz",
    text: "Gaz naturel ou propane",
  },
  {
    icon: <Cable className="w-8 h-8 text-white" />,
    title: "Puissance Gaz ",
    text: "31",
  },
  {
    icon: <Scale3D className="w-8 h-8 text-white" />,
    text: "800x900x850",
    title: "(chambre) LxPxH (mm)",
  },
];

// Custom toolbar options
const modules = {
  toolbar: false,
};

const ProductShowcase: FC<ProductShowcaseProps> = ({ product }) => {
  const [isGaz, setIsGaz] = useState<boolean>(false);

  const [selectedImage, setSelectedImage] = React.useState<string>(
    product.images[0]?.url || ""
  );

  const addProduct = BasketStore((item) => item.addProduct);

  const setIsOpen = useOpenGazSelectionAction((item) => item.setIsOpen);

  return (
    <>
      <OptionGaz isGaz={isGaz} setIsGaz={setIsGaz} />
      <div className="w-full min-h-[600px] h-fit mx-auto  grid gap-x-8  grid-cols-1 md:grid-cols-3">
        <div className="w-full h-[600px] flex  my-20  col-span-2 pr-8 gap-x-4 ">
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
                      className=" md:basis-1/4 w-full"
                    >
                      <div className=" w-full h-[100px]  md:w-[130px] md:h-[130px]  rounded-2xl border relative">
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

          <div className="w-[80%]  h-[600px]  flex flex-col gap-y-4   rounded-2xl relative">
            <div className="w-full  h-[530px]     rounded-2xl relative">
              <Zoom>
                <Image
                  alt="image"
                  src={selectedImage}
                  fill
                  className="rounded-2xl object-cover"
                />
              </Zoom>
            </div>

            <Button
              onClick={() => {
                if (product.optionGaz) {
                  setIsOpen(true);
                }
                addProduct({ ...product, optionGaz: isGaz });
              }}
              className="bg-primary h-[50px] text-xl font-bold gap-x-4"
              size={"lg"}
            >
              <ShoppingBasket className="w-6 h-6 text-white" />
              Add aux panier
            </Button>
          </div>
        </div>

        <div className="w-full min-h-[300px]  h-[600px]  md:my-20  flex flex-col rounded-2xl gap-y-6">
          <div className="w-full h-fit min-h-[100px]  flex flex-col  gap-y-2  ">
            {ItemDetails.map((item) => {
              return (
                <div
                  key={item.title}
                  className="w-full h-[80px] flex items-center justify-start  rounded-xl bg-primary"
                >
                  <div className="w-[40%] h-full bg-black  rounded-r-none flex items-center justify-start gap-x-4 px-2 rounded-xl ">
                    {item.icon}
                    <span className="text-white font-bold text-xl">
                      {item.title}
                    </span>
                  </div>

                  <div className=" w-[60%] h-[80px]  rounded-xl flex flex-col items-start justify-center pl-4 ">
                    <span className="text-white font-bold text-xl">
                      {item.text}
                    </span>
                  </div>
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

export const ProductShowcaseLoader = () => {
  return (
    <>
      <div className="w-full min-h-[600px] h-fit mx-auto  grid gap-x-8  grid-cols-1 md:grid-cols-3">
        <div className="w-full h-[600px] flex  my-20  col-span-2 pr-8 gap-x-4 ">
          <div className="w-[20%] h-full flex justify-start  ">
            <Skeleton className="w-full h-full " />
          </div>

          <div className="w-[80%]  h-[600px]  flex flex-col gap-y-4   rounded-2xl relative">
            <div className="w-full  h-[530px]     rounded-2xl relative">
              <Skeleton className="w-full h-full " />
            </div>

            <Button
              className="bg-primary h-[50px] text-xl font-bold gap-x-4"
              size={"lg"}
            >
              <ShoppingBasket className="w-6 h-6 text-white" />
              Add aux panier
            </Button>
          </div>
        </div>

        <div className="w-full min-h-[300px]  h-[600px]  md:my-20  flex flex-col rounded-2xl gap-y-6">
          <div className="w-full h-fit min-h-[100px]  flex flex-col  gap-y-2  ">
            {ItemDetails.map((item) => {
              return (
                <div
                  key={item.title}
                  className="w-full h-[80px] flex items-center justify-start  rounded-xl bg-primary"
                >
                  <div className="w-[40%] h-full bg-black  rounded-r-none flex items-center justify-start gap-x-4 px-2 rounded-xl ">
                    {item.icon}
                    <span className="text-white font-bold text-xl">
                      {item.title}
                    </span>
                  </div>

                  <div className=" w-[60%] h-[80px]  rounded-xl flex flex-col items-start justify-center pl-4 ">
                    <span className="text-white font-bold text-xl">
                      {item.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-fit min-h-[100px] gap-y-4  flex flex-col ">
        <h2 className="text-4xl font-bold">Description</h2>

        <div className="w-full h-fit ">
          <Skeleton className="w-full h-[200px] " />
        </div>
      </div>
    </>
  );
};
