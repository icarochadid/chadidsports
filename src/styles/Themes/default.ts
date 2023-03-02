import styled from "styled-components";
import { DefaultTheme } from "styled-components";
type ThemeType = typeof defaultTheme
declare module "styled-components" {
    export interface DefaultTheme extends ThemeType{}
}
export const defaultTheme = {
    'title': '#BA181B', //red
    'template-red': '#BA181B', //red
    'font-color': '#F5F3F4', //white
    'button-font-color': '#BA181B', //red
    'shadow-color': '#B1A7A6', //darkwhite
    'input-color':'#F5F3F4', //white
    'placeholder': '#B1A7A6', //darkwhite
    'background': '#F5F3F4' //white
}
