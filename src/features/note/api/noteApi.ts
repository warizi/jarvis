import TodoController from "@backend/domain/todo/controller/TodoController";

export async function fetchGetAllByImportant() {
  const res =
    await TodoController.getInstance().getAllByImportant();

  return res;
}
