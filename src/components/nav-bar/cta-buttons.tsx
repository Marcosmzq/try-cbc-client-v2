import { Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";

interface NavBarCTAButtonsProps {}

export const NavBarCTAButtons: React.FC<NavBarCTAButtonsProps> = ({}) => {
  const { user, logout } = useContext(AuthContext);
  const history = useHistory();

  return (
    <>
      {user && (
        <Button
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          variant="solid"
          colorScheme="red"
          size="md"
          w={["100%", "100%", "auto"]}
          onClick={() => {
            logout();
            history.push("/login");
          }}
        >
          Cerrar sesion
        </Button>
      )}
      {!user && (
        <Flex
          flexDir={["column", "column", "row"]}
          w={["100%", "100%", "auto"]}
        >
          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variant="primaryOutline"
            size="md"
            mx={[0, 1]}
            my={[1, 0]}
            w={["100%", "100%", "auto"]}
          >
            <Link to="/login">Iniciar sesion</Link>
          </Button>

          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variant="primarySolid"
            size="md"
            mx={[0, 1]}
            my={[1, 0]}
            w={["100%", "100%", "auto"]}
          >
            <Link to="/register">Crear cuenta</Link>
          </Button>
        </Flex>
      )}
    </>
  );
};
