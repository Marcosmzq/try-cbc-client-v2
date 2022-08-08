import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroContentProps {}

export const HeroContent: React.FC<HeroContentProps> = ({}) => {
  return (
    <Flex
      w={["100%", "70%"]}
      minH="356px"
      flexDir="column"
      justify="center"
      align="center"
      mb={12}
    >
      <Text variant="badgeWithBg">Para estudiantes del CBC</Text>
      <Heading p={1} textAlign="center" as="h1" variant="h1">
        Una nueva forma de
        <Heading
          as="h1"
          variant="h1"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          aprobar
        </Heading>
        el CBC fácil.
      </Heading>
      <Text
        textAlign="center"
        variant="subtitle2"
        p={2}
        my={4}
        w={["100%", "60ch"]}
        wordBreak="break-word"
      >
        tryCBC es una plataforma que ofrece las herramientas que necesitas para
        estudiar, practicar y aprobar el CBC de forma MUY FÁCIL. No más
        complicaciones.
      </Text>
      <Link to="/register">
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          size="lg"
          variant="primarySolid"
          rightIcon={<ArrowRightIcon />}
        >
          Comenzar ya
        </Button>
      </Link>
    </Flex>
  );
};
