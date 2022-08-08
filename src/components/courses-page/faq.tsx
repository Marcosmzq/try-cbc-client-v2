import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

interface CoursesPageFAQSectionProps {}

export const CoursesPageFAQSectionProps: React.FC<
  CoursesPageFAQSectionProps
> = ({}) => {
  return (
    <Flex
      flexDir="column"
      minH="100vh"
      align="center"
      px={[4, 12]}
      py={[16, 24]}
    >
      <Heading as="h3" variant="h3" textAlign="center" my={6}>
        Preguntas frecuentes
      </Heading>

      <Accordion w={["100%", "70%"]} my={8}>
        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">¿Cómo son los cursos?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Cada curso tiene cientos de ejercicios tomados en parciales
              REALES. Estos ejercicos son presentados en varios formatos para
              que practiques con ellos y aprendas como responder ante ellos. De
              esta forma, cuando vayas a rendir, ya vas a tener practicado y
              estudiado el formato y el contenido de estos.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Qué formato de ejercicios existen?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Tenemos tres formatos actualmente, el de TRIVIA CON MULTIPLE
              CHOICE, FLASHCARDS y FLASHCARDS EXPRESIVAS. Practicando con estos
              tres formatos vas a mejorar muchisimo en la asimilación de
              conceptos que leas en los libros. Constantemente tratamos de
              agregar nuevos formatos y contenido a cada uno de estos.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Cómo me va a ayudar un curso de tryCBC a aprobar más fácil?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Practicando con ejercicios reales en distintos formatos, vas a
              asimilar muchisimo más rápido los conceptos que estudies en libros
              y veas en la cursada. Además vas a aprender como reponder a
              cientos de ejercicios de parciales.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Hay ejercicios de todos los parciales?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Sí, los cursos tienen ejercicios para el primer parcial, segundo
              parcial y para el final. Te acompañamos durante toda la cursada.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Por qué funciona nuestra metodologia de estudio?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Por que no solo hay que repasar la teoria una y otra vez para
              aprender un concepto nuevo. Hay que poner en practica todo lo que
              vamos aprendiendo, para digerir mejor todo el conocimiento que
              vamos adquieriendo. Nosotros te ofrecemos una plataforma para que
              hagas esto, de forma fácil, rápida y enfocada en ejercicios
              reales.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿tryCBC puede remplazar una cursada presencial/virtual del
                  CBC?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              No es a lo que aspiramos. El poder de tryCBC esta en AYUDAR a que
              asimiles conceptos, asi, luego de que curses cada día, podés
              estudiar con tryCBC y poner en práctica todo lo que veas en la
              cursada.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Cómo puedo acceder a los cursos?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Elegí el curso que quieras y apreta el boton 'Ir al curso' para
              acceder a el. Si no adquiriste tryCBC vas a ser redirigido a una
              pagina para que puedas comprar los cursos. Si ya lo adquiriste,
              vas acceder a el mismo.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
