import { TProduct } from "@/types";
import { create } from "zustand";

interface StateShape {
  id: string | null;
  setId: (id: string) => void;
  open: boolean;
  setIsOpen: (open: boolean) => void;
}

export const useOpenProductDeleteAction = create<StateShape>()((set) => ({
  id: null,
  open: false,
  setId: (val: string) => set({ id: val }),
  setIsOpen: (open: boolean) => set({ open: open }),
}));

interface BasketShape {
  addProduct: (product: TProduct) => void;
  products: TProduct[];
}

export const BasketStore = create<BasketShape>()((set, get) => ({
  products: [],
  addProduct: (product: TProduct) =>
    set({ products: [...get().products, product] }),
}));
