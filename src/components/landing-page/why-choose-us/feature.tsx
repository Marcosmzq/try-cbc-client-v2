import { Flex, Heading, Text, Image } from "@chakra-ui/react";

interface WhyChooseUsFeatureCardProps {
  title: string;
  desc: string;
  imgSrc: string;
}

export const WhyChooseUsFeatureCard: React.FC<WhyChooseUsFeatureCardProps> = ({
  title,
  desc,
  imgSrc,
}) => {
  return (
    <Flex flexDir="column">
      <Image
        boxSize="350px"
        src={imgSrc}
        alt="test"
        objectFit="contain"
        objectPosition="center"
        p={3}
      />
      <Flex
        flexDir="column"
        p={[3, 6]}
        justify="center"
        bg="gray.100"
        roundedBottom="3xl"
      >
        <Heading as="h5" variant="h5" my={2}>
          {title}
        </Heading>
        <Text variant="body1">{desc}</Text>
      </Flex>
    </Flex>
  );
};
