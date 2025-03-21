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
} from "../api/todoApi";
import { Todo } from "./type";

export const todoQueryKey = "todo";

export const useCreateTodoMutaion = (cateId?: number) => {
  const queryClient = useQueryClient();
  const queryKey = "todo";
  const { mutate } = useMutation({
    mutationFn: (data: Todo) => fetchCreateTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cateId ? [queryKey] : [queryKey, cateId],
      });
    },
  });

  return { mutate };
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  const queryKey = "todo";
  const { mutate } = useMutation({
    mutationFn: (data: Todo) => fetchCreateTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
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
