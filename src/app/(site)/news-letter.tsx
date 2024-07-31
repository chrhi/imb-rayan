import { NewsLetterForm } from "@/components/forms/news-letter";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import { itim } from "@/lib/font";
import type { FC } from "react";

const NewsLetter: FC = ({}) => {
  return (
    <div className="w-full h-[400px] bg-[#F1F3FF] border-b border-black">
      <MaxWidthWrapper className="h-full  max-w-screen-xl">
        <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-full flex items-center justify-center ">
            <h2 className={cn("text-5xl text-start font-bold", itim.className)}>
              Pour vous <br /> renseigner et en <br /> savoir plus
            </h2>
          </div>

          <div className="w-full h-full flex flex-col gap-y-4 items-center justify-center  max-w-2xl">
            <NewsLetterForm />
            <span className="text-[#5B5B5B] text-xl">
              {" "}
              vous recevrez un message sur votre e-mail contenant les produits
              et services de haute qualite que nous proposons.
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NewsLetter;
