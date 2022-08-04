import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { ApolloProvider } from "@apollo/client";
import { gqlClient } from "./graphql/client/gqlClient";
import "@fontsource/inter";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={gqlClient}>
      <ChakraProvider resetCSS theme={theme}>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
