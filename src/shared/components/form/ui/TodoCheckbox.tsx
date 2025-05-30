/** @jsxImportSource @emotion/react */

import { CheckIcon } from "@shared/components/icon";
import { todoCheckboxStyles } from "./TodoCheckbox.style";

function TodoCheckbox({
  checked = false,
  onChange = () => {},
  ...rest
}: {
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  const { container, input, checkmark } =
    todoCheckboxStyles;
  return (
    <label
      css={container}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        css={input}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <div css={checkmark(checked)}>
        <CheckIcon size={22} />
      </div>
    </label>
  );
}

export default TodoCheckbox;
