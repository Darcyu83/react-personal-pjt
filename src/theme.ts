import { atom } from "recoil";
import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  accentColor: "#9b59b6",
};

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  accentColor: "#9b59b6",
};
