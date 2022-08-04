import { LandingPageCTASimple } from "./cta/cta-simple";
import { LandingPageCTAWithDesc } from "./cta/cta-with-desc";
import { LandingPageFAQSection } from "./faq";
import { LandingPageHero } from "./hero";
import { LandingPageOurFeaturesSection } from "./our-features";
import { LandingPageWhyChooseUsSection } from "./why-choose-us";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <>
      <LandingPageHero />
      <LandingPageOurFeaturesSection />
      <LandingPageCTAWithDesc />
      <LandingPageWhyChooseUsSection />
      <LandingPageFAQSection />
      <LandingPageCTASimple />
    </>
  );
};
