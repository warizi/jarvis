import {
  TodoCateBack,
  TodoCateCreateBack,
} from "../entities/TodoCateBack";
import TodoCateBackService from "../service/TodoCateBackService";

class TodoCateController {
  private static instance: TodoCateController;
  private todoCateService: TodoCateBackService;

  private constructor() {
    this.todoCateService = new TodoCateBackService();
  }

  public static getInstance(): TodoCateController {
    if (!TodoCateController.instance) {
      TodoCateController.instance =
        new TodoCateController();
    }
    return TodoCateController.instance;
  }

  public async getAll() {
    const data = await this.todoCateService.getAll();

    return data;
  }

  public async create(data: TodoCateCreateBack) {
    const result = await this.todoCateService.save(data);

    return result;
  }

  public async update(data: TodoCateBack) {
    const result = await this.todoCateService.save(data);

    return result;
  }

  public async delete(id: number) {
    await this.todoCateService.delete(id);
  }

  public async get(id: number) {
    const data = await this.todoCateService.get(id);

    return data;
  }
}

export default TodoCateController;
