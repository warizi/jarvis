/** @jsxImportSource @emotion/react */

import {
  NoteCate,
  useGetAllNoteCateQuery,
} from "@entities/note";
import { useIsCurrentLink } from "../model/useIsCurrentLink";
import { useDnDNoteCate } from "../model/useDnDNoteCate";
import {
  DraggableWrapper,
  SortableDndContext,
} from "@shared/hooks/DnDWrapper";
import { Id } from "@shared/config/type/commonType";
import NoteCateItem from "./NoteCateItem";
import NoteCateCreateBtn from "./NoteCateCreateBtn";
import { dragableNoteItemListStyles } from "./DragableNoteCateList.style";

function DragableNoteCateList() {
  const { data } = useGetAllNoteCateQuery();
  const { ul, container } = dragableNoteItemListStyles;
  const isCurrentLink = useIsCurrentLink();

  const { handleDragEnd } = useDnDNoteCate();

  return (
    <div css={container}>
      <ul css={ul}>
        <SortableDndContext
          handleDragEnd={handleDragEnd}
          data={data || []}
        >
          {(items) =>
            items?.map((todo: NoteCate & Id) => (
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
      </ul>
      <NoteCateCreateBtn />
    </div>
  );
}

export default DragableNoteCateList;
