import { TodoCateType } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useLocation } from "react-router-dom";

export const useTodoCateList = () => {
  const pathname = useLocation().pathname;

  const isCurrentLink = (todo: TodoCateType & Id) => {
    if (pathname.includes(ROUTE_URL.TODO)) {
      return pathname.includes(String(todo.id));
    }
    return false;
  };

  return isCurrentLink;
};
