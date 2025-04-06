import NoteLabelController from "@backend/domain/note/controller/NoteLabelController";
import { NoteLabel } from "../model/type";
import { Id } from "@shared/config/type/commonType";

export async function fetchGetNoteLabel(id: number) {
  return await NoteLabelController.getInstance().get(id);
}

export async function fetchGetAllNoteLabel() {
  const result =
    await NoteLabelController.getInstance().getAll();

  // 200ms 대기 후 결과 반환

  return result;
}

export async function fetchCreateNoteLabel(
  data: NoteLabel
) {
  return await NoteLabelController.getInstance().create(
    data
  );
}

export async function fetchUpdateNoteLabel(
  data: NoteLabel & Id
) {
  return await NoteLabelController.getInstance().update(
    data
  );
}

export async function fetchDeleteNoteLabel(id: number) {
  return await NoteLabelController.getInstance().delete(id);
}
