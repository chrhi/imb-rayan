"use server";

import { catchError } from "@/lib/utils";
import { db } from "..";

export const insertProduct = async ({
  description,
  images,
  name,
  company,
  range,
  status,
  option_gaz,
}: {
  name: string;
  description: any;
  images: any[];
  range: string;
  company: string;
  status: string;
  option_gaz: boolean;
}) => {
  try {
    const item = await db.product.create({
      data: {
        description: JSON.stringify(description),
        images: JSON.stringify(images),
        name,
        range,
        company,
        status,
        option_gaz,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
export const updateProduct = async ({
  description,
  images,
  name,
  company,
  range,
  status,
  id,
  option_gaz,
}: {
  name: string;
  description: any;
  images: any[];
  range: string;
  company: string;
  status: string;
  id: string;
  option_gaz: boolean;
}) => {
  try {
    const item = await db.product.update({
      data: {
        description: JSON.stringify(description),
        images: JSON.stringify(images),
        name,
        range,
        company,
        status,
        option_gaz,
      },
      where: {
        id,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getAllProducts = async () => {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (err) {
    catchError(err);
  }
};

export const deleteProduct = async ({ id }: { id: string }) => {
  try {
    const deletedProduct = await db.product.delete({
      where: {
        id,
      },
    });

    return deletedProduct;
  } catch (err) {
    console.error(err);
  }
};

export const getProductById = async ({ id }: { id: string }) => {
  const product = await db.product.findFirst({
    where: {
      id,
    },
  });

  return product;
};
