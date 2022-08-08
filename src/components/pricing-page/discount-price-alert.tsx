import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";

interface DiscountPriceAlertProps {}

export const DiscountPriceAlert: React.FC<DiscountPriceAlertProps> = ({}) => {
  return (
    <Box p={4} my={4}>
      <Alert
        p={8}
        status="info"
        bgColor="secondary"
        color="white"
        d="flex"
        flexDir="column"
        gap={6}
        rounded="md"
        boxShadow="md"
        textAlign="center"
      >
        <AlertIcon color="white" />
        <AlertTitle>
          <Heading as="h5" variant="h5">
            ¡Tenemos un descuento especial!
          </Heading>
        </AlertTitle>
        <AlertDescription>
          <Text variant="body">
            Tenemos 50% de descuento hasta el 16 de agosto! Aprovecha el
            descuento y comenzá a cursar de la mejor forma posible!
          </Text>
        </AlertDescription>
      </Alert>
    </Box>
  );
};
