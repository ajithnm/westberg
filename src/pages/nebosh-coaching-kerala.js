import React from "react";
import SEO from "../components/seo";



import "../styles/bootstrap.css";
import "../styles/flaticon.css";
import "../styles/themify-icons.css";
import "../styles/style.css";

import Hero from "../components/hero";
 
import Fashion from "../components/fashion";
import Nebosh from "../components/nebosh";
import Footer from "../components/footer";

export default function FASHION() {
  return (
    <>
      <SEO />
      <main>
        <Hero index={false} page="nebosh-coaching-kerala"/>
        <Nebosh/>
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
