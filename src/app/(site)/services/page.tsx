import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Page: FC = () => {
  return (
    <div className="w-full min-h-screen h-fit py-10 md:pt-0 ">
      <MaxWidthWrapper className="w-full h-fit flex flex-col gap-y-5 mb-20 ">
        <div className="w-full h-fit min-h-[200px]  grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-full h-full flex flex-col  md:p-20 md:pl-0 gap-y-8">
            <h1 className="text-5xl font-bold md:text-start text-center">
              Nous offrons divers services à nos clients
            </h1>

            <Link href={"/contact-us"}>
              <Button
                size={"lg"}
                className="max-w-[180px] text-xl px-4 h-[50px]"
              >
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full h-[400px] grid grid-cols-3  gap-x-20">
          <div className="w-full h-full flex flex-col gap-y-4  ">
            <div className="w-full h-[200px] relative ">
              <Image
                src="/architactor.jpg"
                alt="services"
                fill
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="text-2xl">Architecture</h2>
            <p>
              Disposant d’une parfaite connaissance des métiers de bouche, les
              architectes de notre bureau d’architectures réalise la conception
              de vos plans de cuisine et dessins assistés par ordinateur
              (D.A.O.) et propose de vous mettre en situation grâce à notre
              dernier logiciel de plan en 3D
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-y-4 ">
            <div className="w-full h-[200px] relative ">
              <Image
                src="/DSC02795.jpg"
                alt="services"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-2xl">Études & conceptions</h2>
            <p>
              Le bureau d’études d’I.M.B Industrie est spécialisé dans la
              conception d’équipement de cuisine professionnelles qui s’adapte à
              vos besoins Avec une connaissance des nouvelles technologies et le
              prise en compte des derniers éléments de réflexion dans le domaine
              de l’équipement des cuisines professionnelles Notre bureau
              d’études est en mesure de concevoir et dimensionner les différents
              éléments d’une cuisine professionnelle.
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-y-4 ">
            <div className="w-full h-[200px] relative ">
              <Image
                src="/DSC02795.jpg"
                alt="services"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-2xl">Installation et SAV</h2>
            <p>
              Nos techniciens sont expérimentés et qualifiés pour la pose
              d’équipements de cuisson et matériels frigorifiques , Assurent le
              suivi des chantiers d’installation de cuisine professionnelles du
              démarrage à la mise en route du matériel, en passant par la
              formation de votre personnel. Nous assurons à nos clients un
              service de maintenance de qualité qui passe par des interventions
              rapides et efficaces .
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
