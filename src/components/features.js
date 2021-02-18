import React from "react";

const Features = () => (
  <section className="feature_area section_gap_top">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="main_title">
            <h2 className="mb-3">Awesome Feature</h2>
            <p>World class features for every course you choose</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single_feature">
            <div className="icon">
              <span className="flaticon-student"></span>
            </div>
            <div className="desc">
              <h4 className="mt-3 mb-2">Qualified trainers</h4>
              <p>
                We have well qualified trainers who can guide you on every aspect of the course 
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single_feature">
            <div className="icon">
              <span className="flaticon-book"></span>
            </div>
            <div className="desc">
              <h4 className="mt-3 mb-2">Numerous course categories</h4>
              <p>
                Choose from a wide variety of course categories and trainers, and numerous certifcations 
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single_feature">
            <div className="icon">
              <span className="flaticon-earth"></span>
            </div>
            <div className="desc">
              <h4 className="mt-3 mb-2">Global Certification</h4>
              <p>
                Our courses are world renowned, globally certified and help you achieve credibility around the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default Features