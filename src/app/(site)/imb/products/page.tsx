import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/db/data-access/products";
import type { FC } from "react";

interface PageProps {}

async function getData() {
  const data = await getAllProducts();

  const products = data?.map((item) => {
    return {
      id: item.id,
      status: item.status,
      images: JSON.parse(item.images as string) as {
        id: string;
        name: string;
        url: string;
      }[],
      name: item.name,
      range: item.range,
      company: item.company,
    };
  });
  return products;
}

const Page: FC = async ({}) => {
  const products = await getData();
  return (
    <MaxWidthWrapper>
      <div className="w-full h-screen flex flex-col pt-10 gap-y-8">
        <h1 className="text-4xl font-bold text-start">
          Tous les produits disponibles
        </h1>

        <div className=" w-full min-h-[300px]  h-fit grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
          {products?.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.images[0].url}
                range={item.range}
                title={item.name}
              />
            );
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
