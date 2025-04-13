import { useUpdateTodoMutation } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { isToday } from "@shared/lib/isToday";
import moment from "moment";

export const useTodoCheckBox = () => {
  const { mutate } = useUpdateTodoMutation();

  const handleCheck =
    (todo: Todo & Id) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const dateString = moment().tz("Asia/Seoul").format();
      const sub = JSON.parse(todo.sub || "[]");
      todo.isDone = event.target.checked;
      todo.doneDate = todo.isDone ? dateString : null;
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
      const dateString = moment().tz("Asia/Seoul").format();
      todo.isToday = dateString;
    }
    mutate(todo);
  };

  return { handleCheck, handleImportant, handleToday };
};
