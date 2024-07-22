import Image from "next/image";
import type { FC } from "react";

const Values: FC = ({}) => {
  return (
    <div className="w-full h-fit md:h-[500px] grid grid-cols-1 md:grid-cols-2 my-20 gap-y-8 ">
      <div className="w-full h-[500px] md:h-full rounded-2xl bg-gray-100 relative">
        <Image
          src={"/imb-first.jpg"}
          alt="image of the company"
          fill
          className="object-cover rounded-2xl "
        />
      </div>
      <div className="w-full h-full flex flex-col gap-y-4 px-4">
        <h2 className="text-5xl font-bold text-start">
          les valeurs de notre entreprise
        </h2>
        <p className="text-xl text-gray-700">
          Nos clients sont au cœur de tout ce que nous faisons. Nous adaptons
          nos solutions pour répondre à leurs besoins uniques
        </p>
        <div className="w-full h-[300px] flex flex-col mt-4 gap-y-4">
          <div className="w-full h-[70px]  ">
            <p>
              <span className="text-black font-bold">
                L&apos;excellence dans les moindres détails
              </span>{" "}
              Notre engagement envers la qualité garantit que chaque produit et
              service répond aux normes les plus élevées.
            </p>
          </div>
          <div className="w-full h-[70px]  ">
            <p>
              <span className="text-black font-bold">
                Responsabilité environnementale
              </span>{" "}
              Nous nous efforçons de minimiser notre impact environnemental et
              de promouvoir la durabilité dans toutes nos opérations.
            </p>
          </div>
          <div className="w-full h-[70px]  ">
            <p>
              <span className="text-black font-bold">
                Approche centrée sur le client
              </span>{" "}
              Nos clients sont au cœur de tout ce que nous faisons. Nous
              adaptons nos solutions pour répondre à leurs besoins uniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
