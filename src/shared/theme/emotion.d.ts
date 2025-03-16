import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      surface: string;
      primary: string;
      secondary: string;
      error: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      border: string;
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
      small: string;
      medium: string;
      large: string;
    };
  }
}
