import { Heading, Text, Center } from "@chakra-ui/react";

interface UnderConstrutionHeaderProps {}

export const UnderConstrutionHeader: React.FC<
  UnderConstrutionHeaderProps
> = ({}) => {
  return (
    <Center flexDir="column" w={["100%", "70%"]}>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Muchisimas gracias por apoyar esta iniciativa
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6}>
        Estamos terminando de configurar los cursos, EL 16 DE AGOSTO van a estar
        disponibles, junto con el inicio de la cursada. ¡Te esperamos con
        ansias!
      </Text>
    </Center>
  );
};
