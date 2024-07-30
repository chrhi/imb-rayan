"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <div className="w-full h-fit md:h-[500px] bg-primary flex flex-col justify-end ">
      <MaxWidthWrapper className="w-full h-fit md:h-[300px]">
        <div className="w-full h-fit md:h-[300px]  grid grid-cols-1 md:grid-cols-5  ">
          <div className=" col-span-1 md:col-span-2 w-full h-full flex flex-col justify-between p-4 gap-y-4">
            <div className="flex flex-col gap-y-8  ">
              <div className="w-[100px] h-[100px] bg-white rounded-xl flex items-center justify-center">
                <Image alt="the logo" src="/logo.png" width={70} height={70} />
              </div>

              <div className="w-full h-fit flex flex-col gap-y-1 pl-0 text-white">
                <p className="text-md text-whitefont-semibold">
                  I.M.B Industrie Sarl
                </p>
                <p className="text-sm">
                  1, bd Mohamed Khemisti 16100 Dar El Beida Alger -Algérie
                </p>
                <p className="text-sm">
                  <span className="font-bold">TEL :</span> +213 23 67 61 62 – 63
                  – 64
                </p>
                <p className="text-sm">
                  {" "}
                  <span className="font-bold">FAX :</span> +213 23 67 61 65 – 66
                </p>
                <p className="text-sm">
                  {" "}
                  <span className="font-bold">E-mail :</span>{" "}
                  info@imb-industrie.com
                </p>
              </div>
            </div>
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
              <span className="text-gray-50 ">Contactez-nous</span>
            </Link>
          </div>
          <div className="col-span-1 w-full h-full flex flex-col gap-y-4 p-4">
            <Link href="#">
              <span className="text-white  text-lg font-bold">
                Réseaux sociaux
              </span>
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/IMBIndustrie?locale=es_LA"
            >
              <span className="text-gray-50 ">Facebook</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/imb_industrie/"
            >
              <span className="text-gray-50 ">Instagram</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/i-m-b-industrie/"
            >
              <span className="text-gray-50 ">LinkedIn</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@imbindustrie8199"
            >
              <span className="text-gray-50 ">YouTube</span>
            </Link>
          </div>
          <div className="col-span-1 w-full h-full flex flex-col gap-y-4 p-4">
            <Link href="#">
              <span className="text-white  text-lg font-bold">
                politique d&apos;entreprise
              </span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">
                politique de confidentialité
              </span>
            </Link>
            <Link href="#">
              <span className="text-gray-50 ">politique après vente</span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="w-full h-[100px] md:h-[80px] border-t mt-4 border-gray-200 flex items-center justify-center md:justify-start ">
          <span className="text-xs  text-white">
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
