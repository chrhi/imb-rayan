import { CreateProductForm } from "@/components/forms/create-product";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { FC } from "react";

const page: FC = async ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-fit  min-h-screen flex flex-col bg-gray-100 ">
        <div className="w-full h-[100px] flex items-center justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">
                  Tableau de bord
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/products">
                  {" "}
                  Des produits
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/products/create">
                  Create product
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="w-full h-[50px] flex items-center justify-between">
          <h1 className="text-2xl font-bold text-start">
            Créer un nouveau produit
          </h1>
        </div>

        <div className="w-full">
          <CreateProductForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
