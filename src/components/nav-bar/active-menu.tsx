import { Button, Center, CloseButton, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";
import { UserRole } from "../../graphql/generated/graphql";

interface NavBarActiveMenuProps {
  closeMenu: () => void;
}

export const NavBarActiveMenu: React.FC<NavBarActiveMenuProps> = ({
  closeMenu,
}) => {
  const { user, logout } = useContext(AuthContext);
  const history = useHistory();

  return (
    <Center
      w="100%"
      pos="fixed"
      zIndex="overlay"
      top="0"
      left="0"
      bg="white"
      minH="100vh"
      p={4}
    >
      <VStack w={["100%", "60%"]} spacing={6}>
        <CloseButton
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          size="lg"
          onClick={() => closeMenu()}
        />
        {user && (
          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variant="blackSolid"
            size="md"
            isFullWidth
            onClick={() => history.push("/config")}
          >
            Configuración
          </Button>
        )}
        {user && (
          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variant="blackSolid"
            size="md"
            isFullWidth
            onClick={() => history.push("/courses")}
          >
            Cursos
          </Button>
        )}

        {user && user.role !== UserRole.PremiumUser && (
          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variant="blackSolid"
            size="md"
            isFullWidth
            onClick={() => history.push("/pricing")}
          >
            Precio de tryCBC
          </Button>
        )}
        {user && (
          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variant="solid"
            colorScheme="red"
            size="md"
            isFullWidth
            onClick={() => {
              logout();
              history.push("/login");
            }}
          >
            Cerrar sesion
          </Button>
        )}
        {!user && (
          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variant="primaryOutline"
            size="md"
            isFullWidth
            onClick={() => history.push("/login")}
          >
            Iniciar sesion
          </Button>
        )}
        {!user && (
          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variant="primarySolid"
            size="md"
            isFullWidth
            onClick={() => history.push("/register")}
          >
            Crear cuenta
          </Button>
        )}
      </VStack>
    </Center>
  );
};
