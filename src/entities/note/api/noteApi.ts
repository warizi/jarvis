import NoteController from "@backend/domain/note/controller/NoteController";
import { Note } from "../model/type";
import { Id } from "@shared/config/type/commonType";

export async function fetchGetNote(id: number) {
  return await NoteController.getInstance().get(id);
}

export async function fetchGetAllNote() {
  return await NoteController.getInstance().getAll();
}

export async function fetchCreateNote(data: Note) {
  return await NoteController.getInstance().create(data);
}

export async function fetchUpdateNote(data: Note & Id) {
  return await NoteController.getInstance().update(data);
}

export async function fetchDeleteNote(id: number) {
  return await NoteController.getInstance().delete(id);
}

export async function fetchGetAllNoteByCateId(
  cateId: number
) {
  return await NoteController.getInstance().getAllByCateId(
    cateId
  );
}

export async function fetchGetAllNoteByImportant() {
  return await NoteController.getInstance().getAllByImportant();
}
