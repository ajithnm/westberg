import React from "react";
import Nav from "./nav";

const Hero = ({index, page}) => {
  return (
    <>
      <header className={`header_area ${!index ? 'non_index_page': ''}`}>
        <Nav index={index}/>
      </header>
      {index && <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner_content text-center">
                  <p className="text-uppercase">
                    Best education service provider Globally
                  </p>
                  <h2 className="text-uppercase mt-4 mb-5">
                    One Step Ahead This Season
                  </h2>
                  <div>
                    <a href="/" className="primary-btn2 mb-3 mb-sm-0">
                      learn more
                    </a>
                    <a href="/courses" className="primary-btn ml-sm-3 ml-0">
                      see courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {page === 'contact' && <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner_content text-center">
                <h2>Contact Us</h2>
                <div className="page_link">
                  <a href="/">Home</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>}
	{page === 'about' && <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner_content text-center">
                <h2>About</h2>
                <div className="page_link">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>}
	{page === 'ielts-coaching-calicut' && <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner_content text-center">
                <h2>IELTS</h2>
                <div className="page_link">
                  <a href="/">HOME</a>
                  <a href="/ielts-coaching-calicut">Ielts Coaching Calicut</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>}
	{page === 'fashion-designing' && <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner_content text-center">
                <h2>FASHION DESIGNING</h2>
                <div className="page_link">
                  <a href="/">HOME</a>
                  <a href="/fashion-designing">Fashion Designing</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>}
	{page === 'nebosh-coaching-kerala' && <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner_content text-center">
                <h2>NEBOSH</h2>
                <div className="page_link">
                  <a href="/">HOME</a>
                  <a href="/nebosh-coaching-kerala"> Nebosh Coaching Kerala</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>}
	{page === 'cma-course-calicut' && <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner_content text-center">
                <h2>CMA</h2>
                <div className="page_link">
                  <a href="/">HOME</a>
                  <a href="/cma-course-calicut">Cma Course Calicut</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>}
    {page === 'courses' && <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner_content text-center">
                <h2>Courses</h2>
                <div className="page_link">
                  <a href="/">Home</a>
                  <a href="/courses">Courses</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>}
    </>
  );
};

export default Hero;
