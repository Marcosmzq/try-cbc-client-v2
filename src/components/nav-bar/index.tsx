import { Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { NavBarCTAButtons } from "./cta-buttons";
import { NavBarMenu } from "./nav-menu";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const history = useHistory();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      flexDir={["column", "column", "row"]}
      px={[4, 8]}
      py={8}
      bg="white"
      w="100%"
      borderBottom="1px"
      borderBottomColor="gray.200"
    >
      <Button
        as={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        variant="blackSolid"
        onClick={() => history.push("/")}
        size="md"
        m={1}
        w={["100%", "100%", "auto"]}
      >
        tryCBC
      </Button>

      <Flex flexDir={["column", "column", "row"]} w={["100%", "100%", "auto"]}>
        <NavBarCTAButtons />
        <NavBarMenu />
      </Flex>
    </Flex>
  );
};
