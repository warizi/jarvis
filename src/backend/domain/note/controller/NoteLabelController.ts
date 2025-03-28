import {
  NoteLabelBack,
  NoteLabelCreateBack,
} from "../entities/NoteLabelBack";
import NoteLabelBackService from "../service/NoteLabelBackService";

class NoteLabelController {
  private static instance: NoteLabelController;
  private noteLabelService: NoteLabelBackService;

  private constructor() {
    this.noteLabelService = new NoteLabelBackService();
  }

  public static getInstance(): NoteLabelController {
    if (!NoteLabelController.instance) {
      NoteLabelController.instance =
        new NoteLabelController();
    }
    return NoteLabelController.instance;
  }

  public async getAll() {
    const data = await this.noteLabelService.getAll();

    return data;
  }

  public async create(label: NoteLabelCreateBack) {
    const data = await this.noteLabelService.save(label);

    return data;
  }

  public async update(label: NoteLabelBack) {
    const data = await this.noteLabelService.save(label);

    return data;
  }

  public async delete(id: number) {
    const data = await this.noteLabelService.delete(id);

    return data;
  }

  public async get(id: number) {
    const data = await this.noteLabelService.get(id);

    return data;
  }
}

export default NoteLabelController;
