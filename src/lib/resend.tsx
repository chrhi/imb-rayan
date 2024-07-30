import { OrderEmail } from "@/emails/order-email";
import { ContactEmail } from "@/emails/contact-email";
import { DetailsEmail } from "@/emails/details-email";
import { TProduct } from "@/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type InquiryEmailParams = {
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
    react: <ContactEmail {...params} />,
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

type DetailsEmailParams = {
  email: string;
};

export const sendDetailsEmail = async (params: DetailsEmailParams) => {
  await resend.emails.send({
    from: "imb@cravvelo.com",
    to: params.email,
    subject: "details  email",
    react: <DetailsEmail {...params} />,
  });
};
