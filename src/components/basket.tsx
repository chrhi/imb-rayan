import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import type { FC } from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface BasketProps {}

const Basket: FC = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="border border-black">
          <ShoppingCart className="w-6 h-6 " />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Basket;
