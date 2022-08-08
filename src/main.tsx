import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { ApolloProvider } from "@apollo/client";
import { gqlClient } from "./graphql/client/gqlClient";
import "@fontsource/inter";
import { Footer } from "./components/footer";
import { AuthProvider } from "./context/userAuth";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={gqlClient}>
      <AuthProvider>
        <ChakraProvider resetCSS theme={theme}>
          <App />
          <Footer />
        </ChakraProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
