/** @jsxImportSource @emotion/react */

import { Note } from "@entities/note/model/type";
import { noteFormStyles } from "./NoteForm.style";
import { Id } from "@shared/config/type/commonType";
import { Controller } from "react-hook-form";
import { CommonEditor } from "@shared/components/editor";
import { ImportantCheckBox } from "@shared/components/form";
import NoteLabelSelector from "./NoteLabelSelector";
import { useGetNoteQuery } from "@entities/note";
import { useNoteForm } from "../model/useNoteForm";

function NoteForm({ data }: { data: Note & Id }) {
  const noteId = data.id;
  const { data: noteData, isLoading } =
    useGetNoteQuery(noteId);

  // noteData가 있으면 그것을, 없으면 props로 받은 data 사용
  const formData = noteData ?? data;
  const { register, control } = useNoteForm(
    formData as Note & Id
  );

  // 데이터 로딩 중이면 폼 렌더링하지 않음 (최소 flicker 방지)
  if (isLoading) return null;

  const { container, input, label } = noteFormStyles;

  return (
    <div css={container}>
      <label htmlFor={`todo-${formData.id}`} css={label}>
        <input
          id={`todo-${formData.id}`}
          css={input}
          type="text"
          {...register("title")}
        />
        <Controller
          name="isImportant"
          control={control}
          render={({ field }) => (
            <ImportantCheckBox
              checked={field.value}
              onChange={() =>
                field.onChange(field.value === 0 ? 1 : 0)
              }
            />
          )}
        />
      </label>
      <Controller
        name="label"
        control={control}
        render={({ field }) => (
          <NoteLabelSelector
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <CommonEditor
            value={field.value}
            setValue={field.onChange}
            minHeight="calc(100vh - 350px)"
          />
        )}
      />
    </div>
  );
}

export default NoteForm;
