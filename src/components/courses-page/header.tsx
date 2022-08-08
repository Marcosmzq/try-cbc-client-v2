import { Heading, Text } from "@chakra-ui/react";

interface CoursesPageHeaderProps {}

export const CoursesPageHeader: React.FC<CoursesPageHeaderProps> = ({}) => {
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Estos son los cursos que tenemos disponibles actualmente.
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6}>
        Cada día agregamos nuevo contenido a nuestros cursos. Ellos estan
        diseñados especialmente para vos, para hacer que aprobar un parcial te
        resulte muy fácil. Para acceder a ellos debes tener una cuenta premium.
      </Text>
    </>
  );
};
