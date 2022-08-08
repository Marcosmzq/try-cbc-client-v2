import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface LandingPageFeatureSingleWithImgProps {
  reverse?: boolean;
  title: string;
  desc: string;
  imgSrc: string;
}

export const LandingPageFeatureSingleWithImg: React.FC<
  LandingPageFeatureSingleWithImgProps
> = ({ reverse = false, title, desc, imgSrc }) => {
  return (
    <Flex
      px={[6, 12, 16]}
      my={6}
      flexDir={reverse ? "row-reverse" : "row"}
      flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
      align="center"
      gap={[4, 12]}
    >
      <Box my={6} w={["100%", "100%", "2/5"]}>
        <Heading as="h5" variant="h3" textAlign={["center", "start"]}>
          {title}
        </Heading>
        <Text
          variant="subtitle2"
          textAlign={["center", "start"]}
          py={4}
          w={["100%", "40ch"]}
        >
          {desc}
        </Text>
      </Box>
      <Box w={["100%", "100%", "3/5"]}>
        <Image
          boxSize="full"
          objectFit="fill"
          objectPosition="center"
          src={imgSrc}
          alt="Web preview"
        />
      </Box>
    </Flex>
  );
};
