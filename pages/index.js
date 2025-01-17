import React from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import MainBanner from "../components/HomeThree/MainBanner";
import OurFeaturedSolutions from "../components/HomeThree/OurFeaturedSolutions";
import AboutUs from "../components/HomeThree/AboutUs";
import Services from "../components/HomeThree/Services";
import FunFacts from "../components/HomeThree/FunFacts";
import Projects from "../components/HomeThree/Projects";
import OurPricingPlan from "../components/HomeThree/OurPricingPlan";
import Testimonials from "../components/HomeThree/Testimonials";
import BlogPost from "../components/Common/BlogPost";
import FreeTrialArea from "../components/Common/FreeTrialArea";
import PartnerSlider from "../components/Common/PartnerSlider";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      <NavbarFour />

      <MainBanner />

      <Services />

      <FunFacts />

      <Projects />

      <Testimonials />

      <BlogPost />
      
      <PartnerSlider />

      <Footer />
    </>
  );
};

export default Index;
