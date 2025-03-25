import { formatDate } from "@backend/common/utils/formatDate";
import {
  TodoBack,
  TodoCreateBack,
} from "../entities/TodoBack";
import TodoRepository from "../repository/TodoRepository";
import { isToday } from "@backend/common/utils/isToday";

class TodoBackService {
  todoRepository: TodoRepository = new TodoRepository();

  async getAll() {
    return (await this.todoRepository.getAll()).sort(
      (a, b) => a.order - b.order
    );
  }

  async findByCateId(cateId: number) {
    return (await this.todoRepository.findByCateId(cateId))
      .filter((todo: TodoBack) => {
        const { doneDate } = todo;
        if (!doneDate) {
          return true;
        }
        if (
          formatDate(doneDate, "yyyy-MM-dd") ===
          formatDate(new Date(), "yyyy-MM-dd")
        ) {
          return true;
        }

        return false;
      })
      .sort((a, b) => a.order - b.order);
  }

  async findByCateIdAndIsDone(cateId: number) {
    return (
      await this.todoRepository.findByCateIdAndIsDone(
        cateId
      )
    ).sort((a, b) => a.order - b.order);
  }

  async findByIsToday() {
    return (await this.todoRepository.findExistedToday())
      .filter((todo: TodoBack) => {
        const { doneDate, isToday: today } = todo;
        if (!isToday(today)) return false;
        if (!doneDate) return true;
        if (
          formatDate(doneDate, "yyyy-MM-dd") ===
          formatDate(new Date(), "yyyy-MM-dd")
        ) {
          return true;
        }

        return false;
      })
      .sort((a, b) => a.order - b.order);
  }

  async save(data: TodoBack | TodoCreateBack) {
    if ("id" in data) {
      return await this.todoRepository.save(data);
    } else {
      const allData = await this.todoRepository.getAll();
      const order =
        allData.length > 0
          ? allData[allData.length - 1].order + 1000
          : 1000;
      data.order = order;
      return await this.todoRepository.save(data);
    }
  }

  async findByImportant() {
    return (await this.todoRepository.findByImportant())
      .filter((todo: TodoBack) => {
        const { doneDate } = todo;
        if (doneDate === null || doneDate === undefined) {
          return true;
        }
        if (
          formatDate(doneDate, "yyyy-mm-dd") ===
          formatDate(new Date(), "yyyy-mm-dd")
        ) {
          return true;
        }

        return false;
      })
      .sort((a, b) => a.order - b.order);
  }

  async findByImportantAndIsDone() {
    return (
      await this.todoRepository.findByImportantAndIsDone()
    ).sort((a, b) => a.order - b.order);
  }

  async updateDone(id: number, done: boolean) {
    const todo = (await this.todoRepository.get(
      id
    )) as TodoBack;

    todo.isDone = done;

    return await this.todoRepository.save(todo);
  }

  async delete(id: number) {
    return await this.todoRepository.delete(id);
  }

  async get(id: number) {
    return (await this.todoRepository.get(id)) as TodoBack;
  }
}

export default TodoBackService;
