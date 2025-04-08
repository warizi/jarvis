import { create } from "zustand";
import { MODAL_TRANSITION } from "./transition";

type ModalOpenProps = {
  title: string;
  content?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
};
type ModalState = {
  title: string;
  content?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  isOpen: boolean;
  isCloseStart: boolean;
  open: (props: ModalOpenProps) => void;
  close: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  title: "",
  content: undefined,
  onCancel: undefined,
  onConfirm: undefined,
  isOpen: false,
  isCloseStart: false,
  open: ({
    title,
    content,
    onCancel,
    onConfirm,
  }: ModalOpenProps) =>
    set(() => ({
      title,
      content,
      onCancel,
      onConfirm,
      isOpen: true,
      isCloseStart: false,
    })),
  close: () => {
    set({ isCloseStart: true });
    setTimeout(() => {
      set(() => ({
        title: "",
        content: undefined,
        onCancel: undefined,
        onConfirm: undefined,
        isOpen: false,
        isCloseStart: false,
      }));
    }, MODAL_TRANSITION.ms);
  },
}));

export default useModalStore;
