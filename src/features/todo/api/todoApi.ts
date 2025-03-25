import TodoController from "@backend/domain/todo/controller/TodoController";

export async function fetchUpdateTodoDone(
  id: number,
  done: boolean
) {
  const res = await TodoController.getInstance().updateDone(
    id,
    done
  );

  return res;
}

export async function fetchGetAllByCateId(cateId: number) {
  const res =
    await TodoController.getInstance().getAllByCateId(
      cateId
    );

  return res;
}

export async function fetchGetAllByCateIdAndIsDone(
  cateId: number
) {
  const res =
    await TodoController.getInstance().getAllByCateIdAndIsDone(
      cateId
    );
  console.log(res);
  return res;
}

export async function fetchGetAllByImportant() {
  const res =
    await TodoController.getInstance().getAllByImportant();

  return res;
}

export async function fetchGetAllByImportantAndIsDone() {
  const res =
    await TodoController.getInstance().getAllByImportantAndIsDone();

  return res;
}

export async function fetchGetAllByIsToday() {
  const res =
    await TodoController.getInstance().getAllByIsToday();
  return res;
}
