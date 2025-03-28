import {
  NoteCateBack,
  NoteCateCreateBack,
} from "../entities/NoteCateBack";
import NoteCateRepository from "../repository/NoteCateRepository";

class NoteCateBackService {
  noteCateRepository: NoteCateRepository =
    new NoteCateRepository();

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
    return await this.noteCateRepository.delete(id);
  }

  async get(id: number) {
    return (await this.noteCateRepository.get(
      id
    )) as NoteCateBack;
  }
}

export default NoteCateBackService;
