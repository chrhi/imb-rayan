/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { FC } from "react";
// https://like-manga.net/manga/apotheosis/12/
//https://like-manga.net/manga/apotheosis/17/
interface SucessClientProps {}

const SucessClient: FC = ({}) => {
  return (
    <section className="w-full h-fit md:h-[550px] flex flex-col gap-y-4 my-20">
      <h2 className="text-5xl font-bold text-start">
        La Satisfaction de nos Clients est notre Objectif
      </h2>

      <div className="w-full h-fit md:h-[500px] grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <div className="w-full h-[250px] rounded-2xl md:h-full bg-white  border relative p-2">
          <div className="w-[150px] absolute bottom-[80px] right-0 left-[20px] flex items-center justify-center  h-[150px] rounded-2xl border-2  bg-white z-[5]">
            <Image
              alt="sonatrach logo"
              src="/sonatrach.png"
              width={90}
              height={170}
              className="object-cover"
            />
          </div>

          <div className="w-full h-full  absolute top-0 left-0 right-0 bottom-0 ">
            <img
              src="/DSC02795.jpg"
              alt="these are the sucess stories"
              className=" object-cover w-full h-full rounded-2xl "
            />
          </div>
        </div>
        <div className="w-full h-[250px] rounded-2xl md:h-full bg-white  border relative p-2">
          <div className="w-[150px] absolute bottom-[80px] right-0 left-[20px]   h-[150px] rounded-2xl border-2  bg-white z-[5]"></div>
          <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 ">
            <img
              src="/DSC02741-1.jpg"
              alt="these are the sucess stories"
              className=" object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SucessClient;
