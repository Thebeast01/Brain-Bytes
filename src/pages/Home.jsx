import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Courses from "../components/Courses-section/Courses";
// import Blog from "./components/blog/Blog"
import Features from "../components/Feature-section/Features";

import Footer from "../components/Footer/Footer";
// import Testimonal from "../components/testimonal/Testimonal";
const Home = () => {
  return (

    <Fragment>
        <Header />
    <Courses />
      <Features />
      {/* <Testimonal/> */}
   <Footer />
   
    </Fragment>
  );
};

export default Home;
