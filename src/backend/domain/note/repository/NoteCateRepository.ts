import { flowaDb } from "@backend/config/dbConfig/indexedDbConfig";
import {
  NoteCateBack,
  NoteCateCreateBack,
} from "../entities/NoteCateBack";

class NoteCateRepository {
  async getAll() {
    return (await flowaDb.noteCate.toArray()) as NoteCateBack[];
  }

  async save(data: NoteCateBack | NoteCateCreateBack) {
    if ("id" in data) {
      await flowaDb.noteCate.update(data.id, data);
    } else {
      await flowaDb.noteCate.add(data);
    }

    return data;
  }

  async delete(id: number) {
    await flowaDb.noteCate.delete(id);
  }

  async get(id: number) {
    return await flowaDb.noteCate.get(id);
  }
}

export default NoteCateRepository;
