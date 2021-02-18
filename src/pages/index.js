import React from "react"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Features from "../components/features"
import PopularCourses from "../components/popularcourses"
// import Register from "../components/register"
import Trainers from "../components/trainers"
import Become from "../components/become"
// import Testimonials from "../components/testimonials"
import Footer from "../components/footer"

import "../styles/bootstrap.css"
import "../styles/flaticon.css"
import "../styles/themify-icons.css"
import "../styles/style.css"


export default function Home() {
  return (
    <>
      <SEO />
      <main>
        <Hero index={true}/>
        <Features />
        <PopularCourses/>
        {/* <Register/> */}
        <Trainers/>
        {/* <Become/> */}
        {/* <Testimonials/> */}
        <Footer/>
      </main>
    </>
  )
}
