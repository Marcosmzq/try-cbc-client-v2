import { Box, Container, Divider, Heading, VStack } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";
import { useUpgradeAccountMutation } from "../../graphql/generated/graphql";
import { supportEmail } from "../../utils/supportEmail";
import { NavBar } from "../nav-bar";
import { ChangePasswordForm } from "./change-password-form";
import { ConfigPageHeader } from "./header";

interface ConfigPageProps {}

export const ConfigPage: React.FC<ConfigPageProps> = ({}) => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [upgradeAccount] = useUpgradeAccountMutation();

  useEffect(() => {
    if (user) upgradeAccount();
    if (!user) history.push("/login");
  }, [user]);

  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py={12}>
        <VStack spacing={8} divider={<Divider orientation="horizontal" />}>
          <ConfigPageHeader />
          <Box w={["100%", "70%"]}>
            <Heading as="h3" variant="h3" my={8} textAlign="center">
              Cambiar contraseña
            </Heading>
            <ChangePasswordForm />
          </Box>
          <Heading as="h5" variant="h5" textAlign="center">
            Si queres comunicarte con nosotros, podés hacerlo enviandonos un
            mail. {supportEmail}{" "}
          </Heading>
        </VStack>
      </Container>
    </>
  );
};
