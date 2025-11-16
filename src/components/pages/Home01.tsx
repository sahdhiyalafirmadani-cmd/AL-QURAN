import CoursesOne from "@/components/ organisms/CoursesOne";
import CtaOne from "@/components/ organisms/CtaOne";
import CtaTwo from "@/components/ organisms/CtaTwo";
import FeaturedOne from "@/components/ organisms/FeaturedOne";
import Footer from "@/components/ organisms/Footer";
import GalleryOne from "@/components/ organisms/GalleryOne";
import HeaderTop from "@/components/ organisms/HeaderTop";
import HeaderUpper from "@/components/ organisms/HeaderUpper";
import InstituteOne from "@/components/ organisms/InstituteOne";
import NewsOne from "@/components/ organisms/NewsOne";
import PriceOne from "@/components/ organisms/PriceOne";
import ServiceOne from "@/components/ organisms/ServiceOne";
import SliderOne from "@/components/ organisms/SliderOne";
import StudentsOne from "@/components/ organisms/StudentsOne";
import TestimonialOne from "@/components/ organisms/TestimonialOne";
import WelcomeOne from "@/components/ organisms/WelcomeOne";



export default function Home01() {
  return (
    <>
      <HeaderTop />
      <HeaderUpper />
       <SliderOne />
       <FeaturedOne />
       <WelcomeOne />
       <ServiceOne />
       <StudentsOne />
        <CoursesOne />
      <CtaOne />
       <InstituteOne />
       <TestimonialOne />
       <PriceOne />
       <GalleryOne />
        < NewsOne />
        <CtaTwo />
        <Footer />
    </>
  );
}
