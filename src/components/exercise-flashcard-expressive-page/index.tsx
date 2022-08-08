import { NetworkStatus } from "@apollo/client";
import {
  Button,
  Center,
  Container,
  Spinner,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetRandomFlashcardLazyQuery,
  ExamList,
} from "../../graphql/generated/graphql";
import { NavBar } from "../nav-bar";
import { FlashcardExpressiveAnswers } from "./answers";
import { FlashcardExpressiveBody } from "./body";
import { FlashcardExpressiveHeader } from "./header";
import { FlashcardExpressiveHowItWorks } from "./how-it-works";
import { FlashcardExpressiveInput } from "./input";

interface ExerciseFlashcardExpressivePageProps {}

export const ExerciseFlashcardExpressivePage: React.FC<
  ExerciseFlashcardExpressivePageProps
> = ({}) => {
  //@ts-ignore
  const { course_id, exam } = useParams();
  const [activeTrivia, setActiveTrivia] = useBoolean(false);
  const [mutationErrors, setMutationErrors] = useState<String[]>([]);

  const [getRandomFlashcard, { data, error, loading, refetch, networkStatus }] =
    useGetRandomFlashcardLazyQuery({
      variables: {
        course_id: parseInt(course_id),
        exam,
      },
      onError(err) {
        setMutationErrors([err.message]);
      },
      notifyOnNetworkStatusChange: true,
    });

  useEffect(() => {
    getRandomFlashcard();
  }, [course_id, exam]);

  const parsedExam = (): string => {
    let parsedExam = "";
    if (exam === ExamList.First) parsedExam = "Primer parcial";
    if (exam === ExamList.Second) parsedExam = "Segundo parcial";
    if (exam === ExamList.Final) parsedExam = "Final";
    return parsedExam;
  };
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py={12}>
        {loading && (
          <Center h="100vh">
            <Spinner />
          </Center>
        )}
        {networkStatus === NetworkStatus.refetch && (
          <Center h="100vh">
            <Spinner />
          </Center>
        )}
        {data && networkStatus !== NetworkStatus.refetch && (
          <VStack spacing={12} w="100%">
            <FlashcardExpressiveHeader
              triviaExam={parsedExam()}
              courseName={data.getRandomFlashcardByParams.course.name}
            />
            <FlashcardExpressiveHowItWorks />
            <FlashcardExpressiveBody
              flashcardStatement={data.getRandomFlashcardByParams.statement}
            />
            <FlashcardExpressiveInput />
            {!activeTrivia && (
              <Center w="100%">
                <Button
                  as={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  w={["100%", "auto"]}
                  variant="blackSolid"
                  size="lg"
                  onClick={() => {
                    setActiveTrivia.on();
                  }}
                >
                  Ver respuesta correcta
                </Button>
              </Center>
            )}
            {activeTrivia && (
              <>
                <FlashcardExpressiveAnswers
                  answers={data.getRandomFlashcardByParams.answers.filter(
                    (ans) => {
                      return ans.isTrue;
                    }
                  )}
                />
                {data.getRandomFlashcardByParams.feedback && (
                  <FlashcardExpressiveBody
                    flashcardStatement={
                      data.getRandomFlashcardByParams.feedback
                    }
                  />
                )}
                <Center w="100%">
                  <Button
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    w={["100%", "auto"]}
                    variant="blackSolid"
                    size="lg"
                    onClick={() => {
                      setActiveTrivia.off();
                      refetch();
                    }}
                  >
                    Siguiente ejercicio
                  </Button>
                </Center>
              </>
            )}
          </VStack>
        )}
      </Container>
    </>
  );
};
