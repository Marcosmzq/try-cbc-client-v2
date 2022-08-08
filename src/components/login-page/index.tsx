import { Button, Center, Grid, GridItem, Image } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";
import { NavBar } from "../nav-bar";
import { LoginPageHeader } from "./header";
import { LoginForm } from "./login-form";

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = ({}) => {
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
          <LoginPageHeader />
        </GridItem>

        <GridItem rowSpan={1} colSpan={[2, 2, 1]}>
          <Image
            width="450px"
            height="450px"
            src="/images/undraw_mobile_login.svg"
            alt="Web preview"
          />
        </GridItem>

        <GridItem dir="column" rowSpan={1} colSpan={[2, 2, 1]}>
          <LoginForm />
          {/*   <Center>
            <Link to="/forgot-password">
              <Button my={4} variant="link" color="primary">
                ¿Olvidaste tu contraseña?
              </Button>
            </Link>
          </Center> */}
        </GridItem>
      </Grid>
    </>
  );
};
