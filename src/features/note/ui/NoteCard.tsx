/** @jsxImportSource @emotion/react */

import { useUpdateNoteMutation } from "@entities/note";
import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { useNoteContextMenu } from "../model/useNoteContextMenu";
import { CommonEditor } from "@shared/components/editor";
import { noteCardStyles } from "./NoteCard.style";
import { ImportantCheckBox } from "@shared/components/form";

function NoteCard({
  data,
  onClick,
}: {
  data: Note & Id;
  onClick?: () => void;
}) {
  const {
    id,
    title,
    isImportant,
    label: noteLabel,
    content,
  } = data;
  const { mutate } = useUpdateNoteMutation();
  const { openContextMenu } = useNoteContextMenu(id);

  const { container, label, innerContainer, contentDiv } =
    noteCardStyles;

  const handleImportant = (note: Note & Id) => {
    if (note.isImportant === 0) {
      note.isImportant = 1;
    } else {
      note.isImportant = 0;
    }
    mutate(note);
  };
  return (
    <div
      css={container}
      onClick={onClick}
      onContextMenu={openContextMenu}
    >
      <div>
        <div css={label(noteLabel?.color || "")} />
        <div css={innerContainer}>
          <span>{title}</span>
          <div>
            <ImportantCheckBox
              checked={isImportant}
              onChange={() => handleImportant(data)}
            />
          </div>
        </div>
      </div>
      <div css={contentDiv}>
        <CommonEditor
          value={content}
          setValue={() => {}}
          readOnly
        />
      </div>
    </div>
  );
}

export default NoteCard;
