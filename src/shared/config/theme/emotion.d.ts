import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: {
        light: string;
        normal: string;
        dark: string;
      };
      secondary: {
        light: string;
        normal: string;
        dark: string;
      };
      background: {
        deep: string;
        gray: string;
        hover: string;
        backdrop: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      border: {
        gray: string;
        deepGray: string;
      };
      important: {
        heigh: string;
        heighHover: string;
        meduim: string;
        low: string;
      };
      success: string;
    };
    typography: {
      size: {
        small: string;
        medium: string;
        large: string;
      };
    };
    radius: {
      small: string;
      medium: string;
      large: string;
    };
    shadow: {
      superSmall: string;
      small: string;
      medium: string;
      large: string;
    };
  }
}
