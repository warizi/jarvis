import {
  todoQueryKey,
  useGetTodoCateById,
} from "@entities/todo";
import { useTodoCateIdGetByPath } from "@features/todo";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const useTodoCateInfo = () => {
  const todoCateId = useTodoCateIdGetByPath();
  const { data } = useGetTodoCateById(Number(todoCateId));
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: [todoQueryKey],
    });
  }, [todoCateId, queryClient]);

  return { data, id: Number(todoCateId) };
};
