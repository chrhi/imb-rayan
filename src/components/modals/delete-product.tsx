"use client";

import { deletedProductAction } from "@/actions/products";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useOpenProductDeleteAction } from "@/lib/zustand";
import { Loader } from "lucide-react";
import { useState } from "react";

export function DeleteActionDialog() {
  const { setIsOpen, open, id } = useOpenProductDeleteAction();

  const [loading, setIsLoading] = useState<boolean>(false);

  const deleteProduct = () => {
    if (!id) {
      return;
    }
    setIsLoading(true);

    deletedProductAction({ id });

    setIsLoading(false);
    setIsOpen(false);
  };
  return (
    <AlertDialog open={open} onOpenChange={(open) => setIsOpen(open)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action ne peut pas être annulée. Cela supprimera
            définitivement votre compte et vos données de nos serveurs.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <Button onClick={deleteProduct} disabled={loading}>
            {loading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
            Continuer
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
