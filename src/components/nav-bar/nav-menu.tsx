import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NavBarActiveMenu } from "./active-menu";

interface NavBarMenuProps {}

export const NavBarMenu: React.FC<NavBarMenuProps> = ({}) => {
  const [activeMenu, setActiveMenu] = useBoolean(false);
  return (
    <>
      {!activeMenu ? (
        <IconButton
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Active menu button"
          mx={[0, 2]}
          my={[1, 0]}
          bg="white"
          border="1px"
          onClick={setActiveMenu.on}
        />
      ) : (
        <NavBarActiveMenu closeMenu={() => setActiveMenu.off()} />
      )}
    </>
  );
};
