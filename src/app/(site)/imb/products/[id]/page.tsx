import { getProductByIdAction } from "@/actions/products";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductShowcase from "@/components/product-showcase";
import { getProductById } from "@/db/data-access/products";
import { notFound } from "next/navigation";
import type { FC } from "react";

interface PageProps {
  params: { id: string };
}

const Page = async ({ params }: PageProps) => {
  const id = params.id;

  if (!id) {
    notFound();
  }

  const product = await getProductByIdAction({ id });
  if (!product) {
    notFound();
  }

  return (
    <MaxWidthWrapper>
      <div className="w-full min-h-screen h-fit pt-10 flex flex-col gap-y-4 ">
        <h1 className="text-4xl font-bold text-black text-start ">
          {product?.name}
        </h1>

        <ProductShowcase product={product} />
        {/* 
        <div className="w-full h-[300px]  flex flex-col ">
          <h2 className="text-4xl font-bold">Produits similaires</h2>
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
