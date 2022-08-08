import { Center, Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { NavBar } from "../nav-bar";
import { AddAnswerForm } from "./add-answer-form";

interface AddTriviaAnswerPageProps {}

export const AddTriviaAnswerPage: React.FC<AddTriviaAnswerPageProps> = ({}) => {
  //@ts-ignore
  const { trivia_id } = useParams();
  return (
    <Container maxWidth="container.xl" minH="100vh">
      <NavBar />
      <Center>
        <AddAnswerForm trivia_id={parseInt(trivia_id)} />
      </Center>
    </Container>
  );
};
