import { Flex, Heading, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { WhyChooseUsFeatureCard } from "./feature";

interface LandingPageWhyChooseUsSectionProps {}

export const LandingPageWhyChooseUsSection: React.FC<
  LandingPageWhyChooseUsSectionProps
> = ({}) => {
  return (
    <Box px={[1, 4, 8]} py={12} my={12}>
      <Flex my={12} py={12} flexDir="column" justify="center" align="center">
        <Heading as="h3" variant="h1" my={2} textAlign="center">
          ¿Por qué elegir
          <Heading
            as="h3"
            variant="h1"
            d="inline-block"
            px={3}
            bg="yellow.200"
            rounded="full"
          >
            tryCBC?
          </Heading>
        </Heading>
        <Text textAlign="center" variant="subtitle1" my={[3, 4, 6]}>
          Por que tenemos una solución única para tu cursada del CBC, que no vas
          a encontrar en ningún otro lugar y a un precio especial para vos.
        </Text>
      </Flex>

      <SimpleGrid columns={[1, 2, 2, 4]} gap={6}>
        <WhyChooseUsFeatureCard
          title="Fácil de usar"
          desc="Podés acceder a cientos de ejercicios en múltiples formatos sin complicaciones ni dramas, dejamos todo listo para que te centres solo en aprender rápido."
          imgSrc="/images/undraw_happy_news.svg"
        />
        <WhyChooseUsFeatureCard
          title="Dinámico. Interactivo. Eficaz."
          desc="Proba una variedad de ejercicios, que son presentados en forma de juego, asi de una forma agradable y eficaz, aprendes mientras juegas."
          imgSrc="/images/undraw_old_day.svg"
        />
        <WhyChooseUsFeatureCard
          title="Accesible."
          desc="Podés prácticar la materia que quieras cuando y donde quieras, tryCBC esta las 24hs disponible para vos!"
          imgSrc="/images/undraw_accept_terms.svg"
        />
        <WhyChooseUsFeatureCard
          title="Precio de oferta"
          desc="Te ofrecemos todas estas caracteristicas, a un precio accesible e inmejorable. Por muy poco te llevas mucho."
          imgSrc="/images/undraw_discount.svg"
        />
      </SimpleGrid>
    </Box>
  );
};
