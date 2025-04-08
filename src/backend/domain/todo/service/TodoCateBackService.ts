import {
  TodoCateBack,
  TodoCateCreateBack,
} from "../entities/TodoCateBack";
import TodoCateRepository from "../repository/TodoCateRepository";
import TodoBackService from "./TodoBackService";

class TodoCateBackService {
  todoCateRepository: TodoCateRepository =
    new TodoCateRepository();
  todoBackService: TodoBackService = new TodoBackService();

  async getAll() {
    return (await this.todoCateRepository.getAll()).sort(
      (a, b) => a.order - b.order
    );
  }

  async save(data: TodoCateBack | TodoCateCreateBack) {
    if ("id" in data) {
      return await this.todoCateRepository.save(data);
    } else {
      const allData = (
        await this.todoCateRepository.getAll()
      ).sort((a, b) => a.order - b.order);
      const order =
        allData.length > 0
          ? allData[allData.length - 1].order + 1000
          : 1000;
      data.order = order;
      return await this.todoCateRepository.save(data);
    }
  }

  async delete(id: number) {
    const todoListByCateId =
      await this.todoBackService.findByCateId(id);
    // 하위 todo가 있는 경우 삭제
    if (todoListByCateId.length > 0) {
      for (const todo of todoListByCateId) {
        await this.todoBackService.delete(todo.id);
      }
    }

    return await this.todoCateRepository.delete(id);
  }

  async get(id: number) {
    return (await this.todoCateRepository.get(
      id
    )) as TodoCateBack;
  }
}

export default TodoCateBackService;
