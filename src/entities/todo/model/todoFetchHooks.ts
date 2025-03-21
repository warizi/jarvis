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

const queryKey = "todo";

export const useCreateTodoMutaion = () => {
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
        queryKey: [queryKey],
      });
    },
  });

  return { mutate };
};

export const useGetAllTodoQuery = () => {
  return useQuery({
    queryFn: fetchGetAllTodo,
    queryKey: [queryKey],
  });
};

export const useGetTodoQuery = (id: number) => {
  return useQuery({
    queryFn: () => fetchGetTodo(id),
    queryKey: [queryKey, id],
  });
};
