import {
  useDeleteNoteCateMutation,
  useGetAllNoteCateQuery,
} from "@entities/note";
import { useLocation, useNavigate } from "react-router-dom";
import { useNoteCateIdGetByPath } from "./useNoteCateIdGetByPath";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";

export const useNoteCateDelete = (cateId: number) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const { mutate } = useDeleteNoteCateMutation();
  const { data } = useGetAllNoteCateQuery();
  const pageId = useNoteCateIdGetByPath();

  const index = data?.findIndex(
    (item) => item.id === cateId
  );
  const prevIndex = index ? index - 1 : -1;
  const nextIndex = index || index === 0 ? index + 1 : -1;

  const isCurrentNoteCatePage = pathname.includes(
    ROUTE_URL.NOTE_CATE
  );

  const isSamePage = cateId === pageId;

  const onDelete = async () => {
    if (isCurrentNoteCatePage && isSamePage) {
      if (prevIndex >= 0 && data) {
        navigate(
          ROUTE_URL.NOTE_CATE + "/" + data[prevIndex].id
        );
      } else if (
        nextIndex >= 0 &&
        data &&
        data.length > 1
      ) {
        navigate(
          ROUTE_URL.NOTE_CATE + "/" + data[nextIndex].id
        );
      } else {
        navigate(ROUTE_URL.NOTE);
      }
    }
    await mutate(cateId);
  };

  return { onDelete };
};
