import { create } from "zustand";
import { ContextMenuItemType } from "./type";

export type contextMenuStoreType = {
  isOpen: boolean;
  position: { x: number; y: number };
  items: ContextMenuItemType[];
  open: (
    x: number,
    y: number,
    items: ContextMenuItemType[]
  ) => void;
  close: () => void;
};

export const useContextMenuStore =
  create<contextMenuStoreType>((set) => ({
    isOpen: false,
    position: { x: 0, y: 0 },
    items: [] as ContextMenuItemType[],
    open: (
      x: number,
      y: number,
      items: ContextMenuItemType[]
    ) => set({ isOpen: true, items, position: { x, y } }),
    close: () =>
      set({
        isOpen: false,
        items: [],
        position: { x: 0, y: 0 },
      }),
  }));
