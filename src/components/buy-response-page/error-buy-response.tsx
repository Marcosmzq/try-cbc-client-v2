import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Text,
} from "@chakra-ui/react";
import { supportEmail } from "../../utils/supportEmail";

interface ErrorBuyResponseProps {}

export const ErrorBuyResponse: React.FC<ErrorBuyResponseProps> = ({}) => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minHeight="200px"
      px={[3, 8]}
      py={10}
      my={10}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle my={4}>
        <Heading as="h5" variant="h5">
          Application submitted!
        </Heading>
      </AlertTitle>
      <AlertDescription maxWidth="xl">
        <Text variant="subtitle2">
          Thanks for submitting your application. Our team will get back to you
          soon. Quiza el pago aún se encuentra pendiente. Quedamos a tu
          disposición. {supportEmail}
        </Text>
      </AlertDescription>
    </Alert>
  );
};
