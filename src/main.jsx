import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 import this
import App from "./App";
import "./index.css"; // if you have it

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   {/* 👈 wrap App here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
