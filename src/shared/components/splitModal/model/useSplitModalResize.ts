import { useEffect, useRef } from "react";
import { useSplitResizeStore } from "./useSplitResizeStore";

export const useSplitModalResize = () => {
  const { leftWidth, setLeftWidth } = useSplitResizeStore(); // % 단위
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isDraggingRef = useRef(false);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    document.body.style.userSelect = "none"; // 텍스트 선택 방지
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !containerRef.current)
        return;

      const rect =
        containerRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percent = (offsetX / rect.width) * 100;

      if (percent >= 30 && percent <= 70) {
        setLeftWidth(percent);
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.body.style.userSelect = "auto"; // 원래대로 복구
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return {
    leftWidth,
    containerRef,
    handleMouseDown,
  };
};
