import { create } from "zustand";
import { persist } from "zustand/middleware";

type NotePageStore = {
  isColumn: boolean;
  setIsColumn: (isColumn: boolean) => void;
};

export const useNotePageStore = create<NotePageStore>()(
  persist(
    (set) => ({
      isColumn: true,
      setIsColumn: (isColumn: boolean) => set({ isColumn }),
    }),
    {
      name: "note-page-storage", // localStorage key
    }
  )
);
