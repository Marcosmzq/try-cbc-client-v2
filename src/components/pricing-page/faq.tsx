import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { supportEmail } from "../../utils/supportEmail";

interface PricingPageFAQSectionProps {}

export const PricingPageFAQSection: React.FC<
  PricingPageFAQSectionProps
> = ({}) => {
  return (
    <Flex
      flexDir="column"
      minH="100vh"
      align="center"
      px={[4, 12]}
      py={[16, 24]}
    >
      <Heading as="h3" variant="h3" textAlign="center" my={6}>
        Preguntas frecuentes
      </Heading>
      <Text variant="subtitle1" textAlign="center">
        Podés consultarnos en {supportEmail} para más información.
      </Text>

      <Accordion w={["100%", "70%"]} my={8}>
        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">¿Comprar en este web es seguro?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Si, totalmente. No guardamos datos sensibles de ningún tipo. Los
              cobros que realizamos se hacen a través de MercadoPago.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Es fácil el proceso de compra?{" "}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Absolutamente. Usamos MercadoPago para procesar las compras, la
              pasarela de pago solicita pocos datos y si ya dispones de una
              cuenta en MercadoPago, podes usar tu saldo para hacer la misma.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Cúanto tardo en recibir el acceso a los cursos?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Inmediatamente. Luego de que realices la compra, verificamos que
              esta se haya realizado correctamente y actualizamos tu cuenta.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Tengo que hacer algo luego de terminar la compra?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Si todo ha salido bien, entonces solo debes cerrar sesion e
              ingresar nuevamente para ver reflejados los cambios.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Cómo se si la compra salió en orden?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Luego de realizada la compra, vas a ser redirigido automaticamente
              a una página que te va a decir como salió el proceso.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  ¿Si tengo un problema puedo hablar con ustedes?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Sí, podes enviarnos un correo cuando quieras. {supportEmail}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
