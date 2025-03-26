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

import {
  todoLabelKey,
  useCreateTodoLabelMutation,
  useDeleteTodoLabelMutation,
  useGetAllTodoLabelQuery,
  useUpdateTodoLabelMutation,
  useGetTodoLabelQuery,
} from "./model/todoLabelFetchHooks";

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
  //todoLabel
  todoLabelKey,
  useCreateTodoLabelMutation,
  useDeleteTodoLabelMutation,
  useGetAllTodoLabelQuery,
  useUpdateTodoLabelMutation,
  useGetTodoLabelQuery,
};
