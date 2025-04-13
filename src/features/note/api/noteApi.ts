import NoteController from "@backend/domain/note/controller/NoteController";

export async function fetchGetAllByImportant() {
  const res =
    await NoteController.getInstance().getAllByImportant();

  return res;
}

export async function fetchGetRecentAllByUpdatedAt(
  count: number
) {
  const res =
    await NoteController.getInstance().getRecentAllByUpdatedAt(
      count
    );

  return res;
}
