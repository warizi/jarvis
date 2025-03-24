/** @jsxImportSource @emotion/react */

import { StarIcon } from "@shared/components/icon";
import { starCheckboxStyles } from "./ImportantCheckBox.style";

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
          size={22}
          color="#FFDA36"
          fill={checked ? "#FFDA36" : "none"}
        />
      </div>
    </label>
  );
}

export default ImportantCheckBox;
