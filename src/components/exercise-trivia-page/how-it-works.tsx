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

interface TriviaHowItWorksProps {}

export const TriviaHowItWorks: React.FC<TriviaHowItWorksProps> = ({}) => {
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
            El funcionamiento es simple, lee el enunciado y selecciona la
            respuesta que creas correcta, luego de eso vas a recibir feedback.
            El objetivo de este ejercicio es que vayas interiorizandote con
            ejercicios tipicos de examenes, de una forma más que con otros
            formatos, ya que al tener multiples respuestas posibles, es más
            fácil acertar.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
