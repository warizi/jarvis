import {
  NoteBackDto,
  NoteCreateBackDto,
} from "../dto/NoteBackDto";
import NoteBackService from "../service/NoteBackService";

class NoteController {
  private static instance: NoteController;
  private noteService: NoteBackService;

  private constructor() {
    this.noteService = new NoteBackService();
  }

  public static getInstance(): NoteController {
    if (!NoteController.instance) {
      NoteController.instance = new NoteController();
    }
    return NoteController.instance;
  }

  public async getAll() {
    const data = await this.noteService.getAll();

    return data;
  }

  public async getAllByCateId(cateId: number) {
    const data = await this.noteService.findByCateId(
      cateId
    );

    return data;
  }

  public async getAllByImportant() {
    const data = await this.noteService.findByImportant();

    return data;
  }

  public async update(data: NoteBackDto) {
    const updatedData = await this.noteService.save(data);

    return updatedData;
  }

  public async delete(id: number) {
    await this.noteService.delete(id);
  }

  public async create(data: NoteCreateBackDto) {
    const createdData = await this.noteService.save(data);

    return createdData;
  }

  public async get(id: number) {
    const data = await this.noteService.get(id);

    return data;
  }
}

export default NoteController;
