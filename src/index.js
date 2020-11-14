import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/index.css";
import "./assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
