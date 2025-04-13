import { useLocation } from "react-router-dom";

export const useNoteMenuCurrent = () => {
  const pathname = useLocation().pathname;

  const isCurrent = (link: string) => {
    return pathname === link;
  };

  return isCurrent;
};
