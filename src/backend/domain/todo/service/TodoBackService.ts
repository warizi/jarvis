import {
  TodoBack,
  TodoCreateBack,
} from "../entities/TodoBack";
import TodoRepository from "../repository/TodoRepository";

class TodoBackService {
  todoRepository: TodoRepository = new TodoRepository();

  async getAll() {
    return await this.todoRepository.getAll();
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

  async delete(id: number) {
    return await this.todoRepository.delete(id);
  }

  async get(id: number) {
    return (await this.todoRepository.get(id)) as TodoBack;
  }
}

export default TodoBackService;
