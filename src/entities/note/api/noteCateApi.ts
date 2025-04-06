import NoteCateController from "@backend/domain/note/controller/NoteCateController";
import { NoteCateType } from "../model/type";

export async function fetchGetNoteCate(id: number) {
  return await NoteCateController.getInstance().get(id);
}

export async function fetchGetAllNoteCate() {
  const result =
    await NoteCateController.getInstance().getAll();

  await new Promise((resolve) => setTimeout(resolve, 100));
  return result;
}

export async function fetchCreateNoteCate(
  data: NoteCateType
) {
  return await NoteCateController.getInstance().create(
    data
  );
}

export async function fetchUpdateNoteCate(
  data: NoteCateType
) {
  return await NoteCateController.getInstance().update(
    data
  );
}

export async function fetchDeleteNoteCate(id: number) {
  return await NoteCateController.getInstance().delete(id);
}
