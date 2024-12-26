import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./features/redux/store.js";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <Toaster position="top-right" reverseOrder={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
