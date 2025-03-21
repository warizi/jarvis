import { TodoBack } from "@backend/domain/todo/entities/TodoBack";
import { TodoCateBack } from "@backend/domain/todo/entities/TodoCateBack";
import Dexie, { EntityTable } from "dexie";

export const flowaDb = new Dexie("flowaDb") as Dexie & {
  todoCate: EntityTable<TodoCateBack, "id">;
  todo: EntityTable<TodoBack, "id">;
};

flowaDb.version(1).stores({
  todoCate: "++id, name, order",
  todo: "++id, title, isDone, sub, order, isImportant, startDate, endDate, isToday, repeatType, repeatDate, memo, cateId",
});
