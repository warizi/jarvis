/** @jsxImportSource @emotion/react */

import { StarIcon } from "@shared/components/icon";
import { starCheckboxStyles } from "./ImportantCheckBox.style";
import { useTheme } from "@emotion/react";

function ImportantCheckBox({
  checked = 0,
  onChange = () => {},
  ...rest
}: {
  checked?: number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  const { container, input, checkmark } =
    starCheckboxStyles;
  const theme = useTheme();
  return (
    <label
      css={container}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        css={input}
        checked={checked === 1}
        onChange={onChange}
        {...rest}
      />
      <div css={checkmark}>
        <StarIcon
          size={18}
          color={
            checked
              ? "#FFDA36"
              : theme.colors.text.secondary
          }
          fill={checked ? "#FFDA36" : "none"}
        />
      </div>
    </label>
  );
}

export default ImportantCheckBox;
