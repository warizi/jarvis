import { create } from "zustand";
import { SPLIT_MODAL_TRANSITION } from "./transition";

type SplitModalOpenProps = {
  title: string;
  content?: React.ReactNode;
  onDelete?: () => void;
};

type SplitModalState = {
  title: string;
  content?: React.ReactNode;
  onDelete?: () => void;
  isOpen: boolean;
  isCloseStart: boolean;
  open: (props: SplitModalOpenProps) => void;
  close: () => void;
};

const useSplitModalStore = create<SplitModalState>(
  (set) => ({
    title: "",
    content: undefined,
    onDelete: undefined,
    isOpen: false,
    isCloseStart: false,
    open: ({
      title,
      content,
      onDelete,
    }: SplitModalOpenProps) =>
      set(() => ({
        title,
        content,
        onDelete,
        isOpen: true,
        isCloseStart: false,
      })),
    close: () => {
      set({ isCloseStart: true });
      setTimeout(() => {
        set(() => ({ isOpen: false, isCloseStart: false }));
      }, SPLIT_MODAL_TRANSITION.ms);
    },
  })
);

export default useSplitModalStore;
