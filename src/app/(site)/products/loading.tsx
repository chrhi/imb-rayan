import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ProductCardLoader } from "@/components/product-card";
import type { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter } from "lucide-react";

interface PageProps {}

const Page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full min-h-screen h-fit flex flex-col pt-10 gap-y-8">
        <div className="w-full min-h-[50px] h-fit flex items-center justify-between">
          <h1 className="text-4xl font-bold text-start">
            Tous les produits disponibles
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"secondary"}>
                filtre
                <Filter className="w-4 h-4 ml-2" />
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>filtre</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem> IMB</DropdownMenuItem>
              <DropdownMenuItem>IRC</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className=" w-full min-h-[650px]  h-fit grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
          {[1, 2, 3, 4, 5, 6, 7]?.map((item, index) => {
            return <ProductCardLoader key={item + index} />;
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
