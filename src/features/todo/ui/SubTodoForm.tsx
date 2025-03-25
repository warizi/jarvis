/** @jsxImportSource @emotion/react */

import { TodoSub } from "@entities/todo/model/type";
import { useEffect, useState } from "react";
import SubTodoList from "./SubTodoList";
import { OneLineTextForm } from "@shared/components/form";
import { useForm } from "react-hook-form";

function SubTodoForm({
  data,
  onChange,
}: {
  data: string;
  onChange?: (data: string) => void;
}) {
  const [subTodoList, setSubTodoList] = useState<TodoSub[]>(
    JSON.parse(data) || []
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      text: "",
      isDone: false,
    },
  });

  const onSubmit = handleSubmit((data: TodoSub) => {
    const json = JSON.stringify(subTodoList);
    const prev = JSON.parse(json);
    const updateData = [...prev, data];
    setSubTodoList(updateData);
    reset();
  });

  const deleteSubTodo = (index: number) => {
    const json = JSON.stringify(subTodoList);
    const prev = JSON.parse(json);
    const updateData = prev.filter(
      (_: TodoSub, i: number) => i !== index
    );
    setSubTodoList(updateData);
  };

  const updateSubTodo = (index: number, data: TodoSub) => {
    const json = JSON.stringify(subTodoList);
    const prev = JSON.parse(json);
    const updateData = prev.map(
      (item: TodoSub, i: number) => {
        if (i === index) {
          return data;
        }
        return item;
      }
    );
    setSubTodoList(updateData);
  };

  useEffect(() => {
    if (data === JSON.stringify(subTodoList) || !onChange)
      return;

    onChange(JSON.stringify(subTodoList));
  }, [subTodoList, data, onChange]);

  return (
    <div>
      <SubTodoList
        data={subTodoList}
        onDelete={deleteSubTodo}
        onUpdate={updateSubTodo}
      />
      <OneLineTextForm
        label="sub todo"
        size="sm"
        {...register("text")}
        placeholder="세부 할 일을 입력하세요"
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default SubTodoForm;
