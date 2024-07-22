"use client";

import Image from "next/image";
import type { FC } from "react";
import CountUp from "react-countup";

const CountBannerUp: FC = ({}) => {
  return (
    <div className="w-full md:h-[500px] h-fit  rounded-2xl grid grid-cols-1  md:grid-cols-3  p-4 bg-blue-100   mb-10 gap-y-8 md:gap-x-16">
      <div className="w-full md:h-full h-[400px]  col-span-1 rounded-2xl relative ">
        <Image
          src={"/factory.jpg"}
          alt="the worker image"
          fill
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="w-full h-fit md:h-full gap-12 col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 p-4">
        <span className=" text-5xl font-extrabold text-start">
          +{<CountUp preserveValue start={0} end={600} />} <br /> Employees
        </span>
        <span className=" text-5xl font-extrabold text-start ">
          +{<CountUp preserveValue start={0} end={40} />} <br /> Factories
        </span>
        <span className=" text-5xl font-extrabold text-start ">
          +{<CountUp preserveValue start={0} end={500} />} <br /> Projects
        </span>
      </div>
    </div>
  );
};

export default CountBannerUp;
