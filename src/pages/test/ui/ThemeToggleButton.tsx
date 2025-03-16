/** @jsxImportSource @emotion/react */

import { Theme, useTheme } from "@emotion/react";
import { useThemeStore } from "@shared/theme/themeStore";

const buttonStyle = (theme: Theme) => ({
  backgroundColor: theme.colors.primary,
  color: theme.colors.text.secondary,
  border: "none",
  borderRadius: theme.radius.medium,
});

function ThemeToggleButton() {
  const { toggleDarkMode, darkMode } = useThemeStore(
    (state) => state
  );
  const theme = useTheme();

  return (
    <button
      css={buttonStyle(theme)}
      onClick={toggleDarkMode}
    >
      {darkMode ? "라이트" : "다크"}
    </button>
  );
}

export default ThemeToggleButton;
