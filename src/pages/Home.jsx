import React, { Fragment } from "react";

import Courses from "../components/Courses-section/Courses";

import Features from "../components/Feature-section/Features";

import Footer from "../components/Footer/Footer";
// import Testimonal from "../components/testimonal/Testimonal";
const Home = () => {
  return (
    <Fragment>
    <Courses />
      <Features />
      {/* <Testimonal/> */}
   <Footer />
   
    </Fragment>
  );
};

export default Home;
