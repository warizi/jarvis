import TodoCateController from "@backend/domain/todo/controller/TodoCateController";
import { TodoCate } from "../model/type";
import { Id } from "@shared/config/type/commonType";

export async function fetchGetTodoCate(id: number) {
  return await TodoCateController.getInstance().get(id);
}

export async function fetchGetAllTodoCate() {
  return (
    await TodoCateController.getInstance().getAll()
  ).sort((a, b) => a.order - b.order);
}

export async function fetchCreateTodoCate(data: TodoCate) {
  return await TodoCateController.getInstance().create(
    data
  );
}

export async function fetchUpdateTodoCate(
  data: TodoCate & Id
) {
  return await TodoCateController.getInstance().update(
    data
  );
}

export async function fetchDeleteTodoCate(id: number) {
  return await TodoCateController.getInstance().delete(id);
}
