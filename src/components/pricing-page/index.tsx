import { Center, Heading, Spinner } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/userAuth";
import { useGetCheckoutInitPointMutation } from "../../graphql/generated/graphql";
import { supportEmail } from "../../utils/supportEmail";
import { NavBar } from "../nav-bar";
import { PricingPageCTAWithDesc } from "./cta-with-desc";
import { DiscountPriceAlert } from "./discount-price-alert";
import { PricingPageFAQSection } from "./faq";
import { PrincingSectionDefault } from "./pricing-section";

interface PricingPageProps {}

export const PricingPage: React.FC<PricingPageProps> = ({}) => {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [getCheckoutInitPointMutation, { data, loading, error }] =
    useGetCheckoutInitPointMutation({
      //@ts-ignore
      variables: { user_id: user.id },
    });

  useEffect(() => {
    if (user) getCheckoutInitPointMutation();
    if (!user) history.push("/login");
  }, [user]);

  return (
    <>
      <NavBar />

      {loading && (
        <Center minH="100vh">
          <Spinner />
        </Center>
      )}
      {error && (
        <Center minH="100vh">
          <Heading as="h1" variant="h3" color="red.200">
            Parece que algo ha salido mal.. intenta ingresar más tarde o
            comunicate con el soporte {supportEmail}
          </Heading>
        </Center>
      )}
      {data && (
        <>
          <DiscountPriceAlert />
          <PrincingSectionDefault initPoint={data.getInitPoint} />
          <PricingPageFAQSection />
          <PricingPageCTAWithDesc initPoint={data.getInitPoint} />
        </>
      )}
    </>
  );
};
