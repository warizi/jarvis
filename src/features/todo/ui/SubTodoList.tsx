/** @jsxImportSource @emotion/react */

import { TodoSub } from "@entities/todo/model/type";
import SubTodoItem from "./SubTodoItem";

function SubTodoList({
  data,
  onUpdate,
  onDelete,
}: {
  data: TodoSub[];
  onUpdate: (index: number, data: TodoSub) => void;
  onDelete: (index: number) => void;
}) {
  return (
    <div>
      {data?.map((subTodo, index) => (
        <SubTodoItem
          key={index}
          data={subTodo}
          index={index}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default SubTodoList;
