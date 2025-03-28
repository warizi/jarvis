import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { NoteLabel } from "./type";
import {
  fetchCreateNoteLabel,
  fetchDeleteNoteLabel,
  fetchGetAllNoteLabel,
  fetchGetNoteLabel,
  fetchUpdateNoteLabel,
} from "../api/noteLabelApi";
import { noteLabelQueryKey } from "./constants";
import { Id } from "@shared/config/type/commonType";

export const useCreateNoteLabelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NoteLabel) =>
      fetchCreateNoteLabel(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteLabelQueryKey],
      });
    },
  });
};

export const useUpdateNoteLabelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NoteLabel & Id) =>
      fetchUpdateNoteLabel(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteLabelQueryKey],
      });
    },
  });
};

export const useDeleteNoteLabelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => fetchDeleteNoteLabel(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteLabelQueryKey],
      });
    },
  });
};

export const useGetAllNoteLabelQuery = () => {
  return useQuery({
    queryKey: [noteLabelQueryKey],
    queryFn: () => fetchGetAllNoteLabel(),
  });
};

export const useGetNoteLabelQuery = (id: number) => {
  return useQuery({
    queryKey: [noteLabelQueryKey, id],
    queryFn: () => fetchGetNoteLabel(id),
  });
};
