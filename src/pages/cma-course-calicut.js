import React from "react";
import SEO from "../components/seo";



import "../styles/bootstrap.css";
import "../styles/flaticon.css";
import "../styles/themify-icons.css";
import "../styles/style.css";

import Hero from "../components/hero";
 
import CMA from "../components/cma"; 
import Footer from "../components/footer";

export default function CMAPAGE() {
  return (
    <>
      <SEO page="cma-course-calicut"/>
      <main>
        <Hero index={false} page="cma-course-calicut"/>
        <CMA/>
        {/* <Features />
        <Courses/>
        <Register/>
        <Trainers/>
        <Become/>
        <Testimonials/> */}
        <Footer />
        {/* <Topics />
        <Schedule />
        <Speakers />
        <Join />
        <Footer /> */}
      </main>
    </>
  );
}
