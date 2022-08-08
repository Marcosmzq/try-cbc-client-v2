import { Center, Container, Image } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";
import { NavBar } from "../nav-bar";
import { UnderConstrutionHeader } from "./header";

interface UnderConstructionPageProps {}

export const UnderConstructionPage: React.FC<
  UnderConstructionPageProps
> = ({}) => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) history.push("/login");
  }, [user]);
  return (
    <Container maxW="container.xl" minH="100vh">
      <NavBar />
      <Center flexDir="column" py={[12, 24]}>
        <UnderConstrutionHeader />
        <Image
          width="450px"
          height="450px"
          src="/images/undraw_under_construction.svg"
          alt="Web preview"
        />
      </Center>
    </Container>
  );
};
