import { extendTheme } from "@chakra-ui/react";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import { Button } from "./components/button";

export const theme = extendTheme({
  colors: {
    primary: "#000",
    secondary: "#4f46e5",
    terceary: "#485BFF",
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  components: {
    Heading,
    Text,
    Button,
  },
});
