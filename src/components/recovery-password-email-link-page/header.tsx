import { Heading, Text } from "@chakra-ui/react";

interface RecoveryPasswordPageHeaderProps {}

export const RecoveryPasswordPageHeader: React.FC<
  RecoveryPasswordPageHeaderProps
> = ({}) => {
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Ya casi recuperas tu cuenta
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6}>
        Si el link con el que ingresaste a esta pagina es viejo, puede que no
        funcione, si es el caso, solicitá otro.
      </Text>
    </>
  );
};
