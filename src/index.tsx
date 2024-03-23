import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(

  <App /> 
  // <React.StrictMode>
   
  // </React.StrictMode>
);

// App was inbetween the react strictmode