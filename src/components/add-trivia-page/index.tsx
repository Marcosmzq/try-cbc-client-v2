import { Center } from "@chakra-ui/react";
import { AddTriviaForm } from "./add-trivia-form";

interface AddTriviaPageProps {}

export const AddTriviaPage: React.FC<AddTriviaPageProps> = ({}) => {
  return (
    <Center minH="100vh" w="100%">
      <AddTriviaForm />
    </Center>
  );
};
