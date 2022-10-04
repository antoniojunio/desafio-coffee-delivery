import { BrowserRouter, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CardContextProvider } from "./contexts/CartContext"
import { Router } from "./Routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CardContextProvider>
          <Router />
        </CardContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
