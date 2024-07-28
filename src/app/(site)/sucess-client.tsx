/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { FC } from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
// https://like-manga.net/manga/apotheosis/12/
//https://like-manga.net/manga/apotheosis/17/
interface SucessClientProps {}

const items = [
  {
    url: "/",
    img: "/parterns/best-night.svg",
    sequare: false,
  },
  {
    url: "/",
    img: "/parterns/golden-deer.png",
    sequare: false,
  },
  {
    url: "/",
    img: "/parterns/Brimston.svg",
    sequare: false,
  },
  {
    url: "/",
    img: "/parterns/empire.svg",
    sequare: false,
  },
  {
    url: "/",
    img: "/parterns/restaurant-le-patio.svg",
    sequare: false,
  },
  {
    url: "/",
    img: "/parterns/resturant-atelier.svg",
    sequare: false,
  },
  {
    url: "/",
    img: "/parterns/resturant.svg",
    sequare: false,
  },
  {
    url: "/",
    img: "/parterns/Sonatrach.svg.png",
    sequare: false,
  },
];

const firstRow = items;

const ReviewCard = ({
  img,
  url,
  sequare,
}: {
  img: string;
  url: string;
  sequare: boolean;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[200px] cursor-pointer overflow-hidden rounded-xl  p-4 hover:scale-105 duration-700 transition-all "
      )}
    >
      <div className="relative w-[170px] h-[200px]  flex items-center justify-center">
        <Image alt="" src={img} fill />
      </div>
    </figure>
  );
};

const SucessClient: FC = ({}) => {
  return (
    <section className="w-full h-fit min-h-[450px] flex flex-col  gap-y-12 mt-20 mb-10">
      <h2 className="text-5xl font-bold text-center">Nos partenaires</h2>
      <p className="text-xl text-center text-gray-500 my-4 max-w-3xl mx-auto">
        Nous pensons que les partenariats sont essentiels pour relever les défis
        du développement. Nous travaillons en collaboration avec des
        gouvernements, des entreprises, des fondations et des entrepreneurs .
        Ensemble, nous pouvons construire de grandes choses.
      </p>
      <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard
              key={review.url}
              img={review.img}
              url={review.url}
              sequare={review.sequare}
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};

export default SucessClient;
