/** @jsxImportSource @emotion/react */

import { IconProps } from "../model/type";

function BookMarkIcon({
  color = "currentColor",
  size = 24,
  isFilled = false,
}: IconProps & { isFilled?: boolean }) {
  return (
    <>
      {isFilled ? (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9978 2.01416C5.4458 2.01416 3.9978 3.46246 3.9978 6.01626V21.0242C3.9978 21.7425 4.74381 22.2133 5.40381 21.9309L11.9978 19.1169L18.5918 21.9309C19.2518 22.2138 19.9978 21.7423 19.9978 21.0242V6.01626C19.9978 3.39146 18.6928 2.01416 15.9978 2.01416H7.9978Z"
            fill={color}
          />
        </svg>
      ) : (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99781 2.01416C5.4458 2.01416 3.9978 3.46056 3.9978 6.01066V20.9975C3.9978 21.7148 4.7128 22.2167 5.3728 21.9342L11.9978 19.0929L18.5918 21.9342C19.2518 22.2167 19.9978 21.7148 19.9978 20.9975V6.01066C19.9978 3.38956 18.6928 2.01416 15.9978 2.01416H7.99781ZM7.99781 4.01236H15.9978C17.5638 4.01236 17.9978 4.46986 17.9978 6.01066V19.4988L12.3728 17.0947C12.1208 16.987 11.8428 16.987 11.5918 17.0947L5.9978 19.4988V6.01066C5.9978 4.56416 6.54981 4.01236 7.99781 4.01236Z"
            fill={color}
          />
        </svg>
      )}
    </>
  );
}

export default BookMarkIcon;
