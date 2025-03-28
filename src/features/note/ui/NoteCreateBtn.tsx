/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { useCreateNote } from "../model/useCreateNote";
import { OneLineTextForm } from "@shared/components/form";

const noteCreateBtnStyles = {
  container: (theme: Theme) =>
    ({
      position: "sticky",
      top: "60px",
      backgroundColor: theme.colors.background.gray,
      zIndex: 1200,
    } as const),
};

function NoteCreateBtn({ cateId }: { cateId: number }) {
  const { container } = noteCreateBtnStyles;

  const { register, onSubmit } = useCreateNote(cateId);
  return (
    <div css={container}>
      <OneLineTextForm
        label="note"
        size="md"
        placeholder="새 노트 추가"
        onSubmit={onSubmit}
        {...register("title")}
      />
    </div>
  );
}

export default NoteCreateBtn;
