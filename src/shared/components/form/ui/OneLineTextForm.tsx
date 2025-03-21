/** @jsxImportSource @emotion/react */

import { PlusIcon } from "@shared/components/icon";
import {
  oneLineTextFormStyle,
  sizeStyles,
} from "./OneLineTextForm.style";
import { useTheme } from "@emotion/react";

type OneLineTextFormProps = {
  label: string;
  placeholder: string;
  size?: "sm" | "md";
  onSubmit: () => void;
};

function OneLineTextForm({
  label,
  placeholder,
  size = "md",
  onSubmit,
  ...rest
}: OneLineTextFormProps) {
  const { container, button, input } = oneLineTextFormStyle;
  const theme = useTheme();

  return (
    <label htmlFor={`${label}-onet-ext`} css={container}>
      <button onClick={onSubmit} css={button}>
        <PlusIcon
          color="currentColor"
          size={sizeStyles[size].icon}
        />
      </button>
      <input
        css={{
          ...input(theme),
          height: sizeStyles[size].height,
          fontSize: sizeStyles[size].fontSize,
        }}
        id={`${label}-onet-ext`}
        {...rest}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
      />
    </label>
  );
}

export default OneLineTextForm;
