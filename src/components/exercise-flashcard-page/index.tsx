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
  ExamList,
  useGetRandomFlashcardLazyQuery,
} from "../../graphql/generated/graphql";
import { DisplayGraphQLErrorDefault } from "../display-errors/graphql";
import { NavBar } from "../nav-bar";
import { FlashcardAnswers } from "./answers";
import { FlashcardBody } from "./body";
import { FlashcardHeader } from "./header";
import { FlashcardHowItWorks } from "./how-it-works";

interface ExerciseFlashcardPageProps {}

export const ExerciseFlashcardPage: React.FC<
  ExerciseFlashcardPageProps
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
            <FlashcardHeader
              triviaExam={parsedExam()}
              courseName={data.getRandomFlashcardByParams.course.name}
            />
            <FlashcardHowItWorks />
            <FlashcardBody
              flashcardStatement={data.getRandomFlashcardByParams.statement}
            />

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
                  ¡Ya pensé la respuesta!
                </Button>
              </Center>
            )}
            {activeTrivia && (
              <>
                {data.getRandomFlashcardByParams.feedback && (
                  <FlashcardBody
                    flashcardStatement={
                      data.getRandomFlashcardByParams.feedback
                    }
                  />
                )}
                <FlashcardAnswers
                  answers={data.getRandomFlashcardByParams.answers.filter(
                    (ans) => {
                      return ans.isTrue;
                    }
                  )}
                />
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
            {error && (
              <Center h="100vh">
                <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
              </Center>
            )}
          </VStack>
        )}
      </Container>
    </>
  );
};
