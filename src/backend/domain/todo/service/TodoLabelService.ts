import {
  TodoLabelBack,
  TodoLabelCreateBack,
} from "../entities/TodoLabelBack";
import TodoLabelRepository from "../repository/TodoLabelRepository";

class TodoLabelBackService {
  todoLabelRepository: TodoLabelRepository =
    new TodoLabelRepository();

  async getAll() {
    return (await this.todoLabelRepository.getAll()).sort(
      (a, b) => a.order - b.order
    );
  }

  async save(data: TodoLabelBack | TodoLabelCreateBack) {
    if ("id" in data) {
      return await this.todoLabelRepository.save(data);
    } else {
      const allData = (
        await this.todoLabelRepository.getAll()
      ).sort((a, b) => a.order - b.order);
      const order =
        allData.length > 0
          ? allData[allData.length - 1].order + 1000
          : 1000;
      data.order = order;
      return await this.todoLabelRepository.save(data);
    }
  }

  async delete(id: number) {
    return await this.todoLabelRepository.delete(id);
  }

  async get(id: number) {
    return (await this.todoLabelRepository.get(
      id
    )) as TodoLabelBack;
  }
}

export default TodoLabelBackService;
