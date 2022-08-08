import { VStack, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TriviaAnswerSnnipetFragment } from "../../graphql/generated/graphql";

interface FlashcardExpressiveAnswersProps {
  answers: TriviaAnswerSnnipetFragment[];
}

export const FlashcardExpressiveAnswers: React.FC<
  FlashcardExpressiveAnswersProps
> = ({ answers }) => {
  return (
    <>
      <Heading as="h5" variant="h5" textAlign="center">
        La respuesta correcta es:
      </Heading>
      <VStack
        as={motion.div}
        whileHover={{ scale: 1 }}
        px={[4, 6]}
        py={8}
        border="1px"
        borderColor="gray.200"
        w="100%"
        spacing={4}
      >
        {answers.map((answer) => {
          return (
            <Text
              as={motion.p}
              whileHover={{ scale: 1.02 }}
              border="1px"
              borderColor="green.200"
              textAlign="center"
              cursor="pointer"
              variant="lead1"
              p={3}
              w="100%"
              backgroundColor="green.500"
              color="white"
            >
              {answer.statement}
            </Text>
          );
        })}
      </VStack>
    </>
  );
};
