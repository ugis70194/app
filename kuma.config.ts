import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    bg_light: "#FFFFFF",
    bg_dark: "#1A1A1C",
    text_light_title: "#1A1A1C",
    text_light_body: "#414143", 
    text_dark_title: "#FFFFFF",
    text_dark_body: "#D8D8D8", 
    link_light: "#0017C1",
    link_dark: "#7096F8",
    icon_light: "#1A1A1C",
    icon_dark: "#FFFFFF",
  }
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme
