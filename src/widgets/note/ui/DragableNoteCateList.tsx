/** @jsxImportSource @emotion/react */

import {
  NoteCateType,
  useGetAllNoteCateQuery,
} from "@entities/note";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { Id } from "@shared/config/type/commonType";
import { SidebarListWrapper } from "@shared/components/sidebar";
import {
  NoteCateCreateBtn,
  NoteCateItem,
} from "@features/note";
import { useIsCurrentLink } from "../../todo/model/useIsCurrentLink";
import { useDnDNoteCate } from "../model/useDnDNoteCate";

function DragableNoteCateList() {
  const { data } = useGetAllNoteCateQuery();
  const isCurrentLink = useIsCurrentLink();

  const { handleDragEnd } = useDnDNoteCate();

  return (
    <SidebarListWrapper
      listTitle="Folder"
      bottom={<NoteCateCreateBtn />}
    >
      <SortableDndContext
        handleDragEnd={handleDragEnd}
        data={data || []}
      >
        {(items) =>
          items?.map((todo: NoteCateType & Id) => (
            <DraggableWrapper key={todo.id} id={todo.id}>
              <NoteCateItem
                key={todo.id}
                data={todo}
                isActive={isCurrentLink(todo)}
              />
            </DraggableWrapper>
          ))
        }
      </SortableDndContext>
    </SidebarListWrapper>
  );
}

export default DragableNoteCateList;
