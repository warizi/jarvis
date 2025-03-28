import { flowaDb } from "@backend/config/dbConfig/indexedDbConfig";
import {
  NoteLabelBack,
  NoteLabelCreateBack,
} from "../entities/NoteLabelBack";

class NoteLabelRepository {
  async getAll() {
    return (await flowaDb.noteLabel.toArray()) as NoteLabelBack[];
  }

  async save(data: NoteLabelBack | NoteLabelCreateBack) {
    if ("id" in data) {
      await flowaDb.noteLabel.update(data.id, data);
    } else {
      await flowaDb.noteLabel.add(data);
    }

    return data;
  }

  async delete(id: number) {
    await flowaDb.noteLabel.delete(id);
  }

  async get(id: number) {
    return await flowaDb.noteLabel.get(id);
  }
}

export default NoteLabelRepository;
