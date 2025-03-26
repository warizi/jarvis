/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { colorPickerStyles } from "./ColorPicker.style";

function ColorPicker({
  value,
  onChange,
  size = 50,
}: {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  size?: number;
}) {
  const [color, setColor] = useState(value);
  const { container, colorDisplay, input } =
    colorPickerStyles;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setColor(e.target.value);
    onChange(e);
  };

  return (
    <label htmlFor="color-picker" css={container(size)}>
      <input
        css={input()}
        id="color-picker"
        type="color"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <div css={colorDisplay(color, size)} />
    </label>
  );
}

export default ColorPicker;
