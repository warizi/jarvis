import TodoController from "@backend/domain/todo/controller/TodoController";

export async function fetchGetCountAllTodo() {
  const res =
    await TodoController.getInstance().getCountAll();
  await new Promise((resolve) => setTimeout(resolve, 200));

  return res;
}

export async function fetchGetAllByIsDone() {
  const res =
    await TodoController.getInstance().getAllByIsDone();

  await new Promise((resolve) => setTimeout(resolve, 200));
  return res;
}

export async function fetchUpdateTodoDone(
  id: number,
  done: boolean
) {
  const res = await TodoController.getInstance().updateDone(
    id,
    done
  );
  await new Promise((resolve) => setTimeout(resolve, 200));

  return res;
}

export async function fetchGetAllByCateId(cateId: number) {
  const res =
    await TodoController.getInstance().getAllByCateId(
      cateId
    );
  await new Promise((resolve) => setTimeout(resolve, 200));

  return res;
}

export async function fetchGetCountAllByCateId(
  cateId: number
) {
  const res =
    await TodoController.getInstance().getCountAllByCateId(
      cateId
    );
  await new Promise((resolve) => setTimeout(resolve, 200));

  return res;
}

export async function fetchGetAllByCateIdAndIsDone(
  cateId: number
) {
  const res =
    await TodoController.getInstance().getAllByCateIdAndIsDone(
      cateId
    );
  await new Promise((resolve) => setTimeout(resolve, 200));
  return res;
}

export async function fetchGetAllByImportant() {
  const res =
    await TodoController.getInstance().getAllByImportant();

  await new Promise((resolve) => setTimeout(resolve, 200));
  return res;
}

export async function fetchGetCountAllByImportant() {
  const res =
    await TodoController.getInstance().getCountAllByImportant();

  await new Promise((resolve) => setTimeout(resolve, 200));
  return res;
}

export async function fetchGetAllByImportantAndIsDone() {
  const res =
    await TodoController.getInstance().getAllByImportantAndIsDone();

  await new Promise((resolve) => setTimeout(resolve, 200));
  return res;
}

export async function fetchGetAllByIsToday() {
  const res =
    await TodoController.getInstance().getAllByIsToday();
  await new Promise((resolve) => setTimeout(resolve, 200));
  return res;
}

export async function fetchGetCountAllByIsToday() {
  const res =
    await TodoController.getInstance().getCountAllByIsToday();
  await new Promise((resolve) => setTimeout(resolve, 200));
  return res;
}
