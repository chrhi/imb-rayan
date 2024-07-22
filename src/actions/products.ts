"use server";

import { insertProduct } from "@/db/data-access/products";
import { FileWithPreview } from "@/types";
import { revalidatePath } from "next/cache";

export const createProduct = async ({
  description,
  images,
  name,
  price,
  status,
}: {
  name: string;
  description: string;
  images: any[];
  price: string;
  status: string;
}) => {
  try {
    await insertProduct({ description, images, name, price, status });
    revalidatePath("/dashboard/products");
  } catch (err) {
    console.error(err);
  }
};
