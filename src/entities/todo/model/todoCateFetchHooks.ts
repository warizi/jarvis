import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { TodoCateType } from "./type";
import {
  fetchCreateTodoCate,
  fetchDeleteTodoCate,
  fetchGetAllTodoCate,
  fetchGetTodoCate,
  fetchUpdateTodoCate,
} from "../api/todoCateApi";
import { Id } from "@shared/config/type/commonType";

const queryKey = "todoCate";
export const queryKeyByIsDone = "done";

export const useCreateTodoCateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TodoCateType) =>
      fetchCreateTodoCate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeyByIsDone],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
  });
};

export const useUpdateTodoCateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TodoCateType & Id) =>
      fetchUpdateTodoCate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeyByIsDone],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
  });
};

export const useDeleteTodoCateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => fetchDeleteTodoCate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeyByIsDone],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
  });
};

export const useGetAllTodoCateQuery = () => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: fetchGetAllTodoCate,
  });
};

export const useGetTodoCateById = (id: number) => {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: () => fetchGetTodoCate(id),
  });
};
