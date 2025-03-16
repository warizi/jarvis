/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LogoLight from "@shared/assets/images/flowa-white.png";
import LogoDark from "@shared/assets/images/flowa-black.png";
import { useThemeStore } from "@shared/theme/themeStore";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize; // 기본값도 설정 가능
}

const logoSizeStyles = {
  sm: css`
    width: 50px;
    height: auto;
  `,
  md: css`
    width: 80px;
    height: auto;
  `,
  lg: css`
    width: 120px;
    height: auto;
  `,
};

function Logo({ size = "md" }: LogoProps) {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <div>
      <img
        src={darkMode ? LogoLight : LogoDark}
        alt="logo"
        css={logoSizeStyles[size]}
      />
    </div>
  );
}

export default Logo;
