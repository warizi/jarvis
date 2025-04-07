/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import { MoonIcon, SunIcon } from "@shared/components/icon";
import { useThemeStore } from "@shared/config/theme/themeStore";

const buttonStyle = (theme: Theme) =>
  ({
    height: "45px",
    width: "45px",
    backgroundColor: theme.colors.background.deep,
    color: theme.colors.text.primary,
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: theme.typography.size.small,
    "&:hover": {
      backgroundColor: theme.colors.background.hover,
    },
  } as const);

function ThemeToggleButton() {
  const { toggleDarkMode, darkMode } = useThemeStore(
    (state) => state
  );
  return (
    <button css={buttonStyle} onClick={toggleDarkMode}>
      {darkMode ? (
        <SunIcon size={18} />
      ) : (
        <MoonIcon size={18} />
      )}
    </button>
  );
}

export default ThemeToggleButton;
