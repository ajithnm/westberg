import React from "react";
import SEO from "../components/seo";



import "../styles/bootstrap.css";
import "../styles/flaticon.css";
import "../styles/themify-icons.css";
import "../styles/style.css";

import Hero from "../components/hero";
 
import Ielts from "../components/ielts";
import Footer from "../components/footer";

export default function IELTS() {
  return (
    <>
      <SEO />
      <main>
        <Hero index={false} page="ielts-coaching-calicut"/>
        <Ielts/>
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
