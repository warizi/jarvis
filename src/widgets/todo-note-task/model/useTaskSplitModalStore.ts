import { Note } from "@entities/note/model/type";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { create } from "zustand";

export enum TASK_SPLIT_MODAL_TAB {
  TASK = "Task",
  FINDER = "Finder",
  SEARCH = "Search",
}

export enum TASK_DOMAIN {
  TODO = "TODO",
  NOTE = "NOTE",
}

export enum TASK_FINDER_TAB {
  TODAY = "Today",
  Important = "Important",
  All = "All",
}
export type TaskFinderSideTab = TASK_FINDER_TAB | number;

export type TaskFinderTab = {
  domain: TASK_DOMAIN | null;
  sideTab: TaskFinderSideTab | null;
  currentTask: number | null;
  noteData: (Note & Id) | null;
  todoData: (Todo & Id) | null;
};

export type TaskSplitModalStore = {
  activeTab: TASK_SPLIT_MODAL_TAB | null;
  closeTabStart: boolean;
  finderTab: TaskFinderTab;
  setActiveTab: (tab: TASK_SPLIT_MODAL_TAB) => void;
  setFinderDomain: (domain: TASK_DOMAIN) => void;
  setFinderSideTab: (sideTab: TaskFinderSideTab) => void;
  setCurrentTask: (taskId: number) => void;
  closeCurrentTask: () => void;
  setCUrrentNote: (noteData: Note & Id) => void;
  setCurrentTodo: (todoData: Todo & Id) => void;
};

export const useTaskSplitModalStore =
  create<TaskSplitModalStore>(
    (set, get) =>
      ({
        activeTab: null,
        closeTabStart: false,
        finderTab: {
          domain: TASK_DOMAIN.TODO,
          sideTab: TASK_FINDER_TAB.TODAY,
          currentTask: null,
          noteData: null,
          todoData: null,
        },
        setActiveTab: (tab: TASK_SPLIT_MODAL_TAB) => {
          const { activeTab } = get();
          if (activeTab === tab) {
            set({ closeTabStart: true });
            setTimeout(() => {
              set({
                closeTabStart: false,
                activeTab: null,
              });
            }, 300);
            return;
          }

          set((prev) => {
            return { ...prev, activeTab: tab };
          });
        },
        setFinderDomain: (domain: TASK_DOMAIN) =>
          set((prev) => ({
            ...prev,
            finderTab: {
              ...prev.finderTab,
              domain,
            },
          })),
        setFinderSideTab: (sideTab: TaskFinderSideTab) =>
          set((prev) => ({
            ...prev,
            finderTab: {
              ...prev.finderTab,
              sideTab,
            },
          })),
        setCurrentTask: (taskId: number) =>
          set((prev) => ({
            ...prev,
            finderTab: {
              ...prev.finderTab,
              currentTask: taskId,
            },
          })),
        closeCurrentTask: () =>
          set((prev) => ({
            ...prev,
            finderTab: {
              ...prev.finderTab,
              currentTask: null,
              noteData: null,
              todoData: null,
            },
          })),
        setCUrrentNote: (noteData: Note & Id) =>
          set((prev) => ({
            ...prev,
            finderTab: {
              ...prev.finderTab,
              noteData,
              currentTask: noteData.id,
            },
          })),
        setCurrentTodo: (todoData: Todo & Id) =>
          set((prev) => ({
            ...prev,
            finderTab: {
              ...prev.finderTab,
              todoData,
              currentTask: todoData.id,
            },
          })),
      } as const)
  );
