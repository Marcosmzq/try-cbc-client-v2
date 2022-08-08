import { Heading, Text } from "@chakra-ui/react";
import { supportEmail } from "../../utils/supportEmail";

interface LoginPageHeaderProps {}

export const LoginPageHeader: React.FC<LoginPageHeaderProps> = ({}) => {
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Muchas gracias por
        <Heading
          as="h2"
          variant="h2"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          elegirnos
        </Heading>
        ahora aproba más fácil
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6}>
        Podes darnos tu feedback para mejorar y darte el mejor servicio.{" "}
        {supportEmail}
      </Text>
    </>
  );
};
