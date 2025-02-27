import Image from "next/image";
import type { FC } from "react";
import { cn } from "@/lib/utils";
import { itim } from "@/lib/font"
interface WhyUsProps {}

const ITEMS = [
  {
    text: "Nous avons du matériel de haute qualité  Et services",
    icon: "/why-us/high-quality 1.png",
    up: true,
  },
  {
    text: "Nous avons service apres vente",
    icon: "/why-us/call 1.png",
    up: false,
  },
  {
    text: "Nos succès et nos réalisations",
    icon: "/why-us/succes 1.png",
    up: false,
  },
  {
    text: "Nous beneficions de prix abordables",
    icon: "/why-us/best-price 1.png",
    up: true,
  },
];

const WhyUs: FC = ({}) => {
  return (
    <div className="w-full min-h-[500px] h-fit flex flex-col gap-y-8 border-t items-center justify-between pt-10">
      <h2 className={  cn("text-5xl font-bold" , itim.className)}>Pourquoi nous?</h2>

      <div className="w-full min-h-[250px] h-fit flex flex-col md:flex-row items-center justify-center gap-x-8">
        {ITEMS.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-[250px] h-full   rounded-2xl items-center justify-center   flex flex-col gap-y-4 ${
                item.up ? "md:mb-[10rem]" : ""
              }`}
            >
              <Image 
               width={100}
               height={100}
              src={item.icon}
              alt={item.text}
              />

              <p className="text-lg font-bold text-center">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
