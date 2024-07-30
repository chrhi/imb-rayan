"use client";

import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-screen pt-20 flex flex-col items-center">
      <Image
        loading="eager"
        src="/error.svg"
        alt="this is an error "
        width={300}
        height={300}
      />

      <h1 className="text-4xl font-bold mt-8">
        quelque chose s&apos;est mal passé
      </h1>
    </div>
  );
};

export default Page;
