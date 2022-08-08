import { Container, Image, SimpleGrid, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { NavBar } from "../nav-bar";
import { ChangePasswordWithTokenForm } from "./change-password-with-token-form";
import { RecoveryPasswordPageHeader } from "./header";

interface RecoveryPasswordEmailLinkPageProps {}

export const RecoveryPasswordEmailLinkPage: React.FC<
  RecoveryPasswordEmailLinkPageProps
> = ({}) => {
  //@ts-ignore
  const { access_token } = useParams();
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py={12}>
        <RecoveryPasswordPageHeader />
        <SimpleGrid columns={[1, 1, 2]} gap={[8]} px={[4, 12]} py={[12]}>
          <Image
            boxSize="450px"
            alt="Forgot password"
            src="/images/undraw_forgot_password.svg"
          />
          <Center>
            <ChangePasswordWithTokenForm access_token={access_token} />
          </Center>
        </SimpleGrid>
      </Container>{" "}
    </>
  );
};
