import { Todo } from "@entities/todo/model/type";
import useTodoPageFilterStore from "./useTodoPageFilterStore";
import { Id } from "@shared/config/type/commonType";

export const useTodoFilter = () => {
  const { filter, setFilter, resetFilter } =
    useTodoPageFilterStore();

  const getFilteredTodoList = (todoList: (Todo & Id)[]) => {
    let result = todoList;

    if (filter?.label) {
      result = result.filter(
        (todo) => todo.label?.id === filter.label?.id
      );
    }

    if (filter?.text) {
      result = result.filter((todo) => {
        const { title } = todo;
        const searchText = title
          .replace(/\s+/g, "")
          .toLowerCase();
        const filterText =
          filter?.text?.replace(/\s+/g, "").toLowerCase() ??
          "";
        return searchText.includes(filterText);
      });
    }

    return result;
  };

  return {
    filter,
    getFilteredTodoList,
    setFilter,
    resetFilter,
  };
};
