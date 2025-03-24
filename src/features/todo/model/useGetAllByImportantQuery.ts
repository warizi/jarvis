import { useQuery } from "@tanstack/react-query";
import { fetchGetAllByImportant } from "../api/todoApi";
import { todoQueryKey } from "@entities/todo";

export const useGetAllByImportantQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByImportant(),
    queryKey: [todoQueryKey],
  });
};
