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
      <Text variant="badgeWithBg">For students of CBC</Text>
      <Heading p={1} textAlign="center" as="h1" variant="h1">
        Nothing great is made
        <Heading
          as="h1"
          variant="h1"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          alone
        </Heading>
        let us accompanish you.
      </Heading>
      <Text
        textAlign="center"
        variant="subtitle2"
        p={2}
        my={4}
        w={["100%", "60ch"]}
        wordBreak="break-word"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        beatae minus consequatur culpa. Assumenda molestias aliquam veritatis
        sit quos perferendis.
      </Text>
      <Link to="/courses">
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          size="lg"
          variant="primarySolid"
          rightIcon={<ArrowRightIcon />}
        >
          Start now
        </Button>
      </Link>
    </Flex>
  );
};
