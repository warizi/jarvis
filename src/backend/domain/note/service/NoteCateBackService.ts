import {
  NoteCateBack,
  NoteCateCreateBack,
} from "../entities/NoteCateBack";
import NoteCateRepository from "../repository/NoteCateRepository";
import NoteBackService from "./NoteBackService";

class NoteCateBackService {
  noteCateRepository: NoteCateRepository =
    new NoteCateRepository();
  noteBackService: NoteBackService = new NoteBackService();

  async getAll() {
    return (await this.noteCateRepository.getAll()).sort(
      (a, b) => a.order - b.order
    );
  }

  async save(data: NoteCateBack | NoteCateCreateBack) {
    if ("id" in data) {
      return await this.noteCateRepository.save(data);
    } else {
      const allData =
        await this.noteCateRepository.getAll();
      const order =
        allData.length > 0
          ? allData[allData.length - 1].order + 1000
          : 1000;
      data.order = order;
      return await this.noteCateRepository.save(data);
    }
  }

  async delete(id: number) {
    const noteListByCateId =
      await this.noteBackService.findByCateId(id);
    // 하위 note가 있는 경우 삭제
    if (noteListByCateId.length > 0) {
      for (const note of noteListByCateId) {
        await this.noteBackService.delete(note.id);
      }
    }
    // 카테고리 삭제
    return await this.noteCateRepository.delete(id);
  }

  async get(id: number) {
    return (await this.noteCateRepository.get(
      id
    )) as NoteCateBack;
  }
}

export default NoteCateBackService;
