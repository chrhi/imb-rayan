"use server";

import ContactEmail from "@/emails/contact-email";
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

type InquiryEmailParams = {
  email: string;
  phone: string;
  fristName: string;
  lastName: string;
  messageDetails: string;
};

export const sendInquiryEmailAction = async (params: InquiryEmailParams) => {
  try {
    await ContactEmail({ ...params });
  } catch (err) {
    console.log(err);
  }
};
