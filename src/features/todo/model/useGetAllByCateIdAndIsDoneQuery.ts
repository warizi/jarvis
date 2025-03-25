import { useQuery } from "@tanstack/react-query";
import { fetchGetAllByCateIdAndIsDone } from "../api/todoApi";

export const todoDoneQueryKey = "done";

export const useGetAllByCateIdAndIsDoneQuery = (
  cateId: number
) => {
  return useQuery({
    queryFn: () => fetchGetAllByCateIdAndIsDone(cateId),
    queryKey: [todoDoneQueryKey],
  });
};
