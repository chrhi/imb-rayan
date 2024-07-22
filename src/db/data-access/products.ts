"use server";

import { catchError } from "@/lib/utils";
import { db } from "..";

export const insertProduct = async ({
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
    const item = await db.product.create({
      data: {
        description,
        images: JSON.stringify(images),
        name,
        price,
        status,
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
