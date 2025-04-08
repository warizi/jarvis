import { create } from "zustand";
import { SPLIT_MODAL_TRANSITION } from "./transition";

type SplitModalOpenProps = {
  title: string;
  itemId: number;
  type: SplitModalType;
  content?: React.ReactNode;
  onDelete?: () => void;
};

export enum SplitModalType {
  NOTE = "NOTE",
  TODO = "TODO",
}

type SplitModalState = {
  title: string;
  itemId: number | null;
  type: SplitModalType | null;
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
    footerText: undefined,
    itemId: null,
    type: null,
    onDelete: undefined,
    isOpen: false,
    isCloseStart: false,
    open: ({
      title,
      itemId,
      type,
      content,
      onDelete,
    }: SplitModalOpenProps) =>
      set(() => ({
        title,
        content,
        itemId,
        type,
        onDelete,
        isOpen: true,
        isCloseStart: false,
      })),
    close: () => {
      set({ isCloseStart: true });
      setTimeout(() => {
        set(() => ({
          isOpen: false,
          itemId: null,
          isCloseStart: false,
        }));
      }, SPLIT_MODAL_TRANSITION.ms);
    },
  })
);

export default useSplitModalStore;
