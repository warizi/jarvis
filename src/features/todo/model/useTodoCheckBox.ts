import { useUpdateTodoMutation } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";

export const useTodoCheckBox = () => {
  const { mutate } = useUpdateTodoMutation();

  const handleCheck =
    (todo: Todo & Id) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const date = new Date();
      todo.isDone = event.target.checked;
      todo.doneDate = todo.isDone
        ? date.toISOString()
        : null;
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

  return { handleCheck, handleImportant };
};
