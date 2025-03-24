/** @jsxImportSource @emotion/react */

import { IconProps } from "../model/type";

function CheckIcon({
  color = "currentColor",
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8 8.3999L9.64043 15.5999L7.19995 13.1456"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckIcon;
