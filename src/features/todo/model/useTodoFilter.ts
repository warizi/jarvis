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
        (todo) => todo.label?.id === filter.label?.id
      );
    }

    if (filter?.text) {
      const filterText = filter.text
        .replace(/\s+/g, "")
        .toLowerCase();
      filtered = filtered?.filter((todo) => {
        const searchText = todo.title
          .replace(/\s+/g, "")
          .toLowerCase();
        return searchText.includes(filterText);
      });
    }

    if (filter?.period && filter?.period?.length > 0) {
      const startDate = filter.period[0];
      const endDate = filter.period[1];
      filtered = filtered?.filter((todo) => {
        if (!todo.startDate) {
          return false;
        }

        if (startDate && endDate) {
          return isDateInRange(
            new Date(todo.startDate),
            startDate,
            endDate
          );
        }
        if (startDate) {
          return isDateInRange(
            new Date(todo.startDate),
            startDate
          );
        }
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

function isDateInRange(
  date: Date,
  startDate: Date,
  endDate?: Date
) {
  const d = toDateOnly(date);
  const s = toDateOnly(startDate);
  const e = endDate ? toDateOnly(endDate) : undefined;

  if (e) {
    return d >= s && d <= e;
  }
  return d.getTime() === s.getTime();
}

// 날짜만 비교할 수 있도록 시, 분, 초 제거
function toDateOnly(date: Date): Date {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
}
