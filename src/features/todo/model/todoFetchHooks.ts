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
  fetchGetCountAllByCateId,
  fetchGetCountAllByImportant,
  fetchGetCountAllByIsToday,
  fetchGetCountAllTodo,
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

export const useGetCountAllTodoQuery = () => {
  return useQuery({
    queryFn: () => fetchGetCountAllTodo(),
    queryKey: [todoQueryKey, "allCount"],
  });
};

export const useGetAllByCateIdQuery = (cateId: number) => {
  return useQuery({
    queryFn: () => fetchGetAllByCateId(cateId),
    queryKey: [todoQueryKey],
    enabled: cateId !== undefined,
  });
};

export const useGetCountAllByCateIdQuery = (
  cateId: number
) => {
  return useQuery({
    queryFn: () => fetchGetCountAllByCateId(cateId),
    queryKey: [todoQueryKey, "cateCount", cateId],
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

export const useGetCountAllByImportantQuery = () => {
  return useQuery({
    queryFn: () => fetchGetCountAllByImportant(),
    queryKey: [todoQueryKey, "importantCount"],
  });
};

export const useGetAllByIsTodayQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByIsToday(),
    queryKey: [todoQueryKey],
  });
};

export const useGetCountAllByIsTodayQuery = () => {
  return useQuery({
    queryFn: () => fetchGetCountAllByIsToday(),
    queryKey: [todoQueryKey, "todayCount"],
  });
};

export const useGetAllByIsDoneQuery = () => {
  return useQuery({
    queryFn: () => fetchGetAllByIsDone(),
    queryKey: [todoDoneQueryKey],
  });
};
