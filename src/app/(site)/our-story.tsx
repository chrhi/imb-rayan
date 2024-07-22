import Image from "next/image";
import type { FC } from "react";

const OurStory: FC = ({}) => {
  return (
    <div className="w-full h-fit md:h-[500px] grid grid-cols-1 md:grid-cols-2 gap-y-8 ">
      <div className="w-full h-full flex flex-col gap-y-4 pr-4">
        <h2 className="text-5xl font-bold text-start">
          comment l&apos;entreprise a démarré
        </h2>
        <p className="text-xl text-gray-700 mt-6">
          Fondée en 1964 par Monsieur Abdelhamid Boulanaache, I.M.B Industrie
          est aujourd’hui leader sur le marché Algérien dans la fabrication
          d’équipements pour grandes cuisines.
        </p>
        <p className="text-xl text-gray-700">
          Au fil des années, l’entreprise s’est progressivement développée et
          modernisée mais elle demeure une société familiale à taille humaine
          qui privilégie les relations avec ses clients.
        </p>
        <p className="text-xl text-gray-700">
          Persévérance, ténacité et rigueur ont permis à I.M.B Industrie de
          traverser plus de quatre décennies d’existence et faire aujourd’hui le
          succès de la marque.
        </p>
      </div>

      <div className="w-full h-[500px] md:h-full rounded-2xl bg-gray-100 relative">
        <Image
          src={"/IMB_0051.jpg"}
          alt="image of the company"
          fill
          className="object-cover rounded-2xl "
        />
      </div>
    </div>
  );
};

export default OurStory;
