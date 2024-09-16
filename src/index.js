import APP from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import AuthContextProvider from "./components/Store/AuthContextProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <APP />
    </AuthContextProvider>
  </BrowserRouter>
);
