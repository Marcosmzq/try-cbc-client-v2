import { Heading, Text } from "@chakra-ui/react";

interface RegisterPageHeaderProps {}

export const RegisterPageHeader: React.FC<RegisterPageHeaderProps> = ({}) => {
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Dale un nuevo
        <Heading
          as="h2"
          variant="h2"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          enfoque
        </Heading>
        al CBC y disfrutalo más que nunca.
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6}>
        Crea una cuenta y mira todos los cursos disponibles que tenemos para
        vos.
      </Text>
    </>
  );
};
