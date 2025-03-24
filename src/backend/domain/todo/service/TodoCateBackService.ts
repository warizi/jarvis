import {
  TodoCateBack,
  TodoCateCreateBack,
} from "../entities/TodoCateBack";
import TodoCateRepository from "../repository/TodoCateRepository";

class TodoCateBackService {
  todoCateRepository: TodoCateRepository =
    new TodoCateRepository();

  async getAll() {
    return (await this.todoCateRepository.getAll()).sort(
      (a, b) => a.order - b.order
    );
  }

  async save(data: TodoCateBack | TodoCateCreateBack) {
    if ("id" in data) {
      return await this.todoCateRepository.save(data);
    } else {
      const allData =
        await this.todoCateRepository.getAll();
      const order =
        allData.length > 0
          ? allData[allData.length - 1].order + 1000
          : 1000;
      data.order = order;
      return await this.todoCateRepository.save(data);
    }
  }

  async delete(id: number) {
    return await this.todoCateRepository.delete(id);
  }

  async get(id: number) {
    return (await this.todoCateRepository.get(
      id
    )) as TodoCateBack;
  }
}

export default TodoCateBackService;
