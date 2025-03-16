import { Theme } from "@emotion/react"; // 이렇게 가져오면 d.ts 확장된 Theme가 인식됨

export const lightTheme: Theme = {
  colors: {
    primary: {
      light: "rgb(72, 98, 199)",
      normal: "rgb(46, 77, 200)",
      dark: "rgb(17, 53, 197)",
    },
    secondary: {
      light: "rgb(164, 77, 188)",
      normal: "rgb(159, 46, 190)",
      dark: "rgb(153, 13, 192)",
    },
    background: {
      deep: "rgb(255, 255, 255)",
      gray: "rgb(241, 241, 241)",
      hover: "rgba(182, 180, 180, 0.1)",
    },
    text: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(169, 169, 169, 1)",
    },
    important: {
      heigh: "rgba(255, 0, 0, 1)",
      meduim: "rgb(255, 179, 0)",
      low: "rgb(255, 238, 0)",
    },
    success: "rgba(0, 255, 0, 1)",
  },
  typography: {
    size: {
      small: "12px",
      medium: "14px",
      large: "16px",
    },
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  shadow: {
    superSmall: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    small: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: {
      light: "rgb(72, 98, 199)",
      normal: "rgb(46, 77, 200)",
      dark: "rgb(17, 53, 197)",
    },
    secondary: {
      light: "rgb(164, 77, 188)",
      normal: "rgb(159, 46, 190)",
      dark: "rgb(153, 13, 192)",
    },
    background: {
      deep: "rgb(16, 16, 16)",
      gray: "rgb(32, 32, 32)",
      hover: "rgba(177, 177, 177, 0.1)",
    },
    text: {
      primary: "rgb(234, 234, 234)",
      secondary: "rgb(120, 120, 120)",
    },
    important: {
      heigh: "rgba(255, 0, 0, 1)",
      meduim: "rgb(255, 179, 0)",
      low: "rgb(255, 238, 0)",
    },
    success: "rgba(0, 255, 0, 1)",
  },
  typography: {
    size: { small: "12px", medium: "14px", large: "16px" },
  },
  radius: { small: "4px", medium: "8px", large: "12px" },
  shadow: {
    superSmall: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    small: "0px 2px 4px rgba(0, 0, 0, 0.9)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.9)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.9)",
  },
};
