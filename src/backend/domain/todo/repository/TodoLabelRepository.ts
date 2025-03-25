import { flowaDb } from "@backend/config/dbConfig/indexedDbConfig";
import {
  TodoLabelBack,
  TodoLabelCreateBack,
} from "../entities/TodoLabelBack";

class TodoLabelRepository {
  async getAll() {
    return (await flowaDb.todoLabel.toArray()) as TodoLabelBack[];
  }

  async save(data: TodoLabelBack | TodoLabelCreateBack) {
    if ("id" in data) {
      await flowaDb.todoLabel.update(data.id, data);
    } else {
      await flowaDb.todoLabel.add(data);
    }

    return data;
  }

  async delete(id: number) {
    await flowaDb.todoLabel.delete(id);
  }

  async get(id: number) {
    return await flowaDb.todoLabel.get(id);
  }
}

export default TodoLabelRepository;
