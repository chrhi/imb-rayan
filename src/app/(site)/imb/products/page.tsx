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
  // Fetch data from your API here.
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

        <div className="w-full h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5">
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
