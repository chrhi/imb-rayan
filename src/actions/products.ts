"use server";

import { insertProduct } from "@/db/data-access/products";
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
