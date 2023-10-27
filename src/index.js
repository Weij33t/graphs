import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { Bubble } from "./Bubble"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>
        <Bubble />
        <App />
      </div>
    </div>
  </StrictMode>
)
