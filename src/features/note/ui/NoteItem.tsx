/** @jsxImportSource @emotion/react */

import { Note } from "@entities/note/model/type";
import { Id } from "@shared/config/type/commonType";
import { NoteItemStyles } from "./NoteItem.style";
import { ImportantCheckBox } from "@shared/components/form";
import { useNoteSplitModal } from "../model/useNoteSplitModal";
import { useUpdateNoteMutation } from "@entities/note";
import { useNoteContextMenu } from "../model/useNoteContextMenu";
function NoteItem({ data }: { data: Note & Id }) {
  const { id, title, isImportant, label: noteLabel } = data;
  const { openNoteSplitModal } = useNoteSplitModal();
  const { mutate } = useUpdateNoteMutation();
  const { openContextMenu } = useNoteContextMenu(id);

  const { container, innerContainer, label } =
    NoteItemStyles;

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
      onClick={openNoteSplitModal(data)}
      onContextMenu={openContextMenu}
    >
      <div css={innerContainer}>
        <div css={label(noteLabel?.color || "")} />
        <span>{title}</span>
      </div>
      <div css={innerContainer}>
        <ImportantCheckBox
          checked={isImportant}
          onChange={() => handleImportant(data)}
        />
      </div>
    </div>
  );
}

export default NoteItem;
