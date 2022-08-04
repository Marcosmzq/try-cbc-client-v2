import { Grid, GridItem, Image, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RegisterPageHeader } from "./header";
import { RegisterForm } from "./register-form";

interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={8}
      p={[2, 4, 6]}
      justifyItems="center"
      alignItems="center"
      my={16}
    >
      <GridItem my={12} rowSpan={1} colSpan={2} w={["100%", "80%"]}>
        <RegisterPageHeader />
      </GridItem>
      <GridItem rowSpan={1} colSpan={[2, 2, 1]}>
        <Image
          width="450px"
          height="450px"
          src="/images/undraw_education.svg"
          alt="Web preview"
        />
      </GridItem>

      <GridItem dir="column" rowSpan={1} colSpan={[2, 2, 1]}>
        <RegisterForm />
        <Center>
          <Link to="/login">
            <Button my={4} variant="link" color="primary">
              ¿Ya tienes una cuenta?
            </Button>
          </Link>
        </Center>
      </GridItem>
    </Grid>
  );
};
