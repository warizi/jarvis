/** @jsxImportSource @emotion/react */

import {
  CustomColorPicker,
  OneLineTextForm,
} from "@shared/components/form";
import { useCreateTodoLabel } from "../model/useCreateTodoLabel";
import { Controller } from "react-hook-form";
import { useTheme } from "@emotion/react";

function TodoLabelCreateBtn() {
  const { register, onSubmit, control } =
    useCreateTodoLabel();
  const theme = useTheme();
  const uuid = Math.random();
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
        label={`todo-label-create-${uuid}`}
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

export default TodoLabelCreateBtn;
