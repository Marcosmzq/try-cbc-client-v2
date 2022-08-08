import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Text,
} from "@chakra-ui/react";

interface SuccessBuyResponseProps {
  response: string;
}

export const SuccessBuyResponse: React.FC<SuccessBuyResponseProps> = ({
  response,
}) => {
  return (
    <Alert
      status="success"
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
          Ya intentamos hacer el pago!
        </Heading>
      </AlertTitle>
      <AlertDescription maxWidth="xl">
        <Text variant="subtitle2">{response}</Text>
      </AlertDescription>
    </Alert>
  );
};
