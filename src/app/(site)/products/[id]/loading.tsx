import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ProductCardLoader } from "@/components/product-card";
import { ProductShowcaseLoader } from "@/components/product-showcase";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowBigDownDash, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="w-full min-h-screen h-fit pt-10 flex flex-col gap-y-4 ">
          <Skeleton className="w-full h-[40px] " />

          <ProductShowcaseLoader />
        </div>
      </MaxWidthWrapper>

      <div className="w-full h-fit min-h-[500px] bg-white py-4 mt-8">
        <MaxWidthWrapper className="h-full space-y-5">
          <div className="w-full h-[50px] flex items-center justify-between">
            <h2 className="text-5xl font-bold text-start text-[#DC4955]">
              donwload detail PDF
            </h2>
          </div>

          <div className="w-[80%] mx-auto h-[350px] flex items-center justify-between gap-x-4">
            <Image
              alt="file pdf image"
              src="/file 1.png"
              width={150}
              height={150}
              loading="eager"
            />

            <Button className="w-[400px] h-[70px] rounded-xl bg-[#DC4955] hover:bg-red-700 transition-all duration-700 flex items-center justify-center gap-x-4">
              <span className="text-white text-3xl">Télécharger</span>

              <ArrowBigDownDash className="w-8 h-8 text-white" />
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="w-full h-fit min-h-[500px] bg-[#F1F3FF] py-4">
        <MaxWidthWrapper className="h-full space-y-5">
          <div className="w-full h-[50px] flex items-center justify-center">
            <h2 className="text-5xl font-bold text-start">
              Produits similaires
            </h2>
          </div>
          <div className="w-full h-[50px] flex items-center justify-between">
            <h2 className="text-3xl font-bold text-start text-[#505050] flex items-center justify-start gap-x-2">
              Produits <MoveRight className="w-8 h-8 ml-2 " />
            </h2>

            <Link href="imb/products">
              <span className="text-blue-500 hover:underline hover:cursor-pointer transition-all">
                voir tout
              </span>
            </Link>
          </div>

          <div className="w-full h-[350px] flex items-center justify-center gap-x-4">
            {[1, 2, 4]?.map((item) => {
              return <ProductCardLoader key={item} />;
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Page;
