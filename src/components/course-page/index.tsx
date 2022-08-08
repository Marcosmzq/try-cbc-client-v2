import {
  Container,
  Divider,
  Box,
  Select,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ExamList } from "../../graphql/generated/graphql";
import { NavBar } from "../nav-bar";
import { ExerciseCard } from "./exercise-card";
import { CoursePageHeader } from "./header";

interface CoursePageProps {}

export const CoursePage: React.FC<CoursePageProps> = ({}) => {
  const [selectExam, setSelectExam] = useState(`${ExamList.First}`);
  //@ts-ignore
  const { course_id } = useParams();
  const history = useHistory();

  useEffect(() => {
    history.push("/under-construction");
  });

  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py={[12, 24]}>
        <>
          <CoursePageHeader />
          <Divider
            orientation="horizontal"
            border="1px"
            borderColor="gray.200"
            my={[12, 16]}
          />
          <Box px={[4, 12]}>
            <Heading
              as="h3"
              variant="h3"
              my={8}
              textAlign={["center", "start"]}
            >
              ¿Para qué parcial querés estudiar?
            </Heading>
            <Select
              onChange={(e) => setSelectExam(e.target.value)}
              size="lg"
              placeholder="Seleccionar parcial"
            >
              <option value={ExamList.First}>Primer parcial</option>
              <option value={ExamList.Second}>Segundo parcial</option>
              <option value={ExamList.Final}>Final</option>
            </Select>
          </Box>
          <Divider
            orientation="horizontal"
            border="1px"
            borderColor="gray.200"
            my={[12, 16]}
          />

          <Box px={[1, 12]}>
            <Heading
              as="h3"
              variant="h3"
              my={8}
              textAlign={["center", "start"]}
            >
              ¿Qué formato de ejercicio querés?
            </Heading>
            <SimpleGrid columns={[1, 1, 2, 3]} gap={8} py={8}>
              <ExerciseCard
                dificulty="FÁCIL"
                exerciseName="Trivia con múltiple choice"
                redirect={`/courses/${course_id}/exercise/${selectExam}/trivia`}
              />
              <ExerciseCard
                dificulty="MEDIA"
                exerciseName="Flashcards"
                redirect={`/courses/${course_id}/exercise/${selectExam}/flashcard`}
              />
              <ExerciseCard
                dificulty="ALTA"
                exerciseName="Flashcards expresivas"
                redirect={`/courses/${course_id}/exercise/${selectExam}/flashcard-expressive`}
              />
            </SimpleGrid>
          </Box>
        </>
      </Container>
    </>
  );
};
