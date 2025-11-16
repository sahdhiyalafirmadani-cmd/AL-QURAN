"use client";

import React from "react";
import PriceOne from "../ organisms/PriceOne";
import HeaderTop from "../ organisms/HeaderTop";
import HeaderUpper from "../ organisms/HeaderUpper";
import SliderOne from "../ organisms/SliderOne";
import Footer from "../ organisms/Footer";
import FeaturedOne from "../ organisms/FeaturedOne";
import WelcomeOne from "../ organisms/WelcomeOne";
import ServiceOne from "../ organisms/ServiceOne";
import StudentsOne from "../ organisms/StudentsOne";
import CoursesOne from "../ organisms/CoursesOne";
import CtaOne from "../ organisms/CtaOne";
import InstituteOne from "../ organisms/InstituteOne";
import TestimonialOne from "../ organisms/TestimonialOne";
import GalleryOne from "../ organisms/GalleryOne";
import NewsOne from "../ organisms/NewsOne";
import CtaTwo from "../ organisms/CtaTwo";

const Home01Dark: React.FC = () => {
  return (
    <div className="bg-[#0E110F] text-white">
      {/* ===== Top Header ===== */}
       <HeaderTop />
       <HeaderUpper theme="dark" />
        <SliderOne />
        <div className="bg-[#0f0e0b]">
        <FeaturedOne theme="dark" />
        </div>
         <WelcomeOne theme="dark" />
         <ServiceOne theme="dark" />
         <div className="bg-[#242F22] pb-[160px]">
         <StudentsOne theme="dark"/>
         </div>
         <CoursesOne theme="dark"/>
         <div className="bg-[#16221A]">
         <CtaOne />
         </div>
         <InstituteOne theme="dark"/>
         <TestimonialOne theme="dark"/>
         <PriceOne theme="dark" />
         <GalleryOne theme="dark"/>
         <NewsOne theme="dark"/>
       
         <div className="bg-[#131B16]">
       <CtaTwo />
       </div>
      <Footer />


      
     

    

     
    </div>
  );
};

export default Home01Dark;
