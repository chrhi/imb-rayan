import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-screen pt-20 flex flex-col items-center">
      <Image
        loading="eager"
        src="/404.svg"
        alt="this is an error "
        width={300}
        height={300}
      />

      <h1 className="text-4xl font-bold mt-8">
        la page que vous recherchez a été supprimée ou n&apos;existe pas
      </h1>
    </div>
  );
};

export default Page;
