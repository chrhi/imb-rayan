import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { FC } from "react";

const Page: FC = () => {
  return (
    <div className="w-full min-h-screen h-fit pt-10 md:pt-0 ">
      <MaxWidthWrapper className="w-full h-fit flex flex-col gap-y-20 ">
        <div className="w-full h-fit min-h-[400px] grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-full h-full flex flex-col  md:p-20 md:pl-0 gap-y-8">
            <h1 className="text-5xl font-bold md:text-start text-center">
              Nous offrons divers services à nos clients
            </h1>

            <Button size={"lg"} className="max-w-[150px] h-[50px]">
              Contactez-nous
            </Button>
          </div>

          <div className="w-full h-full"></div>
        </div>
        <div className="w-full h-fit min-h-[400px] grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-fit flex flex-col gap-y-4  items-center md:items-start">
            <h2 className="text-5xl font-bold ">Architecture</h2>
            <p className="text-xl md:text-start text-center ">
              Disposant d’une parfaite connaissance des métiers de bouche, les
              architectes de notre bureau d’architectures réalise la conception
              de vos plans de cuisine et dessins assistés par ordinateur
              (D.A.O.) et propose de vous mettre en situation grâce à notre
              dernier logiciel de plan en 3D.
            </p>

            <span>
              Et assurent ainsi la conception intégrale de votre cuisine
              professionnelle avec{" "}
            </span>

            <span>Optimisation de l’espace</span>
            <span>
              Implantation des éléments en respectant la marche en avant
            </span>
            <span>
              Définition de l’emplacement des besoins techniques
              (Eau,éléctrcité,gaz)
            </span>
            <span>
              Conseil et orientation sur le choix des différents appareils de
              cuisson , réfrigération et laverie.
            </span>
          </div>

          <div className="w-full h-[400px] md:h-full  p-4 ">
            <div className="rounded-full w-full h-full relative overflow-hidden">
              <Image
                src={"/architactor.jpg"}
                alt="image of the company"
                fill
                className="object-cover rounded-2xl "
              />
            </div>
          </div>
        </div>

        <div className="w-full h-fit min-h-[400px] grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-[400px] md:h-full  p-4 ">
            <div className="rounded-full w-full h-full relative overflow-hidden">
              <Image
                src={"/conception.jpg"}
                alt="image of the company"
                fill
                className="object-cover rounded-2xl "
              />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col gap-y-4  items-center md:items-start">
            <h2 className="text-5xl font-bold ">Études & conceptions</h2>
            <p className="text-xl md:text-start text-center ">
              Le bureau d’études d’I.M.B Industrie est spécialisé dans la
              conception d’équipement de cuisine professionnelles qui s’adapte à
              vos besoins
            </p>

            <span>
              Avec une connaissance des nouvelles technologies et le prise en
              compte des derniers éléments de réflexion dans le domaine de
              l’équipement des cuisines professionnelles Notre bureau d’études
              est en mesure de concevoir et dimensionner les différents éléments
              d’une cuisine professionnelle.
            </span>
          </div>
        </div>

        <div className="w-full h-fit min-h-[400px] grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-fit flex flex-col gap-y-4  items-center md:items-start">
            <h2 className="text-5xl font-bold ">Installation et SAV</h2>
            <p className="text-xl md:text-start text-center ">
              Nos techniciens sont expérimentés et qualifiés pour la pose
              d’équipements de cuisson et matériels frigorifiques , Assurent le
              suivi des chantiers d’installation de cuisine professionnelles du
              démarrage à la mise en route du matériel, en passant par la
              formation de votre personnel.
            </p>

            <span>
              Nous assurons à nos clients un service de maintenance de qualité
              qui passe par des interventions rapides et efficaces
            </span>
          </div>

          <div className="w-full h-[400px] md:h-full  p-4 ">
            <div className="rounded-full w-full h-full relative overflow-hidden">
              <Image
                src={"/instalation.jpg"}
                alt="image of the company"
                fill
                className="object-cover rounded-2xl "
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
