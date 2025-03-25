/** @jsxImportSource @emotion/react */

import { IconProps } from "../model/type";

function SidebarIcon({
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
        d="M8.9999 2.39999V21.6M13.1999 5.99999H16.7999M13.1999 9.59999H16.7999M13.1999 13.2H13.7999M5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V5.99999C21.5999 4.01177 19.9881 2.39999 17.9999 2.39999H5.9999C4.01168 2.39999 2.3999 4.01177 2.3999 5.99999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SidebarIcon;
