import { NoteLabel } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { create } from "zustand";

export type NotePageFilter = {
  label?: NoteLabel & Id;
  text?: string;
};

type NotePageFilterStore = {
  filter: NotePageFilter;
  setFilter: (filter: NotePageFilter) => void;
  resetFilter: () => void;
};

const useNotePageFilterStore = create<NotePageFilterStore>(
  (set) => ({
    filter: {
      label: undefined,
      text: undefined,
    },
    setFilter: (filter: NotePageFilter) => set({ filter }),
    resetFilter: () =>
      set({ filter: { label: undefined } }),
  })
);

export default useNotePageFilterStore;
