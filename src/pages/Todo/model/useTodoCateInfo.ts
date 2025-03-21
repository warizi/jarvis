import { useGetTodoCateById } from "@entities/todo";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useLocation } from "react-router-dom";

export const useTodoCateInfo = () => {
  const { pathname } = useLocation();
  const todoCateId = pathname
    .replace(ROUTE_URL.TODO_CATE, "")
    .replace("/", "");
  const { data } = useGetTodoCateById(Number(todoCateId));
  console.log("page id", todoCateId);
  return { data, id: Number(todoCateId) };
};
