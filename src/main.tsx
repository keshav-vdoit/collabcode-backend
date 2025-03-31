import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./lib/hooks/useQuery.ts";
// import AppConfigProvider from "./components/layouts/AppConfigProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* <AppConfigProvider> */}
        <HelmetProvider>
          <App />
        </HelmetProvider>
        {/* </AppConfigProvider> */}
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
