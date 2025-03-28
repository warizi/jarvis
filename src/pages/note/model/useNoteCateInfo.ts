import {
  useGetAllNoteByCateIdQuery,
  useGetNoteCateByIdQuery,
} from "@entities/note";
import { useNoteCateIdGetByPath } from "@features/note/model/useNoteCateIdGetByPath";

export const useNoteCateInfo = () => {
  const noteCateId = useNoteCateIdGetByPath();
  const { data } = useGetNoteCateByIdQuery(
    Number(noteCateId)
  );
  const { data: noteList } =
    useGetAllNoteByCateIdQuery(noteCateId);
  return {
    data,
    id: Number(noteCateId),
    noteList,
  };
};
