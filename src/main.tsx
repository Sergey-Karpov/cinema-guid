import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/api";
import { ModalProvider } from "@/components/ui/Modals/ModalContext";
import { Provider } from "react-redux";
import { store } from "@/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <ModalProvider>
          <App />
        </ModalProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>
);
