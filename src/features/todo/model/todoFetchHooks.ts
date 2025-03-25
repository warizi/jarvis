import { todoQueryKey } from "@entities/todo";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchGetAllByCateId,
  fetchGetAllByCateIdAndIsDone,
  fetchGetAllByImportant,
  fetchGetAllByImportantAndIsDone,
  fetchGetAllByIsDone,
  fetchGetAllByIsToday,
  fetchUpdateTodoDone,
} from "../api/todoApi";
import { queryKeyByIsDone } from "@entities/todo/model/todoCateFetchHooks";

export const todoDoneQueryKey = "done";

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

export const useGetAllByCateIdAndIsDoneQuery = (
  cateId: number
) => {
  return useQuery({
    queryFn: () => fetchGetAllByCateIdAndIsDone(cateId),
    queryKey: [todoDoneQueryKey],
  });
};

export const useGetAllByImportantAndIsDoneQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByImportantAndIsDone(),
    queryKey: [todoDoneQueryKey],
  });
};

export const useGetAllByImportantQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByImportant(),
    queryKey: [todoQueryKey],
  });
};

export const useGetAllByIsTodayQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByIsToday(),
    queryKey: [todoQueryKey],
  });
};

export const useGetAllByIsDoneQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByIsDone(),
    queryKey: [todoDoneQueryKey],
  });
};
