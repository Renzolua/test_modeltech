import { createRoot } from "react-dom/client";
import React from "react";
import { StrictMode } from "react";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(async () => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <PrimeReactProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PrimeReactProvider>
    </StrictMode>
  );
});
