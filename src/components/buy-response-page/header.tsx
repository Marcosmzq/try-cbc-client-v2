import { Heading, Text } from "@chakra-ui/react";
import { supportEmail } from "../../utils/supportEmail";

interface BuyResponsePageHeaderProps {}

export const BuyResponsePageHeader: React.FC<
  BuyResponsePageHeaderProps
> = ({}) => {
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Gracias por{" "}
        <Heading
          as="h2"
          variant="h2"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          apoyar
        </Heading>{" "}
        este proyecto.
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6}>
        Con tu contribución podemos mejorar nuestro servicio y darte lo mejor!
        Quedamos a tu disposicion. {supportEmail}
      </Text>
    </>
  );
};
