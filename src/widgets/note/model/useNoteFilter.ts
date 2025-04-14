import { Id } from "@shared/config/type/commonType";
import useNotePageFilterStore from "./useNotePageFilterStore";
import { Note } from "@entities/note/model/type";

export const useNoteFilter = () => {
  const { filter, setFilter, resetFilter } =
    useNotePageFilterStore();

  const getFilteredNoteList = (noteList: (Note & Id)[]) => {
    let filtered = noteList;

    if (filter?.label) {
      filtered = filtered?.filter(
        (note) => note.label?.id === filter.label?.id
      );
    }

    if (filter?.text) {
      const filterText = filter.text
        .replace(/\s+/g, "")
        .toLowerCase();
      filtered = filtered?.filter((note) => {
        const searchText = note.title
          .replace(/\s+/g, "")
          .toLowerCase();
        return searchText.includes(filterText);
      });
    }

    return filtered;
  };
  return {
    filter,
    getFilteredNoteList,
    setFilter,
    resetFilter,
  };
};
