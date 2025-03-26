import TodoLabelController from "@backend/domain/todo/controller/TodoLabelController";
import { TodoLabel } from "../model/type";
import { Id } from "@shared/config/type/commonType";

export async function fetchGetTodoLabel(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoLabelController.getInstance().get(id);
}

export async function fetchGetAllTodoLabel() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const result =
    await TodoLabelController.getInstance().getAll();

  // 200ms 대기 후 결과 반환
  await new Promise((resolve) => setTimeout(resolve, 200));
  return result;
}

export async function fetchCreateTodoLabel(
  data: TodoLabel
) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoLabelController.getInstance().create(
    data
  );
}

export async function fetchUpdateTodoLabel(
  data: TodoLabel & Id
) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoLabelController.getInstance().update(
    data
  );
}

export async function fetchDeleteTodoLabel(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await TodoLabelController.getInstance().delete(id);
}
