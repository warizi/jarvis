import { create } from "zustand";
import { SPLIT_MODAL_TRANSITION } from "./transition";

type SplitModalOpenProps = {
  title: string;
};

type SplitModalState = {
  title: string;
  isOpen: boolean;
  isCloseStart: boolean;
  open: (props: SplitModalOpenProps) => void;
  close: () => void;
};
const useSplitModalStore = create<SplitModalState>(
  (set) => ({
    title: "",
    isOpen: false,
    isCloseStart: false,
    open: ({ title }: SplitModalOpenProps) =>
      set(() => ({
        isOpen: true,
        isCloseStart: false,
        title: title,
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
