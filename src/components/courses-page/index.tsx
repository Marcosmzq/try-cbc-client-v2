import { Container, Divider, SimpleGrid } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";
import { useGetAllCoursesQuery } from "../../graphql/generated/graphql";
import { NavBar } from "../nav-bar";
import { CourseCard } from "./course-card";
import { CoursesPageFAQSectionProps } from "./faq";
import { CoursesPageHeader } from "./header";

interface CoursesPageProps {}

export const CoursesPage: React.FC<CoursesPageProps> = ({}) => {
  const { data, loading, error } = useGetAllCoursesQuery();
  const history = useHistory();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) history.push("/login");
  }, [user]);
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py={[12, 24]}>
        <CoursesPageHeader />
        <Divider
          orientation="horizontal"
          border="1px"
          borderColor="gray.200"
          my={[12, 16]}
        />

        {loading && "loading"}
        {data && (
          <SimpleGrid columns={[1, 1, 2, 3]} gap={8} my={8}>
            {data.findAllCourses.map((course) => {
              return (
                <CourseCard courseId={course.id} courseName={course.name} />
              );
            })}
          </SimpleGrid>
        )}
        <Divider
          orientation="horizontal"
          border="1px"
          borderColor="gray.200"
          my={[12, 16]}
        />

        <CoursesPageFAQSectionProps />
      </Container>
    </>
  );
};
