/** @jsxImportSource @emotion/react */

import { TodoCateItem } from "@entities/todo";
import { useGetAllTodoCateQuery } from "@entities/todo/model/todoCateFetchHooks";
import { TodoCate } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { todoCateListStyle } from "./TodoCateList.style";
import { useTodoCateList } from "../model/useTodoCateList";

function TodoCateList() {
  const { data } = useGetAllTodoCateQuery();
  const { ul } = todoCateListStyle;
  const isCurrentLink = useTodoCateList();

  return (
    <ul css={ul}>
      {data?.map((todo: TodoCate & Id) => (
        <TodoCateItem
          key={todo.id}
          data={todo}
          isActive={isCurrentLink(todo)}
        />
      ))}
    </ul>
  );
}

export default TodoCateList;
