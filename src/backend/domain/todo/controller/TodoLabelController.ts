import {
  TodoLabelBack,
  TodoLabelCreateBack,
} from "../entities/TodoLabelBack";
import TodoLabelBackService from "../service/TodoLabelService";

class TodoLabelController {
  private static instance: TodoLabelController;
  private todoLabelService: TodoLabelBackService;

  private constructor() {
    this.todoLabelService = new TodoLabelBackService();
  }

  public static getInstance(): TodoLabelController {
    if (!TodoLabelController.instance) {
      TodoLabelController.instance =
        new TodoLabelController();
    }
    return TodoLabelController.instance;
  }

  public async getAll() {
    const data = await this.todoLabelService.getAll();

    return data;
  }

  public async create(label: TodoLabelCreateBack) {
    const data = await this.todoLabelService.save(label);

    return data;
  }

  public async update(label: TodoLabelBack) {
    const data = await this.todoLabelService.save(label);

    return data;
  }

  public async delete(id: number) {
    const data = await this.todoLabelService.delete(id);

    return data;
  }

  public async get(id: number) {
    const data = await this.todoLabelService.get(id);

    return data;
  }
}

export default TodoLabelController;
