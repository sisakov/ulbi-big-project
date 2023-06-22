import { render } from "react-dom";
import { App } from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvender } from "App/providers/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvender>
      <App />
    </ThemeProvender>
  </BrowserRouter>,
  document.getElementById("root")
);
