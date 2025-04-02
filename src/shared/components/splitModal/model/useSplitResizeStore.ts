import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SplitResizeStore = {
  leftWidth: number;
  setLeftWidth: (width: number) => void;
};

export const useSplitResizeStore =
  create<SplitResizeStore>()(
    persist(
      (set) => ({
        leftWidth: 50,
        setLeftWidth: (width) =>
          set(() => ({
            leftWidth: width,
          })),
      }),
      {
        name: "split-resize-storage", // localStorage key
      }
    )
  );
