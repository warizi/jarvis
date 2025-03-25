/** @jsxImportSource @emotion/react */

import { TodoSub } from "@entities/todo/model/type";
import { TodoCheckbox } from "@shared/components/form";
import { subTodoItemStyles } from "./SubTodoItem.style";
import { TrashIcon } from "@shared/components/icon";

function SubTodoItem({
  data,
  onUpdate,
  onDelete,
  index,
}: {
  data: TodoSub;
  onUpdate: (index: number, data: TodoSub) => void;
  onDelete: (index: number) => void;
  index: number;
}) {
  const { container, input, button } = subTodoItemStyles;

  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onUpdate(index, { ...data, isDone: e.target.checked });
  };

  return (
    <div css={container}>
      <TodoCheckbox
        checked={data.isDone}
        onChange={(e) => {
          handleCheck(e);
        }}
      />
      <input
        type="text"
        value={data.text}
        css={input}
        onChange={(e) => {
          onUpdate(index, {
            ...data,
            text: e.target.value,
          });
        }}
      />
      <button
        css={button}
        onClick={() => {
          onDelete(index);
        }}
      >
        <TrashIcon size={20} />
      </button>
    </div>
  );
}

export default SubTodoItem;
