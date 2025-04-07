import { useThemeStore } from "@shared/config/theme/themeStore";
import { useEffect } from "react";

export const useThemeColor = () => {
  const darkMode = useThemeStore((state) => state.darkMode);

  useEffect(() => {
    const themeMetaTag =
      document.querySelector("meta[name='theme-color']") ||
      (() => {
        const tag = document.createElement("meta");
        tag.setAttribute("name", "theme-color");
        document.head.appendChild(tag);
        return tag;
      })();

    themeMetaTag.setAttribute(
      "content",
      darkMode ? "#1e1e1e" : "#ffffff"
    );
  }, [darkMode]);
};
