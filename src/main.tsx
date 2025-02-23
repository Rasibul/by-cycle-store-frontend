import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/fetures/store.ts";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root") as HTMLElement | null;

if (!rootElement) {
  throw new Error("Root element with id 'root' not found!");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
