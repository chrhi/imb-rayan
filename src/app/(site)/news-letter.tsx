import { NewsLetterForm } from "@/components/forms/news-letter";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import type { FC } from "react";

interface NewsLetterProps {}

const NewsLetter: FC = ({}) => {
  return (
    <div className="w-full h-[400px] bg-[#F1F3FF] ">
      <MaxWidthWrapper className="h-full  max-w-screen-xl">
        <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-full flex items-center justify-center ">
            <h2 className="text-5xl text-start font-bold">
              Pour vous renseigner et en savoir plus
            </h2>
          </div>

          <div className="w-full h-full flex flex-col gap-y-4 items-center justify-center ">
            <NewsLetterForm />
            <span>
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
