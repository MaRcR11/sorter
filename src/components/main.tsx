import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../styles/index.css";
import NavMenu from "./Navmenu";
import "bootstrap/dist/css/bootstrap.min.css";
import DivContainer from "./DivContainer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavMenu />
    {/*<DivContainer/>*/}
  </React.StrictMode>
);
