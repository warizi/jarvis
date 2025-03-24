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
    const convertedData = {
      ...data,
      isImportant: data.isImportant ? 1 : 0, // boolean → number 변환
    };

    if ("id" in data) {
      await flowaDb.todo.update(data.id, convertedData);
    } else {
      await flowaDb.todo.add(convertedData);
    }

    return convertedData;
  }

  async findByImportant() {
    return (await flowaDb.todo
      .where("isImportant")
      .equals(1) // Assuming 'true' is stored as 1 in the database
      .toArray()) as TodoBack[];
  }

  async findByCateId(cateId: number) {
    return (await flowaDb.todo
      .where({ cateId })
      .toArray()) as TodoBack[];
  }

  async delete(id: number) {
    await flowaDb.todo.delete(id);
  }

  async get(id: number) {
    return await flowaDb.todo.get(id);
  }
}

export default TodoRepository;
