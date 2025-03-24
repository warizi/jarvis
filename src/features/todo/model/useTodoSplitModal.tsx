import { useSplitModalStore } from "@shared/components/splitModal";
import TodoForm from "../ui/TodoForm";
import { Todo } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { useDeleteTodoMutation } from "@entities/todo";

export const useTodoSplitModal = () => {
  const open = useSplitModalStore((state) => state.open);

  const { mutate } = useDeleteTodoMutation();

  const handleDelete = (id: number) => async () => {
    await mutate(id);
  };

  const openTodoSplitModal = (data: Todo & Id) => () => {
    const { title } = data;
    open({
      title: `TODO > ${title}`,
      content: <TodoForm data={data} />,
      onDelete: handleDelete(data.id),
    });
  };

  return { openTodoSplitModal };
};
