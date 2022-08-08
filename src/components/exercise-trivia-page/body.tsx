import { Flex, Heading, Text } from "@chakra-ui/react";

interface TriviaBodyProps {
  triviaStatement: string;
}

export const TriviaBody: React.FC<TriviaBodyProps> = ({ triviaStatement }) => {
  return (
    <Flex
      py={12}
      px={[4, 8]}
      border="1px"
      borderColor="gray.200"
      w="100%"
      flexDir="column"
      justify="center"
    >
      <Heading as="h5" variant="h5" textAlign={["center", "start"]} py={4}>
        Lee el enunciado y selecciona la respuesta correcta.
      </Heading>
      <Text variant="subtitle2" py={4}>
        {triviaStatement}
      </Text>
    </Flex>
  );
};
