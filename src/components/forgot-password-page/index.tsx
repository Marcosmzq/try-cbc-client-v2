import { Container, SimpleGrid, Image, Center } from "@chakra-ui/react";
import { NavBar } from "../nav-bar";
import { ForgotPasswordPageHeader } from "./header";
import { SendRecoveryPasswordEmailForm } from "./send-recovery-password-email-form";

interface ForgotPasswordPageProps {}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({}) => {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py={12}>
        <ForgotPasswordPageHeader />
        <SimpleGrid columns={[1, 1, 2]} gap={[8]} px={[4, 12]} py={[12]}>
          <Image
            boxSize="450px"
            alt="Forgot password"
            src="/images/undraw_forgot_password.svg"
          />
          <Center>
            <SendRecoveryPasswordEmailForm />
          </Center>
        </SimpleGrid>
      </Container>
    </>
  );
};
