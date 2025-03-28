import { NoteCateCreateBack } from "@backend/domain/note/entities/NoteCateBack";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchCreateNoteCate,
  fetchDeleteNoteCate,
  fetchGetAllNoteCate,
  fetchGetNoteCate,
  fetchUpdateNoteCate,
} from "../api/noteCateApi";
import { noteCateQueryKey } from "./constants";

export const useCreateNoteCateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NoteCateCreateBack) =>
      fetchCreateNoteCate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteCateQueryKey],
      });
    },
  });
};

export const useUpdateNoteCateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NoteCateCreateBack) =>
      fetchUpdateNoteCate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteCateQueryKey],
      });
    },
  });
};

export const useDeleteNoteCateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => fetchDeleteNoteCate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteCateQueryKey],
      });
    },
  });
};

export const useGetAllNoteCateQuery = () => {
  return useQuery({
    queryFn: fetchGetAllNoteCate,
    queryKey: [noteCateQueryKey],
  });
};

export const useGetNoteCateByIdQuery = (id: number) => {
  return useQuery({
    queryFn: () => fetchGetNoteCate(id),
    queryKey: [noteCateQueryKey, id],
  });
};
