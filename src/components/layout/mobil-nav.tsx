import { Button, buttonVariants } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [opne, setOpen] = useState(false);

  return (
    <Sheet open={opne} onOpenChange={(value) => setOpen(value)}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <Menu className="w-6 h-6 text-black " />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full z-[9999]">
        <SheetHeader>
          <SheetTitle>
            <span className="text-primary">IMB</span> industrie
          </SheetTitle>
          <SheetDescription>
            Fourniture d&apos;équipements pour grandes cuisines
          </SheetDescription>
        </SheetHeader>
        <div className="w-full flex h-[90%] mt-4 flex-col items-start gap-4 py-4">
          <Link
            onClick={() => setOpen(false)}
            key={888}
            href={"/"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Accueil
          </Link>
          <Link
            onClick={() => setOpen(false)}
            key={898}
            href={"/products"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Produits
          </Link>
          <Link
            onClick={() => setOpen(false)}
            key={338}
            href={"/services"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Services
          </Link>
          <Link
            onClick={() => setOpen(false)}
            key={98768}
            href={"/blog"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Blog
          </Link>

          <Link
            onClick={() => setOpen(false)}
            key={98768}
            href={"/contact-us"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Contactez-nous
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
