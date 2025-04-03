import { useEffect } from "react";
import useSplitModalStore from "./splitModalStore";

export const useSplitShortcuts = () => {
  const { close } = useSplitModalStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        e.preventDefault();
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);
};
