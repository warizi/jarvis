import { useQuery } from "@tanstack/react-query";
import { fetchGetAllByImportantAndIsDone } from "../api/todoApi";
import { todoDoneQueryKey } from "./useGetAllByCateIdAndIsDoneQuery";

export const useGetAllByImportantAndIsDoneQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByImportantAndIsDone(),
    queryKey: [todoDoneQueryKey],
  });
};
