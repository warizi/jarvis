import { TodoLabel } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { create } from "zustand";

export type TodoPageFilter = {
  label?: TodoLabel & Id;
  text?: string;
};

type TodoPageFilterStore = {
  filter: TodoPageFilter;
  setFilter: (filter: TodoPageFilter) => void;
  resetFilter: () => void;
};
const useTodoPageFilterStore = create<TodoPageFilterStore>(
  (set) => ({
    filter: {
      label: undefined,
      text: undefined,
    },
    setFilter: (filter: TodoPageFilter) => set({ filter }),
    resetFilter: () =>
      set({ filter: { label: undefined } }),
  })
);

export default useTodoPageFilterStore;
