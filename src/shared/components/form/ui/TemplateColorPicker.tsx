/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { templateColorPickerStyles } from "./TemplateColorPicker.style";

const colors = [
  "#E52B27",
  "#E17876",
  "#E5A927",
  "#FFD373",
  "#9FE527",
  "#4AAB1A",
  "#27D2E5",
  "#2783E5",
  "#546C92",
  "#6D4645",
  "#DF27E5",
  "#66117B",
];
function TemplateColorPicker({
  onClick,
  selectedColor,
}: {
  onClick: (color?: string) => void;
  selectedColor: string;
}) {
  const { container, color } = templateColorPickerStyles;
  const theme = useTheme();

  return (
    <div css={container}>
      {colors.map((c, index) => (
        <div
          key={index}
          css={{
            ...color(c)(theme),
            border: `3px solid ${
              selectedColor === c
                ? theme.colors.primary.dark
                : "transparent"
            }`,
          }}
          onClick={() => onClick(c)}
        />
      ))}
    </div>
  );
}

export default TemplateColorPicker;
