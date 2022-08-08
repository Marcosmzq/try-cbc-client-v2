import { Flex, Heading, Text } from "@chakra-ui/react";

interface FlashcardExpressiveBodyProps {
  flashcardStatement: string;
}

export const FlashcardExpressiveBody: React.FC<
  FlashcardExpressiveBodyProps
> = ({ flashcardStatement }) => {
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
        Lee el enunciado y escribi una respuesta que creas correcta, luego pulsa
        el boton!
      </Heading>
      <Text variant="subtitle2" py={4}>
        {flashcardStatement}
      </Text>
    </Flex>
  );
};
