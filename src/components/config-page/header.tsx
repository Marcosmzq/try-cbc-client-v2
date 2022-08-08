import { Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/userAuth";

interface ConfigPageHeaderProps {}

export const ConfigPageHeader: React.FC<ConfigPageHeaderProps> = ({}) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Bienvenido
        <Heading
          as="h2"
          variant="h2"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          {user?.username}
        </Heading>
        , Acá podés cambiar algunas configuraciones de tu cuenta.
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6}>
        Estamos en constante crecimiento, agregando nuevo contenido y
        funcionalidades.
      </Text>
    </>
  );
};
