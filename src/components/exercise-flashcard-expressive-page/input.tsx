import { Textarea, Heading, Box } from "@chakra-ui/react";

interface FlashcardExpressiveInputProps {}

export const FlashcardExpressiveInput: React.FC<
  FlashcardExpressiveInputProps
> = ({}) => {
  return (
    <Box w="100%" px={[4, 8]} border="1px" borderColor="gray.200" py={[8, 12]}>
      <Heading as="h5" variant="h5" my={6} textAlign="center">
        ¿Cúal crees que es la respuesta?
      </Heading>
      <Textarea placeholder="Ingrese su respuesta" minH={["250px", "100px"]} />
    </Box>
  );
};
