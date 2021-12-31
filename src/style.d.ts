import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    breakpoints: {
      r360: string;
      r540: string;
      r640: string;
      r720: string;
      r960: string;
      r1080: string;
      r1280: string;
    };
  }
}
