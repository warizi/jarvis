import { flowaDb } from "@backend/config/dbConfig/indexedDbConfig";
import {
  TodoCateBack,
  TodoCateCreateBack,
} from "../entities/TodoCateBack";

class TodoCateRepository {
  async getAll() {
    return (await flowaDb.todoCate.toArray()) as TodoCateBack[];
  }
  async save(data: TodoCateBack | TodoCateCreateBack) {
    if ("id" in data) {
      await flowaDb.todoCate.update(data.id, data);
    } else {
      await flowaDb.todoCate.add(data);
    }

    return data;
  }

  async delete(id: number) {
    await flowaDb.todoCate.delete(id);
  }

  async get(id: number) {
    return await flowaDb.todoCate.get(id);
  }
}

export default TodoCateRepository;
