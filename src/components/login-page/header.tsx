import { Heading, Text } from "@chakra-ui/react";

interface LoginPageHeaderProps {}

export const LoginPageHeader: React.FC<LoginPageHeaderProps> = ({}) => {
  return (
    <>
      <Heading p={1} textAlign="center" as="h2" variant="h2">
        Lorem ipsum dolor sit, amet consectetur adipisicing.
        <Heading
          as="h2"
          variant="h2"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          Lorem ipsum
        </Heading>
        Lorem ipsum dolor sit.
      </Heading>
      <Text variant="subtitle1" textAlign="center" my={6}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nisi iure
        illum illo, asperiores error?
      </Text>
    </>
  );
};
