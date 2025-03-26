import TodoController from "@backend/domain/todo/controller/TodoController";
import { Todo } from "../model/type";
import { Id } from "@shared/config/type/commonType";

export async function fetchGetTodo(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoController.getInstance().get(id);
}

export async function fetchGetAllTodo() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoController.getInstance().getAll();
}

export async function fetchCreateTodo(data: Todo) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoController.getInstance().create(data);
}

export async function fetchUpdateTodo(data: Todo & Id) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoController.getInstance().update(data);
}

export async function fetchDeleteTodo(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoController.getInstance().delete(id);
}
