import { todoQueryKey } from "@entities/todo";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchGetAllByCateId,
  fetchUpdateTodoDone,
} from "../api/todoApi";
import { queryKeyByIsDone } from "@entities/todo/model/todoCateFetchHooks";

export const useUpdateTodoDoneMutate = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({
      id,
      done,
    }: {
      id: number;
      done: boolean;
    }) => fetchUpdateTodoDone(id, done),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeyByIsDone],
      });
      queryClient.invalidateQueries({
        queryKey: [todoQueryKey],
      });
    },
  });

  return { mutate };
};

export const useGetAllByCateIdQuery = (cateId: number) => {
  return useQuery({
    queryFn: () => fetchGetAllByCateId(cateId),
    queryKey: [todoQueryKey],
    enabled: cateId !== undefined,
  });
};
