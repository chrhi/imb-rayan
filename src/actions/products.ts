"use server";

import { deleteProduct, insertProduct } from "@/db/data-access/products";
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
  } catch (err) {
    console.error(err);
  }
};

export const deletedProductAction = async ({ id }: { id: string }) => {
  try {
    await deleteProduct({ id });
    revalidatePath("/dashboard/products");
  } catch (err) {
    console.error(err);
  }
};
