import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/db/data-access/products";
import Link from "next/link";
import type { FC } from "react";

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
  return products?.slice(0, 3);
}

const Products: FC = async ({}) => {
  const products = await getData();

  console.log(products);
  return (
    <div className="w-full h-fit min-h-[500px] bg-[#F1F3FF] py-4">
      <MaxWidthWrapper className="h-full  flex flex-col gap-y-8">
        <div className="w-full h-[50px] flex items-center justify-between">
          <h2 className="text-5xl font-bold text-start">Voir nos produits</h2>

          <Link href="/products">
            <span className="text-blue-500 hover:underline hover:cursor-pointer transition-all">
              voir tout
            </span>
          </Link>
        </div>

        <div className="w-full h-[350px] mt-4  flex items-center justify-center gap-x-8">
          {products?.map((item) => {
            return (
              <ProductCard
                image={item.images[0].url}
                key={item.id}
                range={item.range}
                title={item.name}
                id={item.id}
              />
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Products;
