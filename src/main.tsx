import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const queryClient = new QueryClient();
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:9000/graphql",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>
);
