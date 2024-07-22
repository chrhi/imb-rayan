import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { FC } from "react";

interface PageProps {}

const Page: FC = ({}) => {
  return (
    <main className="flex w-full min-h-screen overflow-hidden  h-fit flex-col  relative   ">
      <MaxWidthWrapper>
        <div className="w-full min-h-full">
          <div className="w-full h-[500px] my-12  grid grid-cols-2">
            <div className="w-full h-full  flex flex-col gap-y-8 ">
              <h1 className="text-5xl font-bold text-start">
                The AI-Driven Evolution of CMSs: From Text Boxes to Generative
                UI
              </h1>
              <p className="text-2xl text-gray-600 text-start">
                Discover how AI and generative UI are transforming CMSs. Shift
                from traditional CMS to AI-driven platforms that empower teams
                and streamline workflows.
              </p>

              <Button size="lg" className="max-w-[150px]">
                read more
              </Button>
            </div>
            <div className="w-full h-full relative ">
              <Image
                src={"/IMB_0051.jpg"}
                alt="image of the company"
                fill
                className="object-cover rounded-2xl "
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-start">Latest Articles</h2>

          <div className="w-full min-h-[200px] h-fit grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 my-8  place-items-center justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              return (
                <div
                  key={item}
                  className="w-[430px] h-[500px]   hover:bg-gray-100 cursor-pointer rounded-2xl  flex flex-col gap-y-6"
                >
                  <div className="w-full h-[300px] relative ">
                    <Image
                      src={"/IMB_0051.jpg"}
                      alt="image of the company"
                      fill
                      className="object-cover rounded-2xl "
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-start">
                    The Truth About AI&apos;s Impact on Software Development
                    Jobs
                  </h2>

                  <span className="text-gray-500 text-start ">
                    12 july 2024
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
