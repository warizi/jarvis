import {
  TodoBack,
  TodoCreateBack,
} from "../entities/TodoBack";
import TodoBackService from "../service/TodoBackService";

class TodoController {
  private static instance: TodoController;
  private todoService: TodoBackService;

  private constructor() {
    this.todoService = new TodoBackService();
  }

  public static getInstance(): TodoController {
    if (!TodoController.instance) {
      TodoController.instance = new TodoController();
    }
    return TodoController.instance;
  }

  public async getAll() {
    const data = await this.todoService.getAll();

    return data;
  }

  public async getAllByCateId(cateId: number) {
    const data = await this.todoService.findByCateId(
      cateId
    );

    return data;
  }

  public async updateDone(id: number, done: boolean) {
    const result = await this.todoService.updateDone(
      id,
      done
    );

    return result;
  }

  public async create(data: TodoCreateBack) {
    const result = await this.todoService.save(data);

    return result;
  }

  public async update(data: TodoBack) {
    const result = await this.todoService.save(data);

    return result;
  }

  public async delete(id: number) {
    await this.todoService.delete(id);
  }

  public async get(id: number) {
    const data = await this.todoService.get(id);

    return data;
  }
}

export default TodoController;
