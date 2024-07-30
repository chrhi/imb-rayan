import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import type { FC } from "react";

interface PageProps {}

const Page: FC = ({}) => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="w-full min-h-[400px] my-12 gap-x-8 grid md:grid-cols-2 grid-cols-1 gap-y-4">
          <div className="w-full h-full flex flex-col gap-y-4">
            <h2 className="text-5xl text-start font-bold">Notre Parcours</h2>
            <span className="text-start text-gray-700 text-xl">
              Fondée en 1964 , IMB Industrie est passée d&apos;un petit atelier
              à un leader dans la fabrication de fours industriels et
              d&apos;équipements de cuisine en Algérie. Notre parcours a
              commencé avec un engagement envers la qualité et
              l&apos;innovation, qui reste au cœur de tout ce que nous faisons.
              Au fil des années, nous avons élargi notre gamme de produits,
              adopté de nouvelles technologies et établi des relations solides
              avec nos clients dans divers secteurs.
            </span>
          </div>

          <div className="w-full h-full relative ">
            <Image
              src={"/imb-first.jpg"}
              alt="image of the company"
              fill
              className="object-cover rounded-2xl "
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="w-full min-h-[400px] my-12 gap-x-8  grid md:grid-cols-2 grid-cols-1 gap-y-4">
          <div className="w-full h-full relative ">
            <Image
              src={"/IMB_0051.jpg"}
              alt="image of the company"
              fill
              className="object-cover rounded-2xl "
            />
          </div>
          <div className="w-full h-full flex flex-col gap-y-4">
            <h2 className="text-5xl text-start font-bold">
              Notre Mission & Vision
            </h2>
            <span className="text-start text-gray-700 text-xl">
              Chez IMB Industrie, notre mission est de fournir des équipements
              de cuisine de haute qualité, fiables et innovants qui répondent
              aux besoins de nos clients. Nous nous efforçons d&apos;offrir une
              valeur exceptionnelle grâce à une fabrication supérieure, un
              service client de qualité et une amélioration continue. Notre
              vision est de devenir un fournisseur mondial de premier plan de
              fours industriels et de solutions de cuisine, reconnu pour notre
              engagement envers la durabilité et l&apos;excellence.
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
