import {
  useDeleteTodoCateMutation,
  useGetAllTodoCateQuery,
} from "@entities/todo";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useLocation, useNavigate } from "react-router-dom";
import { useTodoCateIdGetByPath } from "./useTodoCateIdGetByPath";

//현재 페이지를 삭제할 경우 다른 todocate 로 이동 또는 today로 이동 후 삭제
export const useTodoCateDelete = (cateId: number) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const { mutate } = useDeleteTodoCateMutation();
  const { data } = useGetAllTodoCateQuery();
  const pageId = useTodoCateIdGetByPath();

  const index = data?.findIndex(
    (item) => item.id === cateId
  );
  const prevIndex = index ? index - 1 : -1;
  const nextIndex = index || index === 0 ? index + 1 : -1;

  const isCurrentTodoCatePage = pathname.includes(
    ROUTE_URL.TODO_CATE
  );

  const isSamePage = cateId === pageId;

  const onDelete = async () => {
    if (isCurrentTodoCatePage && isSamePage) {
      if (prevIndex >= 0 && data) {
        navigate(
          ROUTE_URL.TODO_CATE + "/" + data[prevIndex].id
        );
      } else if (
        nextIndex >= 0 &&
        data &&
        data.length > 1
      ) {
        navigate(
          ROUTE_URL.TODO_CATE + "/" + data[nextIndex].id
        );
      } else {
        navigate(ROUTE_URL.TODO_TODAY);
      }
    }
    await mutate(cateId);
  };

  return { onDelete };
};
