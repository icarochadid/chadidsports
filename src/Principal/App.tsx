import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/Global";
import { defaultTheme } from "../styles/Themes/default";
import { Router } from "../Routes/Router";
import { AccessProvider } from "../Context/context";
import { BrowserRouter } from "react-router-dom";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AccessProvider>
        <Router/>
      </AccessProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

