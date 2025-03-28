import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchGetAllTodo,
  fetchGetTodo,
  fetchUpdateTodo,
} from "../api/todoApi";
import { Todo } from "./type";
import { queryKeyByIsDone } from "./todoCateFetchHooks";
import { Id } from "@shared/config/type/commonType";

export const todoQueryKey = "todo";

export const useCreateTodoMutaion = (cateId?: number) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: Todo) => fetchCreateTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeyByIsDone],
      });
      queryClient.invalidateQueries({
        queryKey: [todoQueryKey, "importantCount"],
      });
      queryClient.invalidateQueries({
        queryKey: [todoQueryKey, "todayCount"],
      });
      queryClient.invalidateQueries({
        queryKey: [todoQueryKey, "allCount"],
      });
      queryClient.invalidateQueries({
        queryKey: cateId
          ? [todoQueryKey]
          : [todoQueryKey, cateId],
      });
    },
  });

  return { mutate };
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: Todo & Id) => fetchUpdateTodo(data),
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

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: number) => fetchDeleteTodo(id),
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

export const useGetAllTodoQuery = () => {
  return useQuery({
    queryFn: fetchGetAllTodo,
    queryKey: [todoQueryKey],
  });
};

export const useGetTodoQuery = (id: number) => {
  return useQuery({
    queryFn: () => fetchGetTodo(id),
    queryKey: [todoQueryKey, id],
  });
};
