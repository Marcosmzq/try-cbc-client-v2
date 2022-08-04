import { Center, Button, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LandingPageCTASimpleProps {}

export const LandingPageCTASimple: React.FC<
  LandingPageCTASimpleProps
> = ({}) => {
  return (
    <Center
      flexDir="column"
      px={[6, 16]}
      py={[12, 24]}
      bg="secondary"
      color="white"
    >
      <Heading textAlign={["center"]} as="h2" variant="h2" my={8}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        beatae porro accusantium similique a ex totam, sunt sequi odio tenetur.
      </Heading>
      <Link to="/courses">
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          w={["100%", "auto"]}
          variant="secondaryOutline"
        >
          Start now
        </Button>
      </Link>
    </Center>
  );
};
