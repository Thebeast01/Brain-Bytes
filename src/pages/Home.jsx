import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses-section/Courses";
// import Blog from "./components/blog/Blog"
import Features from "../components/Feature-section/Features";

import Footer from "../components/Footer/Footer";
// import Testimonal from "../components/testimonal/Testimonal";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Courses />
      <Features />
      {/* <Testimonal/> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
