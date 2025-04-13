import {
  NoteBackDto,
  NoteCreateBackDto,
} from "../dto/NoteBackDto";
import {
  NoteBack,
  NoteCreateBack,
} from "../entities/NoteBack";
import NoteLabelRepository from "../repository/NoteLabelRepository";
import NoteRepository from "../repository/NoteRepository";

class NoteBackService {
  noteRepository: NoteRepository = new NoteRepository();
  noteLabelRepository: NoteLabelRepository =
    new NoteLabelRepository();

  async getAll() {
    const noteLabels =
      await this.noteLabelRepository.getAll();
    return (await this.noteRepository.getAll())
      .map((note) => {
        const labelId = note?.labelId;
        delete note.labelId;

        if (!labelId) return note;
        const noteLabel = noteLabels.find(
          (label) => label.id === labelId
        );
        if (!noteLabel) return note;
        const newNote = { ...note, label: noteLabel };
        delete newNote.labelId;
        return newNote;
      })
      .sort((a, b) => a.order - b.order);
  }

  async findByCateId(cateId: number) {
    const noteLabels =
      await this.noteLabelRepository.getAll();
    return (await this.noteRepository.findByCateId(cateId))
      .map((note) => {
        const labelId = note?.labelId;
        delete note.labelId;

        if (!labelId) return note;
        const noteLabel = noteLabels.find(
          (label) => label.id === labelId
        );
        if (!noteLabel) return note;
        const newNote = { ...note, label: noteLabel };
        delete newNote.labelId;
        return newNote;
      })
      .sort((a, b) => a.order - b.order);
  }

  async save(data: NoteBackDto | NoteCreateBackDto) {
    if ("id" in data) {
      const labelId = data.label?.id;
      const noteBack = data as NoteBack;
      if (labelId) {
        noteBack.labelId = labelId;
      } else {
        noteBack.labelId = undefined;
      }
      delete data.label;
      return await this.noteRepository.save(noteBack);
    } else {
      const allData = (
        await this.noteRepository.getAll()
      ).sort((a, b) => a.order - b.order);
      const order =
        allData.length > 0
          ? allData[allData.length - 1].order + 1000
          : 1000;
      const labelId = data.label?.id;
      const noteBack = data as NoteCreateBack;
      noteBack.order = order;
      if (labelId) {
        noteBack.labelId = labelId;
      }
      delete data.label;
      return await this.noteRepository.save(noteBack);
    }
  }

  async findByImportant() {
    const noteLabels =
      await this.noteLabelRepository.getAll();
    return (await this.noteRepository.findByImportant())
      .map((note) => {
        const labelId = note?.labelId;
        delete note.labelId;

        if (!labelId) return note;
        const noteLabel = noteLabels.find(
          (label) => label.id === labelId
        );
        if (!noteLabel) return note;
        const newNote = { ...note, label: noteLabel };
        delete newNote.labelId;
        return newNote;
      })
      .sort((a, b) => a.order - b.order);
  }

  async get(id: number) {
    const note = await this.noteRepository.get(id);
    const labelId = note?.labelId;

    if (note && "labelId" in note) {
      delete note.labelId;
    }

    if (!labelId) return note;
    const noteLabel = await this.noteLabelRepository.get(
      labelId
    );
    if (!noteLabel) return note;
    const newNote = { ...note, label: noteLabel };
    delete newNote.labelId;
    return newNote;
  }

  async delete(id: number) {
    await this.noteRepository.delete(id);
  }

  async findRecentByUpdatedAt(count: number) {
    const noteLabels =
      await this.noteLabelRepository.getAll();
    return (
      await this.noteRepository.findRecentByUpdatedAt(count)
    )
      .map((note) => {
        const labelId = note?.labelId;
        delete note.labelId;

        if (!labelId) return note;
        const noteLabel = noteLabels.find(
          (label) => label.id === labelId
        );
        if (!noteLabel) return note;
        const newNote = { ...note, label: noteLabel };
        delete newNote.labelId;
        return newNote;
      })
      .sort((a, b) => a.order - b.order);
  }
}

export default NoteBackService;
