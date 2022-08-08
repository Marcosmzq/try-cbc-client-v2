import { Flex, Heading, VStack, Text, Box } from "@chakra-ui/react";
import { LandingPageFeatureSingleWithImg } from "./feature";

interface LandingPageOurFeaturesSectionProps {}

export const LandingPageOurFeaturesSection: React.FC<
  LandingPageOurFeaturesSectionProps
> = ({}) => {
  return (
    <Box px={[1, 4, 8]} py={12} my={12}>
      <Flex my={12} py={12} flexDir="column" justify="center" align="center">
        <Heading as="h3" variant="h1" my={4} textAlign="center">
          Todo lo que necesitas para
          <Heading
            as="h3"
            variant="h1"
            d="inline-block"
            px={2}
            bg="yellow.200"
            rounded="full"
          >
            aprobar
          </Heading>
          en un lugar.
        </Heading>
        <Text textAlign="center" variant="subtitle1" my={[4, 6, 8]}>
          Bueno, todo lo que necesitas si te interesa darle un nuevo enfoque más
          practico a tu cursada...
        </Text>
      </Flex>

      <VStack w="100%" spacing={48}>
        <LandingPageFeatureSingleWithImg
          title="Una nueva perspectiva"
          desc="¿Cúal es la mejor forma de aprender algo rápido? Llevar a la practica todos los nuevos conceptos, ideas y textos que leemos y estudiamos. tryCBC te ofrece la oportunidad única de practicar y estudiar con ejercicios REALES tomados en parciales del CBC."
          imgSrc="/images/undraw_lightbulb_moment.svg"
        />
        <LandingPageFeatureSingleWithImg
          reverse={true}
          title="Aprobar sin esfuerzo"
          desc="Sin esfuerzo... mejor dicho, sin tanto esfuerzo. Al practicar con parciales reales, vas a asimilar todo el material de estudio que te brindan en las cursadas de una forma mucho más fácil y rápida, ademas vas a aprender como responder a cientos de ejercicios reales."
          imgSrc="/images/undraw_outer_space.svg"
        />
        <LandingPageFeatureSingleWithImg
          title="¿Te aburris estudiando?"
          desc="Te ofrecemos una alternativa diferente a estudiar que solo releer apuntes. Te damos ejercicios dinámicos, innovadores, interactivos, que se ajustan a tu nivel y que van a llevar tu aprendizaje a otra dimension."
          imgSrc="/images/undraw_select_player.svg"
        />
      </VStack>
    </Box>
  );
};
