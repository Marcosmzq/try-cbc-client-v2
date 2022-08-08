import { Flex, Heading, Text } from "@chakra-ui/react";

interface FlashcardBodyProps {
  flashcardStatement: string;
}

export const FlashcardBody: React.FC<FlashcardBodyProps> = ({
  flashcardStatement,
}) => {
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
        Lee el enunciado y intentá pensar cúal es la respuesta, una vez listo,
        apreta el boton!
      </Heading>
      <Text variant="subtitle2" py={4}>
        {flashcardStatement}
      </Text>
    </Flex>
  );
};
