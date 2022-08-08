import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, SimpleGrid, Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface FlashcardExpressiveHeaderProps {
  triviaExam: string;
  courseName: string;
}

export const FlashcardExpressiveHeader: React.FC<
  FlashcardExpressiveHeaderProps
> = ({ triviaExam, courseName }) => {
  const history = useHistory();
  return (
    <Flex
      border="1px"
      borderColor="gray.200"
      flexDir={["column", "row"]}
      align="center"
      justify={["center", "center", "center"]}
      minH="100px"
      px={[4, 8]}
      w="100%"
    >
      <SimpleGrid columns={[1, 1, 1, 3]} gap={12} px={[2, 4, 8]} py={[8, 6]}>
        <Button
          variant="link"
          color="black"
          leftIcon={<ArrowLeftIcon />}
          onClick={() => history.goBack()}
        >
          Volver a selección
        </Button>
        <Heading
          as="h5"
          variant="h5"
          textAlign="center"
          borderLeft={["none", "none", "none", "1px"]}
          borderRight={["none", "none", "none", "1px"]}
          borderRightColor="gray.200"
          px={3}
        >
          {courseName}
        </Heading>
        <Heading as="h5" variant="h5" textAlign="center" verticalAlign="center">
          {triviaExam}
        </Heading>
      </SimpleGrid>
    </Flex>
  );
};
