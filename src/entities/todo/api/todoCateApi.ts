import TodoCateController from "@backend/domain/todo/controller/TodoCateController";
import { TodoCate } from "../model/type";
import { Id } from "@shared/config/type/commonType";

export async function fetchGetTodoCate(id: number) {
  return await TodoCateController.getInstance().get(id);
}

export async function fetchGetAllTodoCate() {
  const result =
    await TodoCateController.getInstance().getAll();

  // 200ms 대기 후 결과 반환
  await new Promise((resolve) => setTimeout(resolve, 200));
  return result;
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
