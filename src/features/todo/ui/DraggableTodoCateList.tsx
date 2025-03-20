/** @jsxImportSource @emotion/react */

import {
  useGetAllTodoCateQuery,
  useUpdateTodoCateMutation,
} from "@entities/todo/model/todoCateFetchHooks";
import { TodoCate } from "@entities/todo/model/type";
import { Id } from "@shared/config/type/commonType";
import { todoCateListStyle } from "./TodoCateList.style";
import { useTodoCateList } from "../model/useTodoCateList";
import TodoCateItem from "./TodoCateItem";
import {
  DraggableWrapper,
  getNewOrder,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";

function DraggableTodoCateList() {
  const { data } = useGetAllTodoCateQuery();
  const { ul, h3, container } = todoCateListStyle;
  const isCurrentLink = useTodoCateList();
  const { mutate: updateTodoCateMutate } =
    useUpdateTodoCateMutation();

  const handleDragEnd = (
    newItems: (TodoCate & Id)[],
    active: TodoCate & Id
  ) => {
    if (!active?.id) return;
    const newOrder = getNewOrder(active, newItems);
    active.order = newOrder;
    console.log(active);
    updateTodoCateMutate(active);
  };

  return (
    <div css={container}>
      <h3 css={h3}>목록</h3>
      <ul css={ul}>
        <SortableDndContext
          handleDragEnd={handleDragEnd}
          data={data || []}
        >
          {(items) =>
            items?.map((todo: TodoCate & Id) => (
              <DraggableWrapper key={todo.id} id={todo.id}>
                <TodoCateItem
                  key={todo.id}
                  data={todo}
                  isActive={isCurrentLink(todo)}
                />
              </DraggableWrapper>
            ))
          }
        </SortableDndContext>
      </ul>
    </div>
  );
}

export default DraggableTodoCateList;
