/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { useCreateNoteLabel } from "../model/useCreateNoteLabel";
import {
  CustomColorPicker,
  OneLineTextForm,
} from "@shared/components/form";
import { Controller } from "react-hook-form";

function NoteLabelCreateBtn() {
  const { register, onSubmit, control } =
    useCreateNoteLabel();
  const theme = useTheme();
  const randomNo = Math.random();
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "&:hover": {
          background: theme.colors.background.hover,
        },
        paddingRight: "10px",
        width: "100%",
      }}
    >
      <OneLineTextForm
        label={`todo-label-create-${randomNo}`}
        size="sm"
        placeholder="새 라벨"
        onSubmit={onSubmit}
        {...register("name")}
      />
      <Controller
        name="color"
        control={control}
        render={({ field }) => (
          // <ColorPicker
          //   size={30}
          //   value={field.value}
          //   onChange={field.onChange}
          // />
          <CustomColorPicker
            size={30}
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
}

export default NoteLabelCreateBtn;
