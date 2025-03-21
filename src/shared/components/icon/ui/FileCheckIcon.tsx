/** @jsxImportSource @emotion/react */

import { IconProps } from "../model/type";

function FileCheckIcon({
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
        d="M10.2999 21.6001H5.49984C4.17436 21.6001 3.09984 20.5256 3.09985 19.2001L3.09995 4.80013C3.09995 3.47466 4.17447 2.40015 5.49995 2.40015H16.3002C17.6257 2.40015 18.7002 3.47466 18.7002 4.80015V11.4001M13.9002 18.2001L16.1002 20.4001L20.9002 15.6M7.30023 7.20015H14.5002M7.30023 10.8001H14.5002M7.30023 14.4001H10.9002"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FileCheckIcon;
