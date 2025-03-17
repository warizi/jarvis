/** @jsxImportSource @emotion/react */

import { IconProps } from "../model/type";

function ArrowRightIcon({
  color = "#12131A",
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // fill-rule="evenodd"
        // clip-rule="evenodd"
        d="M8.41005 6.43934C8.95678 5.85355 9.84322 5.85355 10.3899 6.43934L14.5899 10.9393C15.1367 11.5251 15.1367 12.4749 14.5899 13.0607L10.3899 17.5607C9.84322 18.1464 8.95678 18.1464 8.41005 17.5607C7.86332 16.9749 7.86332 16.0251 8.41005 15.4393L11.6201 12L8.41005 8.56066C7.86332 7.97487 7.86332 7.02513 8.41005 6.43934Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowRightIcon;
