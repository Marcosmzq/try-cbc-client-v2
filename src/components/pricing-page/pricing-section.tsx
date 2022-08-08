import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface PrincingSectionDefaultProps {
  initPoint: string;
}

export const PrincingSectionDefault: React.FC<PrincingSectionDefaultProps> = ({
  initPoint,
}) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      minH="100vh"
      px={[4, 8]}
      py={[8, 16]}
      m={[2, 4]}
    >
      <Flex flexDir={["column", "row"]} justify="space-between" align="center">
        <Flex flexDir="column">
          <Heading
            as="h3"
            variant="h3"
            textAlign={["center", "start"]}
            color="secondary"
          >
            Todo lo que necesitas para aprobar por solo{" "}
            <Heading
              as="h4"
              variant="h4"
              d="inline"
              px={2}
              textDecoration="line-through"
              textDecorationColor="black"
            >
              $4999
            </Heading>
          </Heading>
          <Text variant="subtitle2" my={[8, 4]}>
            El pago incluye acceso a TODOS los cursos disponibles y el contenido
            que se agrege a futuro. Usamos MercadoPago para realizar los cobros,
            para que te sientas seguro.
          </Text>
        </Flex>
        <a target="_blank" href={initPoint}>
          <Button
            px={8}
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variant="secondarySolid"
            size="lg"
            w={["100%", "auto"]}
          >
            Comprar por $2499
          </Button>
        </a>
      </Flex>
      <Divider border="1px" color="gray.200" my={8} />
      <SimpleGrid columns={[1, 1, 3]} gap={16} px={[2, 4, 8]} py={[4, 8]}>
        <Flex flexDir="column">
          <Text variant="badge" color="secondary">
            Todo lo que necesitas
          </Text>
          <Heading as="h5" variant="h4" my={2}>
            En una sola plataforma
          </Heading>
          <Text variant="body1">
            tryCBC te ofrece las herramientas que te van a acompañar durante tu
            cursada, con ellas podés preparar los parciales de la mejor forma y
            aprobar más fácil.
          </Text>
        </Flex>
        <UnorderedList spacing={3} py={12}>
          <ListItem>Acceso a todos los cursos</ListItem>
          <ListItem>Acceso a contenido que se agrege en el futuro</ListItem>
          <ListItem>Acceso a ejercicios basados en parcial REALES</ListItem>
          <ListItem>
            Acceso a los múltiples formatos de ejercicios disponibles
          </ListItem>
        </UnorderedList>
        <UnorderedList spacing={3} py={12}>
          <ListItem>Podés acceder desde donde quieras y estudiar</ListItem>
          <ListItem>Fácil de usar, sin complicaciones</ListItem>
          <ListItem>Dinámico. Interactivo. Eficaz.</ListItem>
          <ListItem>
            Diseñado especialmente para que apruebes el CBC más fácil.
          </ListItem>
        </UnorderedList>
      </SimpleGrid>
    </Box>
  );
};
