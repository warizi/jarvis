import { NoteCate } from "@entities/note";
import { Id } from "@shared/config/type/commonType";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useLocation } from "react-router-dom";

export const useIsCurrentLink = () => {
  const pathname = useLocation().pathname;

  const isCurrentLink = (note: NoteCate & Id) => {
    if (pathname.includes(ROUTE_URL.NOTE)) {
      return pathname.includes(String(note.id));
    }

    return false;
  };

  return isCurrentLink;
};
