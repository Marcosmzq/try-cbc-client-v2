import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface LandingPageFeatureSingleWithImgProps {
  reverse?: boolean;
}

export const LandingPageFeatureSingleWithImg: React.FC<
  LandingPageFeatureSingleWithImgProps
> = ({ reverse = false }) => {
  return (
    <Flex
      px={[6, 12, 16]}
      my={12}
      flexDir={reverse ? "row-reverse" : "row"}
      flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
    >
      <Box my={6} w={["100%", "100%", "2/5"]}>
        <Heading as="h5" variant="h3" textAlign={["center", "start"]}>
          Lorem ipsum dolor sit amet consectetur.
        </Heading>
        <Text
          variant="subtitle2"
          textAlign={["center", "start"]}
          py={4}
          w={["100%", "40ch"]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae quo
          ut culpa voluptatibus iste quidem ipsam eaque dolor placeat.
        </Text>
      </Box>
      <Box w={["100%", "100%", "3/5"]}>
        <Image
          boxSize="full"
          objectFit="fill"
          objectPosition="center"
          src="/images/undraw_education.svg"
          alt="Web preview"
        />
      </Box>
    </Flex>
  );
};
