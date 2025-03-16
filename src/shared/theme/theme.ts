import { Theme } from "@emotion/react"; // 이렇게 가져오면 d.ts 확장된 Theme가 인식됨

export const lightTheme: Theme = {
  colors: {
    background: "#f0f0f0",
    surface: "#ffffff",
    primary: "#6200ee",
    secondary: "#03dac6",
    error: "#b00020",
    text: {
      primary: "#000000",
      secondary: "#ffffff",
      disabled: "#a9a9a9",
    },
    border: "#d1d1d1",
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
    small: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  },
};

export const darkTheme: Theme = {
  colors: {
    background: "#121212",
    surface: "#1e1e1e",
    primary: "#bb86fc",
    secondary: "#03dac6",
    error: "#cf6679",
    text: {
      primary: "#ffffff",
      secondary: "#000000",
      disabled: "#a9a9a9",
    },
    border: "#343434",
  },
  typography: {
    size: { small: "12px", medium: "14px", large: "16px" },
  },
  radius: { small: "4px", medium: "8px", large: "12px" },
  shadow: {
    small: "0px 2px 4px rgba(0, 0, 0, 0.9)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.9)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.9)",
  },
};
