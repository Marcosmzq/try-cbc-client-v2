import { Center, Heading } from "@chakra-ui/react";
import { supportEmail } from "../../utils/supportEmail";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Center w="100%" minH="200px" bgColor="black">
      <Heading as="h4" variant="h4" color="white">
        {supportEmail}
      </Heading>
    </Center>
  );
};
