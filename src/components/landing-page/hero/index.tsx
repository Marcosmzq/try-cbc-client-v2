import { Flex, Center, Image } from "@chakra-ui/react";
import { HeroContent } from "./HeroContent";

interface LandingPageHeroProps {}

export const LandingPageHero: React.FC<LandingPageHeroProps> = ({}) => {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      minH="100vh"
      m={2}
      p={2}
    >
      <Center my={[8, 12]}>
        <HeroContent />
      </Center>

      <Image
        width="100vw"
        height="100vh"
        objectFit="fill"
        objectPosition="center"
        src="/images/trivia-mockup.png"
        alt="Web preview"
        display={["none", "block"]}
      />

      <Image
        width="100vw"
        height="100vh"
        objectFit="fill"
        objectPosition="center"
        src="/images/undraw_education.svg"
        alt="Web preview"
        display={["block", "none"]}
      />
      <Image
        width="100vw"
        height="100vh"
        objectFit="fill"
        objectPosition="center"
        src="/images/undraw_education.svg"
        alt="Web preview"
        display={["block", "none"]}
      />
    </Flex>
  );
};
