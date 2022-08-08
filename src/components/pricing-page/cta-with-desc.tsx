import { Center, Heading, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

interface PricingPageCTAWithDescProps {
  initPoint: string;
}

export const PricingPageCTAWithDesc: React.FC<PricingPageCTAWithDescProps> = ({
  initPoint,
}) => {
  const history = useHistory();
  return (
    <Center bg="secondary" flexDir="column" px={[6, 8]} py={[8, 12]}>
      <Heading
        textAlign="center"
        as="h3"
        variant="h2"
        my={8}
        color="white"
        w={["100%", "20ch"]}
      >
        Toma el control
      </Heading>
      <Text
        variant="body1"
        color="white"
        w={["100%", "60ch"]}
        textAlign="center"
      >
        Es momento de que tengas el control de tus exámenes, comienza a usar
        tryCBC y dejá el estrés y la ansiedad de los parciales atrás.
      </Text>

      <a target="_blank" href={initPoint}>
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          w={["100%", "auto"]}
          variant="secondaryOutline"
          size="lg"
          my={8}
        >
          Comprar con MercadoPago
        </Button>
      </a>
    </Center>
  );
};
