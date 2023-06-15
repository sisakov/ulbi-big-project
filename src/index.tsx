import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvender from "./theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvender>
      <App />
    </ThemeProvender>
  </BrowserRouter>,
  document.getElementById("root")
);
