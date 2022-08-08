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

interface FlashcardExpressiveHowItWorksProps {}

export const FlashcardExpressiveHowItWorks: React.FC<
  FlashcardExpressiveHowItWorksProps
> = ({}) => {
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
            Con este formato lo que buscamos es expresarnos, ¿Qué mejor manera
            de intentar aprender un concepto que explicando este?, al escribir
            lo que vos creas que es la respuesta correcta vas a tener más
            fácilidad para asimilar el contenido que estes estudiando. Este
            formato es más dificil que los anteriores, pero ofrece un ejercicio
            que pondra a prueba tu conocimiento sobre un tema al máximo.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
