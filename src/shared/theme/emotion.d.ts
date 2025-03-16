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
      important: {
        heigh: string;
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
