import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styled/Modal.css";
import App from "./app/Modal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
