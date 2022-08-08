import { VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TriviaAnswerSnnipetFragment } from "../../graphql/generated/graphql";

interface TriviaAnswersProps {
  triviaIsActive: boolean;
  activeTrivia: () => void;
  answers: TriviaAnswerSnnipetFragment[];
}

export const TriviaAnswers: React.FC<TriviaAnswersProps> = ({
  triviaIsActive,
  activeTrivia,
  answers,
}) => {
  return (
    <VStack
      as={motion.div}
      whileHover={{ scale: 1 }}
      px={[4, 6]}
      py={12}
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
            textAlign="center"
            cursor="pointer"
            variant="lead1"
            p={3}
            w="100%"
            onClick={activeTrivia}
            color={triviaIsActive ? "white" : "black"}
            borderColor={
              triviaIsActive
                ? answer.isTrue
                  ? "green.500"
                  : "red.500"
                : "gray.200"
            }
            bgColor={
              triviaIsActive
                ? answer.isTrue
                  ? "green.500"
                  : "red.500"
                : "white"
            }
          >
            {answer.statement}
          </Text>
        );
      })}
    </VStack>
  );
};
