import { Id } from "@shared/config/type/commonType";
import useNotePageFilterStore from "./useNotePageFilterStore";
import { Note } from "@entities/note/model/type";

export const useNoteFilter = () => {
  const { filter, setFilter, resetFilter } =
    useNotePageFilterStore();

  const getFilteredNoteList = (noteList: (Note & Id)[]) => {
    let result = noteList;

    if (filter?.label) {
      result = result?.filter(
        (note) => note.label?.id === filter.label?.id
      );
    }

    if (filter?.text) {
      result = result?.filter((note) => {
        const { title } = note;
        const searchText = title
          .replace(/\s+/g, "")
          .toLowerCase();
        const filterText =
          filter?.text?.replace(/\s+/g, "").toLowerCase() ??
          "";
        return searchText.includes(filterText);
      });
    }

    return result || [];
  };
  return {
    filter,
    getFilteredNoteList,
    setFilter,
    resetFilter,
  };
};
