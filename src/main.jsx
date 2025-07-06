import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Portafolio} from "./Portafolio.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Portafolio />
  </StrictMode>
);
