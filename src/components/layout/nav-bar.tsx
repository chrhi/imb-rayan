"use client";

import type { FC } from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import Image from "next/image";
import { Button } from "../ui/button";
import MobileNav from "./mobil-nav";

import { usePathname } from "next/navigation";
import { DrawerDialogQuote } from "../modals/quote";
import { useRouter } from "next13-progressbar";
import Basket from "../basket";

interface NavBarProps {}

const NavBar: FC = ({}) => {
  const router = useRouter();

  const path = usePathname();

  const isCurrectPath = (itemPath: string) => {
    if (path === itemPath) {
      return true;
    }

    return false;
  };
  return (
    <div className="w-full h-[80px]  bg-white fixed top-0 z-[50] border-b  ">
      <MaxWidthWrapper className="h-[80px]  flex items-center justify-between">
        <div
          onClick={() => router.push("/")}
          className="w-[70px] h-[70px] flex items-center justify-center cursor-pointer"
        >
          <Image
            className=" object-contain"
            src={"/logo.png"}
            alt="logo"
            width={80}
            height={80}
          />
        </div>
        <div className="w-full h-full  items-center justify-end hidden lg:flex  ">
          <Button
            variant={"ghost"}
            className={`text-lg  ${
              isCurrectPath("imb/products") ? "font-bold " : ""
            }`}
            onClick={() => router.push("imb/products")}
          >
            {" "}
            Produits
          </Button>
          <Button
            variant={"ghost"}
            className={`text-lg  ${
              isCurrectPath("imb/services") ? "font-bold " : ""
            }`}
            onClick={() => router.push("/services")}
          >
            {" "}
            Services
          </Button>
          <Button
            variant={"ghost"}
            className={`text-lg  ${isCurrectPath("/blog") ? "font-bold " : ""}`}
            onClick={() => router.push("/blog")}
          >
            {" "}
            A Propos
          </Button>
          <Button
            variant={"ghost"}
            className={`text-lg  ${
              isCurrectPath("/contact-us") ? "font-bold " : ""
            }`}
            onClick={() => router.push("/contact-us")}
          >
            {" "}
            Contactez-nous
          </Button>
          <Basket />
        </div>
        <MobileNav />
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBar;
