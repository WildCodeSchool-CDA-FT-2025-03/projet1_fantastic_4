import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ApolloProvider } from "@apollo/client";
import router from "./routers/routers.tsx";
import "./global.css";
import clientApollo from "./services/client-apollo.service.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={clientApollo}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
);
