import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { TodoLabel } from "./type";
import {
  fetchCreateTodoLabel,
  fetchDeleteTodoLabel,
  fetchGetAllTodoLabel,
  fetchGetTodoLabel,
  fetchUpdateTodoLabel,
} from "../api/todoLabelApi";
import { Id } from "@shared/config/type/commonType";

export const todoLabelKey = "todoLabel";

export const useCreateTodoLabelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TodoLabel) =>
      fetchCreateTodoLabel(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [todoLabelKey],
      });
    },
  });
};

export const useUpdateTodoLabelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TodoLabel & Id) =>
      fetchUpdateTodoLabel(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [todoLabelKey],
      });
    },
  });
};

export const useDeleteTodoLabelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => fetchDeleteTodoLabel(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [todoLabelKey],
      });
    },
  });
};

export const useGetAllTodoLabelQuery = () => {
  return useQuery({
    queryKey: [todoLabelKey],
    queryFn: fetchGetAllTodoLabel,
  });
};

export const useGetTodoLabelQuery = (id?: number) => {
  return useQuery({
    queryKey: [todoLabelKey, id],
    queryFn: () => fetchGetTodoLabel(id || 0),
  });
};
