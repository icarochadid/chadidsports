import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/Global";
import { defaultTheme } from "../styles/Themes/default";
import { Router } from "../Routes/Router";
import { AccessProvider } from "../Context/firebaseAuth";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "../Context/getProducts";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AccessProvider>
      <ProductsProvider>
          <Router />
      </ProductsProvider>
      </AccessProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

