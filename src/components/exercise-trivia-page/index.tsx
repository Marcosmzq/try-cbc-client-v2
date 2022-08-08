import { NetworkStatus } from "@apollo/client";
import {
  Center,
  Container,
  VStack,
  Button,
  Spinner,
  useBoolean,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ExamList,
  useGetRandomTriviaLazyQuery,
} from "../../graphql/generated/graphql";
import { DisplayGraphQLErrorDefault } from "../display-errors/graphql";
import { NavBar } from "../nav-bar";
import { TriviaAnswers } from "./answers";
import { TriviaBody } from "./body";
import { TriviaHeader } from "./header";
import { TriviaHowItWorks } from "./how-it-works";

interface ExerciseTriviaPageProps {}

export const ExerciseTriviaPage: React.FC<ExerciseTriviaPageProps> = ({}) => {
  const [activeTrivia, setActiveTrivia] = useBoolean(false);
  const [mutationErrors, setMutationErrors] = useState<String[]>([]);
  //@ts-ignore
  const { course_id, exam } = useParams();
  const [getRandomTrivia, { data, error, loading, refetch, networkStatus }] =
    useGetRandomTriviaLazyQuery({
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
    getRandomTrivia();
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
            <TriviaHeader
              courseName={data.getRandomTriviaByParams.course.name}
              triviaExam={parsedExam()}
            />
            <TriviaHowItWorks />
            <TriviaBody
              triviaStatement={data.getRandomTriviaByParams.statement}
            />
            <TriviaAnswers
              triviaIsActive={activeTrivia}
              activeTrivia={() => setActiveTrivia.on()}
              answers={data.getRandomTriviaByParams.answers}
            />
            {activeTrivia && (
              <>
                {data.getRandomTriviaByParams.feedback && (
                  <TriviaBody
                    triviaStatement={data.getRandomTriviaByParams.feedback}
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

        {error && (
          <Center h="100vh">
            <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
          </Center>
        )}
      </Container>
    </>
  );
};
