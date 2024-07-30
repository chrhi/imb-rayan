"use client";

import { useState, type FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useOpenGazSelectionAction } from "@/lib/zustand";
import { Button } from "../ui/button";
import { Flame, Zap } from "lucide-react";

interface OptionGazProps {
  setIsGaz: React.Dispatch<React.SetStateAction<boolean>>;
  isGaz: boolean;
}

const OptionGaz: FC<OptionGazProps> = ({ isGaz, setIsGaz }) => {
  const open = useOpenGazSelectionAction((item) => item.open);

  const setIsOpen = useOpenGazSelectionAction((item) => item.setIsOpen);

  return (
    <Dialog open={open} onOpenChange={(open) => setIsOpen(open)}>
      <DialogContent className="border-none">
        <DialogHeader>
          <DialogTitle>Choisir entre le gaz ou l&apos;électricité?</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-x-4 mt-4 ">
          <Button
            onClick={() => setIsGaz(true)}
            className={`  text-2xl font-bold bg-white border hover:bg-secondary text-black border-black h-[50px] transition-all duration-75 ${
              isGaz ? "text-orange-600 border-orange-600" : ""
            } `}
          >
            <Flame className="w-8 h-8 mr-2" />
            Gaz
          </Button>

          <Button
            onClick={() => setIsGaz(false)}
            className={`text-2xl font-bold bg-white border  hover:bg-secondary text-black border-black h-[50px]  transition-all duration-75  ${
              !isGaz ? "text-blue-600 border-blue-600" : ""
            }`}
          >
            <Zap className="w-8 h-8 mr-2" />
            Electricité
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OptionGaz;
