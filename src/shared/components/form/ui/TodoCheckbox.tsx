/** @jsxImportSource @emotion/react */

import { CheckIcon } from "@shared/components/icon";
import { todoCheckboxStyles } from "./TodoCheckbox.style";

function TodoCheckbox({
  isChecked = false,
  onChange = () => {},
}: {
  isChecked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  const { container, input, checkmark } =
    todoCheckboxStyles;
  return (
    <label css={container}>
      <input
        type="checkbox"
        css={input}
        checked={isChecked}
        onChange={onChange}
      />
      <div css={checkmark(isChecked)}>
        <CheckIcon size={22} />
      </div>
    </label>
  );
}

export default TodoCheckbox;
