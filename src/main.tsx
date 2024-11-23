import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "react-query";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./lib/hooks/useQuery.ts";
// import AppConfigProvider from "./components/layouts/AppConfigProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* <AppConfigProvider> */}
          <App />
        {/* </AppConfigProvider> */}
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
