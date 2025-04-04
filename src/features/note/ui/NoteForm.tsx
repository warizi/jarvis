/** @jsxImportSource @emotion/react */

import { Note } from "@entities/note/model/type";
import { noteFormStyles } from "./NoteForm.style";
import { Id } from "@shared/config/type/commonType";
import { useNoteForm } from "../model/useNoteForm";
import { Controller } from "react-hook-form";
import { CommonEditor } from "@shared/components/editor";
import { ImportantCheckBox } from "@shared/components/form";
import NoteLabelSelector from "./NoteLabelSelector";

function NoteForm({ data }: { data: Note & Id }) {
  const { container, input, label } = noteFormStyles;
  const { register, control } = useNoteForm(data);
  return (
    <div css={container}>
      <label htmlFor={`todo-${data.id}`} css={label}>
        <input
          id={`todo-${data.id}`}
          css={input}
          type="text"
          {...register("title")}
        />
        <Controller
          name="isImportant"
          control={control}
          defaultValue={0}
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
          <div
            css={{
              borderBottom: "1px solid #eaeaea",
            }}
          >
            <NoteLabelSelector
              value={field.value}
              onChange={(data) => {
                field.onChange(data);
              }}
            />
          </div>
        )}
      />
      <Controller
        name="content"
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <CommonEditor
            value={field.value}
            setValue={(value: string) =>
              field.onChange(value)
            }
            minHeight="calc(100vh - 350px)"
          />
        )}
      />
    </div>
  );
}

export default NoteForm;
