import { useLocation } from "react-router-dom";

export const useTiodoMenuCurrent = () => {
  const pathname = useLocation().pathname;

  const isCurrent = (link: string) => {
    return pathname.includes(link);
  };

  return isCurrent;
};
