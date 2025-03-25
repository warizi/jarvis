import { flowaDb } from "@backend/config/dbConfig/indexedDbConfig";
import {
  TodoBack,
  TodoCreateBack,
} from "../entities/TodoBack";
import { isToday } from "@backend/common/utils/isToday";

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

  async findByImportantAndIsDone() {
    return (
      await flowaDb.todo
        .where("isImportant")
        .equals(1)
        .toArray()
    ).filter((todo) => {
      return todo.isDone && !isToday(todo.doneDate);
    }) as TodoBack[];
  }

  async findExistedToday() {
    return (await flowaDb.todo
      .filter((todo: TodoBack) => {
        const { isToday } = todo;
        if (isToday) return true;
        return false;
      })
      .toArray()) as TodoBack[];
  }

  async findByCateId(cateId: number) {
    return (await flowaDb.todo
      .where({ cateId })
      .toArray()) as TodoBack[];
  }

  async findByCateIdAndIsDone(cateId: number) {
    return (
      await flowaDb.todo.where({ cateId }).toArray()
    ).filter((todo) => {
      return todo.isDone && !isToday(todo.doneDate);
    }) as TodoBack[];
  }

  async delete(id: number) {
    await flowaDb.todo.delete(id);
  }

  async get(id: number) {
    return await flowaDb.todo.get(id);
  }
}

export default TodoRepository;
