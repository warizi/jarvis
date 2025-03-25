import { useUpdateTodoMutation } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { isToday } from "@shared/lib/isToday";

export const useTodoCheckBox = () => {
  const { mutate } = useUpdateTodoMutation();

  const handleCheck =
    (todo: Todo & Id) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const date = new Date();
      const sub = JSON.parse(todo.sub || "[]");
      todo.isDone = event.target.checked;
      todo.doneDate = todo.isDone
        ? date.toISOString()
        : null;
      if (event.target.checked === false) {
        const isSubDone = sub.every(
          (todo: Todo) => todo.isDone
        );
        if (isSubDone) {
          sub.forEach((todo: Todo & Id) => {
            todo.isDone = false;
          });
          todo.sub = JSON.stringify(sub);
        }
      }
      mutate(todo);
    };

  const handleImportant = (todo: Todo & Id) => {
    if (todo.isImportant === 0) {
      todo.isImportant = 1;
    } else {
      todo.isImportant = 0;
    }
    mutate(todo);
  };

  const handleToday = (todo: Todo & Id) => {
    if (isToday(todo.isToday)) {
      todo.isToday = undefined;
    } else {
      const date = new Date();
      todo.isToday = date.toISOString();
    }
    mutate(todo);
  };

  return { handleCheck, handleImportant, handleToday };
};
