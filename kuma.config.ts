import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    bg_light: "#FFFFFF",
    bg_dark: "#1A1A1C",
    text_light_title: "#1A1A1C",
    text_light_body: "#414143", 
    text_dark_title: "#FFFFFF",
    text_dark_body: "#E8E8EB", 
    link_light: "#0017C1",
    link_dark: "#7096F8",
    icon_light: "#1A1A1C",
    icon_dark: "#FFFFFF",
    disabled_light: "#B4B4B7",
    disabled_dark: "#626264",
    r18_light: "#FF99CC",
    r18_dark: "#FF3366",
  }
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme
