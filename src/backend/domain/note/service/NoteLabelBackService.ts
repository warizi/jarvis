import {
  NoteLabelBack,
  NoteLabelCreateBack,
} from "../entities/NoteLabelBack";
import NoteLabelRepository from "../repository/NoteLabelRepository";

class NoteLabelBackService {
  noteLabelRepository: NoteLabelRepository =
    new NoteLabelRepository();

  async getAll() {
    return (await this.noteLabelRepository.getAll()).sort(
      (a, b) => a.order - b.order
    );
  }

  async save(data: NoteLabelBack | NoteLabelCreateBack) {
    if ("id" in data) {
      return await this.noteLabelRepository.save(data);
    } else {
      const allData = (
        await this.noteLabelRepository.getAll()
      ).sort((a, b) => a.order - b.order);
      const order =
        allData.length > 0
          ? allData[allData.length - 1].order + 1000
          : 1000;
      data.order = order;
      return await this.noteLabelRepository.save(data);
    }
  }

  async delete(id: number) {
    return await this.noteLabelRepository.delete(id);
  }

  async get(id: number) {
    return (await this.noteLabelRepository.get(
      id
    )) as NoteLabelBack;
  }
}

export default NoteLabelBackService;
