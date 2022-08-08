import { Center, Heading, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LandingPageCTAWithDescProps {}

export const LandingPageCTAWithDesc: React.FC<
  LandingPageCTAWithDescProps
> = ({}) => {
  return (
    <Center bg="secondary" flexDir="column" px={[8, 12]} py={[16, 24, 32]}>
      <Heading
        textAlign="center"
        as="h3"
        variant="h2"
        my={8}
        color="white"
        w={["100%", "20ch"]}
      >
        Potencia tu cursada, aproba más fácil.
      </Heading>
      <Text
        variant="body1"
        color="white"
        w={["100%", "60ch"]}
        textAlign="center"
      >
        Estudia desde cualquier lugar, dispositivo y en cualquier horario.
        Sentite libre de aprender de una mejor forma, cuando, donde y como
        quieras.
      </Text>
      <Link to="/register">
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          w={["100%", "auto"]}
          variant="secondaryOutline"
          size="lg"
          my={8}
        >
          Crea cuenta ahora
        </Button>
      </Link>
    </Center>
  );
};
