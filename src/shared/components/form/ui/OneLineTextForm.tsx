/** @jsxImportSource @emotion/react */

import { PlusIcon } from "@shared/components/icon";
import {
  oneLineTextFormStyle,
  sizeStyles,
} from "./OneLineTextForm.style";
import { useTheme } from "@emotion/react";
import { useRef } from "react";

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

  const isComposingRef = useRef(false);

  return (
    <label htmlFor={`${label}-onet-ext`} css={container}>
      <button
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        css={button}
      >
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
        onCompositionStart={() => {
          isComposingRef.current = true;
        }}
        onCompositionEnd={() => {
          isComposingRef.current = false;
        }}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" &&
            !isComposingRef.current
          ) {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
    </label>
  );
}

export default OneLineTextForm;
