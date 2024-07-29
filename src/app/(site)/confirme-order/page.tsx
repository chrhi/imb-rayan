import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { FC } from "react";
import ListItems from "./list-items";
import { CofirmeOrderForm } from "@/components/forms/cofirme-order-form";

interface PageProps {}

const Page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-screen grid grid-cols-2 ">
        <ListItems />
        <div className="w-full h-full flex flex-col gap-y-4  p-8">
          <CofirmeOrderForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
