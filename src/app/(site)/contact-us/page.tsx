import { ContactUsForm } from "@/components/forms/contact-us";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import type { FC } from "react";

const Page: FC = () => {
  return (
    <div className="w-full min-h-screen h-fit  ">
      <MaxWidthWrapper className="w-full h-fit">
        <div className="w-full h-[700px] grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-full h-full flex flex-col gap-y-4 p-20 pl-0">
            <h1 className="text-5xl font-bold text-start">
              N&apos;hésitez pas à nous contacter
            </h1>
            <p className="text-2xl text-red-600 font-semibold">
              I.M.B Industrie Sarl
            </p>
            <p className="text-xl">
              1, bd Mohamed Khemisti 16100 Dar El Beida Alger -Algérie
            </p>
            <p className="text-xl">
              <span className="font-bold">TEL :</span> +213 23 67 61 62 – 63 –
              64
            </p>
            <p className="text-xl">
              {" "}
              <span className="font-bold">FAX :</span> +213 23 67 61 65 – 66
            </p>
            <p className="text-xl">
              {" "}
              <span className="font-bold">E-mail :</span> info@imb-industrie.com
            </p>
          </div>

          <div className="w-full h-full pt-10">
            <ContactUsForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
