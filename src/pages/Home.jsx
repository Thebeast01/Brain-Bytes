import React, { Fragment } from "react";
// import Navbar from "../components/Header/Header";
import Courses from "../components/Courses-section/Courses";


import Features from "../components/Feature-section/Features";
// import AboutUs from "../components/About-us/AboutUs";
// import Footer from "../components/Footer/Footer";
// import Landingpage from "../src/components/Landingpage/Landingpage";
// import Testimonal from "../components/Testimonal/Testimonal";

// import Testimonials from "../components/Testimonial/Testimonials";
// import  Recentcourse from "../components/Recent-course/Recentcourse";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NotificationSection from "../components/notification/notification";
import Testimonials from "../components/Testimonial/Testimonials";
import  Recentcourse from "../components/Recent-course/Recentcourse";
import AboutUs from "../components/About-us/AboutUs";

const Home = () => {
  return (

    <Fragment>

        <Header />
        <AboutUs />
       
    <Courses />
      <Features />
      <Testimonials/>

        <Header/>
        <Slider />
        <AboutUs />
        
    <Courses />
      <Features />
      <Testimonials />
      <NotificationSection />

      <Recentcourse />
   <Footer />
   
    </Fragment>
  );
};

export default Home;
