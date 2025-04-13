import { flowaDb } from "@backend/config/dbConfig/indexedDbConfig";
import {
  NoteBack,
  NoteCreateBack,
} from "../entities/NoteBack";

class NoteRepository {
  async getAll() {
    return (await flowaDb.note.toArray()) as NoteBack[];
  }

  async save(data: NoteBack | NoteCreateBack) {
    const convertedData = {
      ...data,
      isImportant: data.isImportant ? 1 : 0, // boolean → number 변환
    };
    if ("id" in convertedData) {
      convertedData.updatedAt = new Date().toISOString();
      await flowaDb.note.update(
        convertedData.id,
        convertedData
      );
    } else {
      convertedData.createdAt = new Date().toISOString();
      convertedData.updatedAt = new Date().toISOString();
      await flowaDb.note.add(convertedData);
    }

    return data;
  }

  async findByImportant() {
    return (await flowaDb.note
      .where("isImportant")
      .equals(1) // Assuming 'true' is stored as 1 in the database
      .toArray()) as NoteBack[];
  }

  async findByCateId(cateId: number) {
    return (await flowaDb.note
      .where("cateId")
      .equals(cateId)
      .toArray()) as NoteBack[];
  }

  async findByLabelId(labelId: number) {
    return (await flowaDb.note
      .where("labelId")
      .equals(labelId)
      .toArray()) as NoteBack[];
  }

  async delete(id: number) {
    await flowaDb.note.delete(id);
  }

  async deleteByCateId(cateId: number) {
    await flowaDb.note
      .where("cateId")
      .equals(cateId)
      .delete();
  }

  async get(id: number) {
    return await flowaDb.note.get(id);
  }
}

export default NoteRepository;
