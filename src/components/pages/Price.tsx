import Footer from "../ organisms/Footer";
import HeaderTop from "../ organisms/HeaderTop";
import HeaderUpper from "../ organisms/HeaderUpper";
import PageTitleSection from "../ organisms/PageTitleSection";
import PricingCardsSection from "../ organisms/PricingCardsSection";



export default function Price() {
  return (
    <>
      
        <HeaderTop />
        <HeaderUpper/>
         <PageTitleSection
        title="Pricing Plan"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pricing Plan" },
        ]}
      />
       <PricingCardsSection />
       <Footer />
    </>
  );
}
