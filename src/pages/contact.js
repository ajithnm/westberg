import React from "react";
import SEO from "../components/seo";



import "../styles/bootstrap.css";
import "../styles/flaticon.css";
import "../styles/themify-icons.css";
import "../styles/style.css";

import Hero from "../components/hero";
import ContactDetails from "../components/contactdetails";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <SEO />
      <main>
        <Hero index={false} page="contact"/>
        <ContactDetails />
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
