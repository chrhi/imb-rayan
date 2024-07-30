import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { FC } from "react";

const Page: FC = () => {
  return (
    <div className="w-full min-h-screen h-fit pt-10 md:pt-0 ">
      <MaxWidthWrapper className="w-full h-fit flex flex-col gap-y-5 mb-20 ">
        <div className="w-full h-fit min-h-[200px]  grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-full h-full flex flex-col  md:p-20 md:pl-0 gap-y-8">
            <h1 className="text-5xl font-bold md:text-start text-center">
              Nous offrons divers services à nos clients
            </h1>

            <Button size={"lg"} className="max-w-[150px] h-[50px]">
              Contactez-nous
            </Button>
          </div>
        </div>

        <div className="w-full h-[400px] grid grid-cols-3  gap-x-20">
          <div className="w-full h-full flex flex-col gap-y-4  ">
            <div className="w-full h-[200px] bg-primary "></div>

            <h2 className="text-2xl">Instalation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
              nemo repellendus quia molestiae, quis ducimus expedita
              praesentium, ullam officia est alias dolor, neque aperiam fugiat
              quas. Illum, dolore illo?
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-y-4 ">
            <div className="w-full h-[200px] bg-primary "></div>
            <h2 className="text-2xl">Dev</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
              nemo repellendus quia molestiae, quis ducimus expedita
              praesentium, ullam officia est alias dolor, neque aperiam fugiat
              quas. Illum, dolore illo?
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-y-4 ">
            <div className="w-full h-[200px] bg-primary "></div>
            <h2 className="text-2xl">rep somthing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
              nemo repellendus quia molestiae, quis ducimus expedita
              praesentium, ullam officia est alias dolor, neque aperiam fugiat
              quas. Illum, dolore illo?
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
