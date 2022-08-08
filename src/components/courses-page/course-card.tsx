import { ArrowRightIcon } from "@chakra-ui/icons";
import { Heading, Center, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";
import { UserRole } from "../../graphql/generated/graphql";

interface CourseCardProps {
  courseName: string;
  courseId: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  courseName,
  courseId,
}) => {
  const { user } = useContext(AuthContext);
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
      <Heading as="h4" variant="h4" color="white">
        {courseName}
      </Heading>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        size="lg"
        variant="primaryOutline"
        rightIcon={<ArrowRightIcon />}
        // onClick={() => history.push(`/courses/${courseId}`)}
        onClick={() => {
          if (!user) {
            history.push("/register");
          }
          if (user?.role !== UserRole.PremiumUser) {
            history.push("/pricing");
          }

          if (user?.role === UserRole.PremiumUser) {
            history.push("/under-construction");
          }
        }}
      >
        Ir al curso
      </Button>
    </Center>
  );
};
