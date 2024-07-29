import { OrderEmail } from "@/emails/order-email";
import { TProduct } from "@/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    from: "imb@cravvelo.com",
    to: params.email,
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
    from: "imb@cravvelo.com",
    to: params.email,
    subject: "order email",
    react: <OrderEmail {...params} />,
  });
};
