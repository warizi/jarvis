import {
  useCreateTodoCateMutation,
  useDeleteTodoCateMutation,
  useUpdateTodoCateMutation,
  useGetAllTodoCateQuery,
  useGetTodoCateById,
} from "@entities/todo/model/todoCateFetchHooks";

import {
  todoQueryKey,
  useCreateTodoMutaion,
  useDeleteTodoMutation,
  useGetAllTodoQuery,
  useGetTodoQuery,
  useUpdateTodoMutation,
} from "@entities/todo/model/todoFetchHooks";

export {
  //todoCate
  useCreateTodoCateMutation,
  useDeleteTodoCateMutation,
  useUpdateTodoCateMutation,
  useGetAllTodoCateQuery,
  useGetTodoCateById,
  //todo
  useCreateTodoMutaion,
  useDeleteTodoMutation,
  useGetAllTodoQuery,
  useGetTodoQuery,
  useUpdateTodoMutation,
  todoQueryKey,
};
