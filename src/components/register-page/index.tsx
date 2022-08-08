import { Grid, GridItem, Image, Button, Center } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";
import { NavBar } from "../nav-bar";
import { RegisterPageHeader } from "./header";
import { RegisterForm } from "./register-form";

interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) history.push("/courses");
  }, [user]);
  return (
    <>
      <NavBar />

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
            src="/images/undraw_to_the_stars.svg"
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
    </>
  );
};
