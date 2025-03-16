/** @jsxImportSource @emotion/react */

import { IconProps } from "../model/type";

function TaskIcon({
  color = "#BABDCC",
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${24} ${24}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 6C13.4477 6 13 6.44772 13 7C13 7.55228 13.4477 8 14 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H14Z"
        fill={color}
      />
      <path
        d="M14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H14Z"
        fill={color}
      />
      <path
        d="M3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V7.8C3 8.9201 3 9.48016 3.21799 9.90798C3.40973 10.2843 3.71569 10.5903 4.09202 10.782C4.51984 11 5.0799 11 6.2 11H7.8C8.92011 11 9.48016 11 9.90798 10.782C10.2843 10.5903 10.5903 10.2843 10.782 9.90798C11 9.48016 11 8.9201 11 7.8V6.2C11 5.0799 11 4.51984 10.782 4.09202C10.5903 3.71569 10.2843 3.40973 9.90798 3.21799C9.48016 3 8.9201 3 7.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202Z"
        fill={color}
      />
      <path
        d="M3.21799 14.092C3 14.5198 3 15.0799 3 16.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H7.8C8.92011 21 9.48016 21 9.90798 20.782C10.2843 20.5903 10.5903 20.2843 10.782 19.908C11 19.4802 11 18.9201 11 17.8V16.2C11 15.0799 11 14.5198 10.782 14.092C10.5903 13.7157 10.2843 13.4097 9.90798 13.218C9.48016 13 8.9201 13 7.8 13H6.2C5.0799 13 4.51984 13 4.09202 13.218C3.71569 13.4097 3.40973 13.7157 3.21799 14.092Z"
        fill={color}
      />
    </svg>
  );
}

export default TaskIcon;
