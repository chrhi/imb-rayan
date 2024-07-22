"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <div className="w-full h-fit md:h-[500px] bg-black flex flex-col justify-end ">
      <MaxWidthWrapper className="w-full h-fit md:h-[300px]">
        <div className="w-full h-fit md:h-[300px]  grid grid-cols-1 md:grid-cols-5  ">
          <div className=" col-span-1 md:col-span-2 w-full h-full flex flex-col justify-between p-4 gap-y-4">
            <div className="flex flex-col gap-y-8  ">
              <div className="w-[100px] h-[100px] bg-white rounded-xl flex items-center justify-center">
                <Image alt="the logo" src="/logo.png" width={70} height={70} />
              </div>
              <span className="text-white text-xl text-start ">
                Abonnez-vous à notre newsletter pour les dernières mises à jour
                et offres.
              </span>
            </div>
            <Button
              size="lg"
              className="w-[80%] mr-auto text-lg flex justify-between py-4 h-[60px] bg-white rounded-full  "
            >
              Entrer votre Email
              <div className="w-[40px] h-[30px] bg-black rounded-full flex items-center justify-center">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </Button>
          </div>
          <div className="col-span-1 w-full h-full flex flex-col gap-y-4 p-4">
            <Link href="#">
              <span className="text-white  text-lg font-bold">Entreprise</span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">À propos de nous</span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">Carrières</span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">Blog</span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">Contactez-nous</span>
            </Link>
          </div>
          <div className="col-span-1 w-full h-full flex flex-col gap-y-4 p-4">
            <Link href="#">
              <span className="text-white  text-lg font-bold">
                Réseaux sociaux
              </span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">Facebook</span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">Instagram</span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">LinkedIn</span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">YouTube</span>
            </Link>
          </div>
          <div className="col-span-1 w-full h-full flex flex-col justify-start items-end"></div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="w-full h-[100px] md:h-[80px] border-t mt-4 border-white flex items-center justify-center ">
          <span className="text-xs text-white">
            IMB Industrie Étude,conception et fabrication d&apos;équipement des
            cuisines professionnelles en Algérie .© 2024 Touts Droits Réservés.
            |{" "}
            <Link href={"/auth"} className="hover:underline cursor-pointer">
              se connecter
            </Link>{" "}
          </span>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
