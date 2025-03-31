import { create } from "zustand";

export enum TASK_SPLIT_MODAL_TAB {
  TASK = "Task",
  FINDER = "Finder",
  SEARCH = "Search",
}

export type TaskSplitModalStore = {
  activeTab: TASK_SPLIT_MODAL_TAB;
  setActiveTab: (tab: TASK_SPLIT_MODAL_TAB) => void;
};

export const useTaskSplitModalStore =
  create<TaskSplitModalStore>(
    (set) =>
      ({
        activeTab: TASK_SPLIT_MODAL_TAB.TASK,
        setActiveTab: (tab: TASK_SPLIT_MODAL_TAB) =>
          set({ activeTab: tab }),
      } as const)
  );
