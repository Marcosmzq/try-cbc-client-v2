import { Center, Container, Spinner } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/userAuth";
import { useUpgradeAccountMutation } from "../../graphql/generated/graphql";
import { NavBar } from "../nav-bar";
import { BuyResponsePageHeader } from "./header";
import { SuccessBuyResponse } from "./succeess-buy-alert";

interface BuyResponsePageProps {}

export const BuyResponsePage: React.FC<BuyResponsePageProps> = ({}) => {
  const { user } = useContext(AuthContext);
  const [upgradeAccount, { data, error, loading }] =
    useUpgradeAccountMutation();

  useEffect(() => {
    if (user) upgradeAccount();
  }, [user]);

  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py={12} minH="100vh">
        <BuyResponsePageHeader />
        {loading ||
          (!data && (
            <Center>
              <Spinner />
            </Center>
          ))}
        {data && (
          <SuccessBuyResponse response={data.upgradeCurrentUserAccount} />
        )}
      </Container>
    </>
  );
};
