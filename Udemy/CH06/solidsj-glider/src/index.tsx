import { Router } from "@solidjs/router"
import { render } from "solid-js/web"
import App from "./app"

import "./index.css"

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")!
)
