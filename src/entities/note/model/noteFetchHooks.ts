import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Note } from "./type";
import {
  fetchCreateNote,
  fetchDeleteNote,
  fetchGetAllNote,
  fetchGetAllNoteByCateId,
  fetchGetNote,
  fetchUpdateNote,
} from "../api/noteApi";
import { noteQueryKey } from "./constants";
import { Id } from "@shared/config/type/commonType";

export const useCreateNoteMutation = (cateId: number) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: Note) => fetchCreateNote(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteQueryKey, cateId],
      });
    },
  });

  return { mutate };
};

export const useUpdateNoteMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: Note & Id) => fetchUpdateNote(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteQueryKey],
      });
    },
  });

  return { mutate };
};

export const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: number) => fetchDeleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [noteQueryKey],
      });
    },
  });

  return { mutate };
};

export const useGetAllNoteQuery = () => {
  return useQuery({
    queryKey: [noteQueryKey],
    queryFn: fetchGetAllNote,
  });
};

export const useGetNoteQuery = (id: number) => {
  return useQuery({
    queryKey: [noteQueryKey, id],
    queryFn: () => fetchGetNote(id),
  });
};

export const useGetAllNoteByCateIdQuery = (
  cateId: number
) => {
  return useQuery({
    queryKey: [noteQueryKey, cateId],
    queryFn: () => fetchGetAllNoteByCateId(cateId),
  });
};
