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

  public async getCountAll() {
    const data = (await this.todoService.getAll()).filter(
      (todo) => !todo.isDone
    );

    return data.length;
  }

  public async getAllByIsDone() {
    const data = await this.todoService.getAllByIsDone();

    return data;
  }

  public async getAllByCateId(cateId: number) {
    const data = await this.todoService.findByCateId(
      cateId
    );

    return data;
  }
  public async getCountAllByCateId(cateId: number) {
    const data = (
      await this.todoService.findByCateId(cateId)
    ).filter((todo) => !todo.isDone);

    return data.length;
  }

  public async getAllByCateIdAndIsDone(cateId: number) {
    const data =
      await this.todoService.findByCateIdAndIsDone(cateId);

    return data;
  }

  public async getAllByImportant() {
    const data = await this.todoService.findByImportant();

    return data;
  }

  public async getCountAllByImportant() {
    const data = (
      await this.todoService.findByImportant()
    ).filter((todo) => !todo.isDone);

    return data.length;
  }

  public async getAllByImportantAndIsDone() {
    const data =
      await this.todoService.findByImportantAndIsDone();

    return data;
  }

  public async getAllByIsToday() {
    const data = await this.todoService.findByIsToday();
    return data;
  }

  public async getAllTodayByStartDateAndEndDate() {
    const data =
      await this.todoService.findTodayByStartDateAndEndDate();
    return data;
  }

  public async getCountAllByIsToday() {
    const data = (
      await this.todoService.findByIsToday()
    ).filter((todo) => !todo.isDone);

    const todayData = (
      await this.todoService.findTodayByStartDateAndEndDate()
    ).filter((todo) => !todo.isDone);

    return data.length + todayData.length;
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
