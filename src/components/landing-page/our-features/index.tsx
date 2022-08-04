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
          Everything you need to run
          <Heading
            as="h3"
            variant="h1"
            d="inline-block"
            px={2}
            bg="yellow.200"
            rounded="full"
          >
            your books.
          </Heading>
        </Heading>
        <Text textAlign="center" variant="subtitle1" my={[4, 6, 8]}>
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </Text>
      </Flex>

      <VStack w="100%" spacing={48}>
        <LandingPageFeatureSingleWithImg />
        <LandingPageFeatureSingleWithImg reverse={true} />
        <LandingPageFeatureSingleWithImg />
      </VStack>
    </Box>
  );
};
