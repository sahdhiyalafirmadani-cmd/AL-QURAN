"use client";
import React from "react";
import HeaderTop from "../ organisms/HeaderTop";
import HeaderUpperHome02 from "../ organisms/HeaderUpperHome02";
import SliderTwo from "../ organisms/SliderTwo";
import WelcomeTwo from "../ organisms/WelcomeTwo";
import { CoursesTwo } from "../ organisms/CoursesTwo";
import CtaOne from "../ organisms/CtaOne";
import ServiceOne from "../ organisms/ServiceOne";
import InstituteOne from "../ organisms/InstituteOne";
import GalleryTwo from "../ organisms/GalleryTwo";
import TestimonialTwo from "../ organisms/TestimonialTwo";
import ScholarOne from "../ organisms/ScholarOne";
import NewsTwo from "../ organisms/NewsTwo";
import Footer from "../ organisms/Footer";

const Home02 = () => {
  return (
    <div className="relative w-full">
      {/* Header overlayed on slider */}
      <div className="absolute top-0 left-0 w-full z-50">
        <HeaderTop variant="style2" />
        <HeaderUpperHome02 />
      </div>

      {/* Slider starts from top */}
      <SliderTwo />
      <WelcomeTwo />

   <CoursesTwo />

{/* CTA overlapping top of ServiceOne */}
<div className="relative z-20 translate-y-1/2">
  <CtaOne />
</div>

{/* Service section */}
<ServiceOne homeVersion="home02" />
<InstituteOne />
<GalleryTwo />
<TestimonialTwo />
 
<ScholarOne />
<NewsTwo />
<Footer />
    </div>
  );
};

export default Home02;
