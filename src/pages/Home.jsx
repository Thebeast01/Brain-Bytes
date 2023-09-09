import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Courses from "../components/Courses-section/Courses";

import Features from "../components/Feature-section/Features";
import AboutUs from "../components/About-us/AboutUs";
import Footer from "../components/Footer/Footer";
// import Landingpage from "../src/components/Landingpage/Landingpage";
// import Testimonal from "../components/Testimonal/Testimonal";

import Testimonials from "../components/Testimonial/Testimonials";
import  Recentcourse from "../components/Recent-course/Recentcourse";
const Home = () => {
  return (

    <Fragment>
        <Header />
        <AboutUs />
       
    <Courses />
      <Features />
      <Testimonials/>
      <Recentcourse />
   <Footer />
   
    </Fragment>
  );
};

export default Home;
