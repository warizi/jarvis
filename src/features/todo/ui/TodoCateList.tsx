/** @jsxImportSource @emotion/react */

import { TodoCateItem } from "@entities/todo";
import { useGetAllTodoCateQuery } from "@entities/todo/model/todoCateFetchHooks";
import { TodoCate } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { todoCateListStyle } from "./TodoCateList.style";
import { useTodoCateList } from "../model/useTodoCateList";

function TodoCateList() {
  const { data } = useGetAllTodoCateQuery();
  const { ul, h3, container } = todoCateListStyle;
  const isCurrentLink = useTodoCateList();

  return (
    <div css={container}>
      <h3 css={h3}>목록</h3>
      <ul css={ul}>
        {data?.map((todo: TodoCate & Id) => (
          <TodoCateItem
            key={todo.id}
            data={todo}
            isActive={isCurrentLink(todo)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoCateList;
