/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { useThemeStore } from "@shared/config/theme/themeStore";

const buttonStyle = (theme: Theme) =>
  ({
    backgroundColor: theme.colors.background.deep,
    color: theme.colors.text.primary,
    border: "none",
    borderRadius: theme.radius.medium,
    padding: "5px 10px",
  } as const);

function ThemeToggleButton() {
  const { toggleDarkMode, darkMode } = useThemeStore(
    (state) => state
  );
  return (
    <button css={buttonStyle} onClick={toggleDarkMode}>
      {darkMode ? "라이트" : "다크"}
    </button>
  );
}

export default ThemeToggleButton;
