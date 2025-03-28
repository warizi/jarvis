import NoteController from "@backend/domain/note/controller/NoteController";
import { Note } from "../model/type";
import { Id } from "@shared/config/type/commonType";

export async function fetchGetNote(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteController.getInstance().get(id);
}

export async function fetchGetAllNote() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteController.getInstance().getAll();
}

export async function fetchCreateNote(data: Note) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteController.getInstance().create(data);
}

export async function fetchUpdateNote(data: Note & Id) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteController.getInstance().update(data);
}

export async function fetchDeleteNote(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteController.getInstance().delete(id);
}

export async function fetchGetAllNoteByCateId(
  cateId: number
) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteController.getInstance().getAllByCateId(
    cateId
  );
}

export async function fetchGetAllNoteByImportant() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return await NoteController.getInstance().getAllByImportant();
}
