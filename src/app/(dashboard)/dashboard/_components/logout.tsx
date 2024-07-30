"use client";

import type { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LogoutProps {}

const LogoutCard: FC = ({}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle> Se déconnecter</CardTitle>
        <CardDescription>
          se déconnecter de cet écran de tableau de bord
        </CardDescription>
      </CardHeader>

      <CardFooter className="w-full flex justify-end">
        <Button variant={"destructive"}>Se déconnecter</Button>
      </CardFooter>
    </Card>
  );
};

export default LogoutCard;
