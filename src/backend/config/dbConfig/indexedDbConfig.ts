import { NoteBack } from "@backend/domain/note/entities/NoteBack";
import { NoteCateBack } from "@backend/domain/note/entities/NoteCateBack";
import { NoteLabelBack } from "@backend/domain/note/entities/NoteLabelBack";
import { TodoBack } from "@backend/domain/todo/entities/TodoBack";
import { TodoCateBack } from "@backend/domain/todo/entities/TodoCateBack";
import { TodoLabelBack } from "@backend/domain/todo/entities/TodoLabelBack";
import Dexie, { EntityTable } from "dexie";

export const flowaDb = new Dexie("flowaDb") as Dexie & {
  todoCate: EntityTable<TodoCateBack, "id">;
  todo: EntityTable<TodoBack, "id">;
  todoLabel: EntityTable<TodoLabelBack, "id">;
  noteCate: EntityTable<NoteCateBack, "id">;
  noteLabel: EntityTable<NoteLabelBack, "id">;
  note: EntityTable<NoteBack, "id">;
};

flowaDb.version(1).stores({
  todoCate: "++id, name, order",
  todo: "++id, title, isDone, sub, order, isImportant, startDate, endDate, isToday, repeatType, repeatDate, memo, cateId, doneDate",
  todoLabel: "++id, name, order, color",
  noteCate: "++id, name, order",
  noteLabel: "++id, name, order, color",
  note: "++id, title, order, isImportant, content, labelId, cateId, createdAt, updatedAt",
});
