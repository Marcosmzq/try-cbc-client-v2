import { Heading, Text } from "@chakra-ui/react";

interface CoursePageHeaderProps {}

export const CoursePageHeader: React.FC<CoursePageHeaderProps> = ({}) => {
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Selecciona como queres estudiar y comenza a
        <Heading
          as="h2"
          variant="h2"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          aprender
        </Heading>
        con cientos de parciales.
      </Heading>
    </>
  );
};
