/** @jsxImportSource @emotion/react */

import { Note } from "@entities/note/model/type";
import { noteFormStyles } from "./NoteForm.style";
import { Id } from "@shared/config/type/commonType";
import { useNoteForm } from "../model/useNoteForm";
import { Controller } from "react-hook-form";
import { CommonEditor } from "@shared/components/editor";
import { ImportantCheckBox } from "@shared/components/form";
import DragableNoteLabelList from "./DragableNoteLabelList";
import { Theme } from "@emotion/react";

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
              onChange={(e) =>
                field.onChange(e.target.checked)
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
            css={(theme: Theme) => ({
              zIndex: 14000,
              borderBottom: `1px solid ${theme.colors.border.deepGray}`,
            })}
          >
            <DragableNoteLabelList
              selectedLabel={field.value}
              onClick={(data) => {
                const isSame = field.value?.id === data?.id;
                field.onChange(isSame ? null : data);
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
