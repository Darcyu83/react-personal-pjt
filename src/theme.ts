import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  accentColor: "tomato",
  breakpoints: {
    r360: "only screen and (max-width: 360px)",
    r540: "only screen and (max-width: 540px)",
    r640: "only screen and (max-width: 640px)",
    r720: "only screen and (max-width: 720px)",
    r960: "only screen and (max-width: 960px)",
    r1080: "only screen and (max-width: 1080px)",
    r1280: "only screen and (max-width: 1280px)",
  },
};

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  accentColor: "tomato",
  breakpoints: {
    r360: "only screen and (max-width: 360px)",
    r540: "only screen and (max-width: 540px)",
    r640: "only screen and (max-width: 640px)",
    r720: "only screen and (max-width: 720px)",
    r960: "only screen and (max-width: 960px)",
    r1080: "only screen and (max-width: 1080px)",
    r1280: "only screen and (max-width: 1280px)",
  },
};

/*
nHD (640 x 360)
qHD (960 x 540)
HD(1280x720)
FHD(1920x1080)
FHD+ (2460 x 1080)
WFHD (2560 x 1080)
DFHD (3840 x 1080)
WUXGA (1920 x 1200)
QHD/WQHD(2560x1440)
QHD+ (3200 x 1440)
WQHD (3440 x 1440)
DQHD (5120 x 1440)
WQXGA (2560 x 1600)
WQHD+ (3840 x 1600)
4K UHD / UHD (3840 x 2160)
4K DCI (4096 x 2160)
WUHD / UHD+ (5120 x 2160)
8K UHD / FUHD (7680 x 4320)
*/
