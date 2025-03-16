import { create } from "zustand";
import { SPLIT_MODAL_TRANSITION } from "./transition";

type SplitModalState = {
  isOpen: boolean;
  isCloseStart: boolean;
  open: () => void;
  close: () => void;
};
const useSplitModalStore = create<SplitModalState>(
  (set) => ({
    isOpen: false,
    isCloseStart: false,
    open: () =>
      set(() => ({ isOpen: true, isCloseStart: false })),
    close: () => {
      set({ isCloseStart: true });
      setTimeout(() => {
        set(() => ({ isOpen: false, isCloseStart: false }));
      }, SPLIT_MODAL_TRANSITION.ms);
    },
  })
);

export default useSplitModalStore;
