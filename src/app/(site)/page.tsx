import Banner from "@/components/Banner";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SucessClient from "./sucess-client";
import Map from "./map";
import Products from "./products";
import WhyUs from "./why-us";
import NewsLetter from "./news-letter";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <MaxWidthWrapper>
          <SucessClient />
        </MaxWidthWrapper>

        <Products />

        <WhyUs />

        <NewsLetter />
      </main>
      <Map />
    </>
  );
}
