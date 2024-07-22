import FadeIn from "@/components/animations/fadein";
import Banner from "@/components/Banner";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SucessClient from "./sucess-client";
import CountBannerUp from "./count-up";
import Values from "./values";
import OurStory from "./our-story";
import Map from "./map";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="flex min-h-screen flex-col items-center justify-between mb-10 ">
        <MaxWidthWrapper>
          <FadeIn>
            <SucessClient />
          </FadeIn>
          <FadeIn>
            <CountBannerUp />
          </FadeIn>
          <FadeIn>
            <Values />
          </FadeIn>
          <FadeIn>
            <OurStory />
          </FadeIn>
        </MaxWidthWrapper>
      </main>
      <Map />
    </>
  );
}
