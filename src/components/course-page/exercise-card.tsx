import { ArrowRightIcon } from "@chakra-ui/icons";
import { Text, Heading, Center, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

interface ExerciseCardProps {
  dificulty: string;
  redirect: string;
  exerciseName: string;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  dificulty,
  exerciseName,
  redirect,
}) => {
  const history = useHistory();
  return (
    <Center
      minH="250px"
      w="100%"
      border="1px"
      borderColor="gray.200"
      rounded="md"
      textAlign="center"
      bgColor="black"
      flexDir="column"
      gap={8}
      p={[6, 12]}
      boxShadow="md"
      as={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <Text variant="badge" p={2} color="primary" bg="white" rounded="full">
        Dificultad: {dificulty}
      </Text>
      <Heading as="h4" variant="h4" color="white">
        {exerciseName}
      </Heading>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        size="lg"
        variant="primaryOutline"
        rightIcon={<ArrowRightIcon />}
        onClick={() => history.push(redirect)}
      >
        Comenzar
      </Button>
    </Center>
  );
};
