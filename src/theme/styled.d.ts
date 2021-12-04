//   import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      primary: string;
      secondary: string;
      success: string;
      info: string;
      warning: string;
      primaryLight: string;
      danger: string;
      indigo: string;
      purple: string;
      pink: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      teal: string;
      cyan: string;
      white: string;
      gray: string;
      grayDark: string;
      dark: string;
      grayLight: string;
    };
  }
}
