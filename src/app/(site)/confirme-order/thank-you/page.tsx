import MaxWidthWrapper from "@/components/max-width-wrapper";
import type { FC } from "react";

const Page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-screen flex flex-col gap-y-4 pt-32">
        <h1 className="text-5xl font-bold text-center text-black">
          Merci de Nous Faire Confiance 😊
        </h1>
        <span className="text-2xl text-center">
          nous traiterons votre commande dans les plus brefs délais
        </span>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
