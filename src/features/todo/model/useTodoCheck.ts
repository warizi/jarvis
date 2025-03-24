import { useUpdateTodoMutation } from "@entities/todo";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";

export const useTodoCheck = () => {
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

  return { handleCheck };
};
