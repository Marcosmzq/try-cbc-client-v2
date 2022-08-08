import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface SuccessChangePasswordAlertProps {}

export const SuccessChangePasswordAlert: React.FC<
  SuccessChangePasswordAlertProps
> = ({}) => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minHeight="200px"
      w="100%"
      p={[]}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={3} fontSize="lg">
        Application submitted!
      </AlertTitle>
      <AlertDescription maxWidth={["100%", "sm"]}>
        Thanks for submitting your application. Our team will get back to you
        soon. mirar en spam
      </AlertDescription>
    </Alert>
  );
};
