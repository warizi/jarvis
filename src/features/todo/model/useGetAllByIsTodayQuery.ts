import { useQuery } from "@tanstack/react-query";
import { fetchGetAllByIsToday } from "../api/todoApi";
import { todoQueryKey } from "@entities/todo";

export const useGetAllByIsTodayQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByIsToday(),
    queryKey: [todoQueryKey],
  });
};
