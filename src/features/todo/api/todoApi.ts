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
