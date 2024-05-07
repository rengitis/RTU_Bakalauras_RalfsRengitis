import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./pages/main/main";
import "./index.css";

const App = () => {
  return (
    <>
      <Main />
    </>
  );
};

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
