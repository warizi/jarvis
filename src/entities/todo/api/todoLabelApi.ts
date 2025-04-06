import TodoLabelController from "@backend/domain/todo/controller/TodoLabelController";
import { TodoLabel } from "../model/type";
import { Id } from "@shared/config/type/commonType";

export async function fetchGetTodoLabel(id: number) {
  return await TodoLabelController.getInstance().get(id);
}

export async function fetchGetAllTodoLabel() {
  const result =
    await TodoLabelController.getInstance().getAll();

  // 200ms 대기 후 결과 반환

  return result;
}

export async function fetchCreateTodoLabel(
  data: TodoLabel
) {
  return await TodoLabelController.getInstance().create(
    data
  );
}

export async function fetchUpdateTodoLabel(
  data: TodoLabel & Id
) {
  return await TodoLabelController.getInstance().update(
    data
  );
}

export async function fetchDeleteTodoLabel(id: number) {
  return await TodoLabelController.getInstance().delete(id);
}
