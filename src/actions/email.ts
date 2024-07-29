"use server";

import { sendOrderEmail } from "@/lib/resend";
import { TProduct } from "@/types";

type Params = {
  products: TProduct[];
  email: string;
  phone: string;
  fristName: string;
  lastName: string;
  messageDetails: string;
};

export const sendOrderEmailAction = async (params: Params) => {
  try {
    await sendOrderEmail({
      ...params,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendDetailsEmailAction = () => {};

export const sendInquiryEmailAction = () => {};
