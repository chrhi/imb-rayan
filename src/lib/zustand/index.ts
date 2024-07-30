import { TProduct } from "@/types";
import { persist } from "zustand/middleware";
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

export const useOpenGazSelectionAction = create<StateShape>()((set) => ({
  id: null,
  open: false,
  setId: (val: string) => set({ id: val }),
  setIsOpen: (open: boolean) => set({ open: open }),
}));

interface BasketShape {
  addProduct: (product: TProduct) => void;
  deleteItem: (product: TProduct) => void;
  clear: () => void;
  products: TProduct[];
}

export const BasketStore = create<BasketShape>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (product: TProduct) =>
        set({
          products:
            get().products.length > 0
              ? [...get().products, product]
              : [product],
        }),
      clear() {
        set({ products: [] });
      },
      deleteItem(product) {
        set({
          products: get().products.filter((item) => item.id === product.id),
        });
      },
    }),
    {
      name: "editor state",
    }
  )
);
