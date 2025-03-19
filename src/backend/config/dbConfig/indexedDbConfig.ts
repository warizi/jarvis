import { TodoCateBack } from "@backend/domain/todo/entities/TodoCateBack";
import Dexie, { EntityTable } from "dexie";

export const flowaDb = new Dexie("flowaDb") as Dexie & {
  todoCate: EntityTable<TodoCateBack, "id">;
};

flowaDb.version(1).stores({
  todoCate: "++id, name, order",
});
