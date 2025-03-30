import NoteCateController from "@backend/domain/note/controller/NoteCateController";
import { NoteCateType } from "../model/type";

export async function fetchGetNoteCate(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteCateController.getInstance().get(id);
}

export async function fetchGetAllNoteCate() {
  const result =
    await NoteCateController.getInstance().getAll();

  // 200ms 대기 후 결과 반환
  await new Promise((resolve) => setTimeout(resolve, 200));
  return result;
}

export async function fetchCreateNoteCate(
  data: NoteCateType
) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteCateController.getInstance().create(
    data
  );
}

export async function fetchUpdateNoteCate(
  data: NoteCateType
) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteCateController.getInstance().update(
    data
  );
}

export async function fetchDeleteNoteCate(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteCateController.getInstance().delete(id);
}
