import { noteQueryKey } from "@entities/note/model/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchGetRecentAllByUpdatedAt } from "../api/noteApi";
import { fetchGetAllNoteByImportant } from "@entities/note/api/noteApi";

export const useGetRecentNote = (count: number) => {
  return useQuery({
    queryKey: [noteQueryKey, "recent"],
    queryFn: async () => {
      const res = await fetchGetRecentAllByUpdatedAt(count);
      return res;
    },
  });
};

export const useGetAllByImportantQuery = () => {
  return useQuery({
    queryKey: [noteQueryKey, "important"],
    queryFn: () => fetchGetAllNoteByImportant(),
  });
};
