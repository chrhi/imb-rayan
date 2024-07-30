"use server";

import {
  sendDetailsEmail,
  sendInquiryEmail,
  sendOrderEmail,
} from "@/lib/resend";
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

export const sendDetailsEmailAction = async ({ email }: { email: string }) => {
  try {
    await sendDetailsEmail({ email });
  } catch (err) {
    console.log(err);
  }
};

type InquiryEmailParams = {
  email: string;
  phone: string;
  fristName: string;
  lastName: string;
  messageDetails: string;
};

export const sendInquiryEmailAction = async (params: InquiryEmailParams) => {
  try {
    await sendInquiryEmail({ ...params });
  } catch (err) {
    console.log(err);
  }
};
