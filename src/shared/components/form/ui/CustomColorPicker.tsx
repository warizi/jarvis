/** @jsxImportSource @emotion/react */

import {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { customColorPickerStyles } from "./CustomColorPicker.style";
import TemplateColorPicker from "./TemplateColorPicker";

type Props = {
  size?: number;
  onChange?: (color: string) => void;
};

function CustomColorPicker({ size = 40, onChange }: Props) {
  const [selectedColor, setSelectedColor] =
    useState("#E52B27");
  const [isOpen, setIsOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const { container, colorDisplay, pickerWrapper } =
    customColorPickerStyles;

  const handleChange = useCallback(
    (color?: string) => {
      if (!color) return;
      if (onChange) onChange(color);
      setSelectedColor(color);
    },
    [onChange]
  );

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;
    const el = containerRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const spaceRight = window.innerWidth - rect.left;
      const estimatedPickerWidth = 200; // 예상 픽커 너비

      setIsOverflowing(spaceRight < estimatedPickerWidth);
    });

    const handleWindowClick = () => {
      setIsOpen(false);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener(
        "click",
        handleWindowClick
      );
    };
  }, [isOpen, containerRef]);

  return (
    <div css={container(size)} ref={containerRef}>
      <div
        css={colorDisplay(selectedColor)}
        onClick={(e) => {
          e.stopPropagation();
          toggleOpen();
        }}
      />
      {isOpen && (
        <div
          css={{
            ...pickerWrapper(size),
            left: isOverflowing ? "auto" : 0,
            right: isOverflowing ? 0 : "auto",
          }}
        >
          <TemplateColorPicker
            onClick={handleChange}
            selectedColor={selectedColor}
          />
        </div>
      )}
    </div>
  );
}

export default CustomColorPicker;
