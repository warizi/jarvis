import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useLocation } from "react-router-dom";

export const useNoteCateIdGetByPath = (): number => {
  const pathname = useLocation().pathname;

  return Number(
    pathname.replace(ROUTE_URL.NOTE_CATE, "").split("/")[0]
  );
};
