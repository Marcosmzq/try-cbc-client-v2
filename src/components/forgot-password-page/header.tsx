import { Heading, Text } from "@chakra-ui/react";

interface ForgotPasswordPageHeaderProps {}

export const ForgotPasswordPageHeader: React.FC<
  ForgotPasswordPageHeaderProps
> = ({}) => {
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        ¡Tranquilo! recuperar tu contraseña es
        <Heading
          as="h2"
          variant="h2"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          fácil y rápido
        </Heading>
        solo son unos simples pasos.
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6} px={[2, 12]}>
        Luego de ingresar tu correo, te vamos a enviar por correo electronico
        los pasos a seguir. Verifica la casilla de spam y correo no deseado una
        vez listo.
      </Text>
    </>
  );
};
