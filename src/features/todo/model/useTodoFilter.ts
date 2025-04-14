import { Todo } from "@entities/todo/model/type";
import useTodoPageFilterStore from "./useTodoPageFilterStore";
import { Id } from "@shared/config/type/commonType";

export const useTodoFilter = () => {
  const { filter, setFilter, resetFilter } =
    useTodoPageFilterStore();
  const getFilteredTodoList = (todoList: (Todo & Id)[]) => {
    let filtered = todoList;

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
    getFilteredTodoList,
    setFilter,
    resetFilter,
  };
};
