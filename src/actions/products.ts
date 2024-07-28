"use server";

import {
  deleteProduct,
  getProductById,
  insertProduct,
  updateProduct,
} from "@/db/data-access/products";
import { TProduct } from "@/types";
import { revalidatePath } from "next/cache";

export const createProduct = async ({
  description,
  images,
  name,
  company,
  range,
  status,
}: {
  name: string;
  description: any;
  images: any[];
  range: string;
  company: string;
  status: string;
}) => {
  try {
    await insertProduct({ description, images, name, status, company, range });
    revalidatePath("/dashboard/products");
    revalidatePath("/imb/products");
    revalidatePath("/");
  } catch (err) {
    console.error(err);
  }
};
export const updateProductAction = async ({
  description,
  images,
  name,
  company,
  range,
  status,
  id,
}: {
  name: string;
  description: any;
  images: any[];
  range: string;
  company: string;
  status: string;
  id: string;
}) => {
  try {
    await updateProduct({
      description,
      images,
      name,
      status,
      company,
      range,
      id,
    });
    revalidatePath("/dashboard/products");
    revalidatePath("/imb/products");
    revalidatePath("/");
  } catch (err) {
    console.error(err);
  }
};

export const deletedProductAction = async ({ id }: { id: string }) => {
  try {
    await deleteProduct({ id });
    revalidatePath("/dashboard/products");
    revalidatePath("/imb/products");
    revalidatePath("/");
  } catch (err) {
    console.error(err);
  }
};

export const getProductByIdAction = async ({
  id,
}: {
  id: string;
}): Promise<TProduct | null> => {
  const item = await getProductById({ id });

  if (!item) {
    return null;
  }
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
    description: JSON.parse(item.description as string),
  };
};
