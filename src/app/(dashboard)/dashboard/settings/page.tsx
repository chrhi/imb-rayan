import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import type { FC } from "react";
import LogoutCard from "../_components/logout";

const page: FC = async ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-fit  min-h-screen flex flex-col justify-start">
        <div className="w-full h-[100px] flex items-center justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/settings">
                  Settings
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="w-full h-[50px] flex items-center justify-between">
          <h1 className="text-2xl font-bold text-start">Paramètres</h1>
        </div>
        <div className="w-full h-[200px] flex items-center justify-center">
          <LogoutCard />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
