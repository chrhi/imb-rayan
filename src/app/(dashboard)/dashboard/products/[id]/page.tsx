import { getProductByIdAction } from "@/actions/products";
import { notFound } from "next/navigation";
import { UpdateProductForm } from "@/components/forms/update-product";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { FC } from "react";

interface PageProps {
  params: { id: string };
}
const Page = async ({ params }: PageProps) => {
  const id = params.id;

  const product = await getProductByIdAction({ id });
  if (!product) {
    notFound();
  }

  return (
    <MaxWidthWrapper>
      <div className="w-full h-fit  min-h-screen flex flex-col">
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
                  Des produits
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/dashboard/products/${product.id}`}>
                  {product.name}
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
          <UpdateProductForm product={product} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
