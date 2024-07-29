import { OrderEmail } from "@/emails/order-email";
import { TProduct } from "@/types";
import { Resend } from "resend";

const resend = new Resend("re_123456789");

type InquiryEmailParams = {
  products: TProduct[];
  email: string;
  phone: string;
  fristName: string;
  lastName: string;
  messageDetails: string;
};

export const sendInquiryEmail = async (params: InquiryEmailParams) => {
  await resend.emails.send({
    from: params.email,
    to: "mahdi.chahri55@gmail.com",
    subject: "inquiry email",
    react: <OrderEmail {...params} />,
  });
};

type OrderEmailParams = {
  products: TProduct[];
  email: string;
  phone: string;
  fristName: string;
  lastName: string;
  messageDetails: string;
};

export const sendOrderEmail = async (params: OrderEmailParams) => {
  await resend.emails.send({
    from: params.email,
    to: "mahdi.chahri55@gmail.com",
    subject: "order email",
    react: <OrderEmail {...params} />,
  });
};
