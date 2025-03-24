import {
  todoQueryKey,
  useGetTodoCateById,
} from "@entities/todo";
import { useTodoCateIdGetByPath } from "@features/todo";
import { useGetAllByCateIdQuery } from "@features/todo/model/todoFetchHooks";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const useTodoCateInfo = () => {
  const todoCateId = useTodoCateIdGetByPath();
  const { data } = useGetTodoCateById(Number(todoCateId));
  const queryClient = useQueryClient();
  const { data: todoList } =
    useGetAllByCateIdQuery(todoCateId);

  useEffect(() => {
    if (!todoCateId) return;
    queryClient.invalidateQueries({
      queryKey: [todoQueryKey],
    });
  }, [todoCateId, queryClient, data]);

  return { data, id: Number(todoCateId), todoList };
};
