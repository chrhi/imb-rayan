import MaxWidthWrapper from "@/components/max-width-wrapper";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { getAllProducts } from "@/db/data-access/products";

import type { FC } from "react";

async function getData() {
  const data = await getAllProducts();

  const products = data?.map((item) => {
    return {
      id: item.id,
      price: Number(item.price),
      status: item.status,
      images: JSON.parse(item.images as string) as {
        id: string;
        name: string;
        url: string;
      }[],
      name: item.name,
    };
  });
  // Fetch data from your API here.
  return products;
}

const page: FC = async ({}) => {
  const data = await getData();

  console.log(data);

  return (
    <MaxWidthWrapper>
      <div className="w-full h-fit  min-h-screen flex flex-col">
        <div className="w-full h-[100px] flex items-center justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/settings">
                  Settings
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="w-full h-[50px] flex items-center justify-between">
          <h1 className="text-2xl font-bold text-start">Paramètres</h1>

          {/* <Link
            href={"/dashboard/products/create"}
            className={cn(buttonVariants())}
            
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Ajouter un client
          </Link> */}
        </div>
      </div>
      <div className="w-full h-[200px] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-start">
          cette section sera ajoutée bientôt
        </h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
