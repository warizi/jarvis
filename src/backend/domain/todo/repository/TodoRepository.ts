import { flowaDb } from "@backend/config/dbConfig/indexedDbConfig";
import {
  TodoBack,
  TodoCreateBack,
} from "../entities/TodoBack";

class TodoRepository {
  async getAll() {
    return (await flowaDb.todo.toArray()) as TodoBack[];
  }

  async save(data: TodoBack | TodoCreateBack) {
    if ("id" in data) {
      await flowaDb.todo.update(data.id, data);
    } else {
      await flowaDb.todo.add(data);
    }

    return data;
  }

  async delete(id: number) {
    await flowaDb.todo.delete(id);
  }

  async get(id: number) {
    return await flowaDb.todo.get(id);
  }
}

export default TodoRepository;
