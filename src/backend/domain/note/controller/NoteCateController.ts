import { NoteCateCreateBack } from "../entities/NoteCateBack";
import NoteCateBackService from "../service/NoteCateBackService";

class NoteCateController {
  private static instance: NoteCateController;
  private noteCateService: NoteCateBackService;

  private constructor() {
    this.noteCateService = new NoteCateBackService();
  }

  public static getInstance(): NoteCateController {
    if (!NoteCateController.instance) {
      NoteCateController.instance =
        new NoteCateController();
    }
    return NoteCateController.instance;
  }

  public async getAll() {
    const data = await this.noteCateService.getAll();

    return data;
  }

  public async create(data: NoteCateCreateBack) {
    const result = await this.noteCateService.save(data);

    return result;
  }

  public async update(data: NoteCateCreateBack) {
    const result = await this.noteCateService.save(data);

    return result;
  }

  public async delete(id: number) {
    await this.noteCateService.delete(id);
  }

  public async get(id: number) {
    const data = await this.noteCateService.get(id);

    return data;
  }
}

export default NoteCateController;
