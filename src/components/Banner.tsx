"use client";

import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

export default function Banner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full overflow-hidden relative h-fit">
      <Carousel setApi={setApi} className="w-full ">
        <CarouselContent>
          <CarouselItem>
            <div className="relative isolate overflow-hidden bg-gray-900 py-32 sm:py-48 ">
              <Image
                fill
                src={"/banner-01.jpg"}
                alt="this is store banner"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
              />
              <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#005EA7] to-[#e10c0c] opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#005EA7] to-[#e10c0c] opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <MaxWidthWrapper>
                <div className="mx-auto h-[300px] max-w-2xl lg:mx-0"></div>
              </MaxWidthWrapper>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative isolate overflow-hidden bg-gray-900 py-32 sm:py-48  ">
              <Image
                fill
                src={"/banner-02.jpg"}
                alt="this is store banner"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
              />
              <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#005EA7] to-[#e10c0c] opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#005EA7] to-[#e10c0c] opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <MaxWidthWrapper>
                <div className="mx-auto h-[300px] max-w-2xl lg:mx-0"></div>
              </MaxWidthWrapper>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="w-full h-[50px] absolute bottom-10 flex items-center justify-center gap-x-4 text-white">
        {Array.from({ length: 2 }).map((_, index) => {
          return (
            <button
              key={index}
              className={` w-[25px] h-[25px] rounded-[50%] cursor-pointer hover:start-1 transition-all hover:scale-125 flex items-center justify-center ${
                current === index + 1 ? "bg-[#FF4500]" : ""
              }`}
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <div className="bg-white rounded-[50%] w-4 h-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
