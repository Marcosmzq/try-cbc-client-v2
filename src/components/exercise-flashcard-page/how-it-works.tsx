import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

interface FlashcardHowItWorksProps {}

export const FlashcardHowItWorks: React.FC<FlashcardHowItWorksProps> = ({}) => {
  return (
    <Accordion allowToggle w="100%">
      <AccordionItem>
        <h5>
          <AccordionButton>
            <Box flex="1" textAlign="left" py={4} px={2}>
              <Heading as="h5" variant="h5">
                ¿Cómo funciona este ejercicio?
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h5>
        <AccordionPanel>
          <Text variant="body" py={6}>
            Lee el enuncia e intenta pensar la respuesta al mismo. Luego revela
            la respuesta y fijate si lo que pensabas era correcto o no. Este
            ejercicios es un poco más dificil que las trivias normales, pero
            ayuda mucho para practicar la memoria y conocimiento que tenemos
            sobre ciertos conceptos y sucesos.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
