import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [{ width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 }]
    // { width: 850, itemsToShow: 2 }]

const Testimonials = () => (
    <div className="testimonial_area section_gap">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="main_title">
            <h2 className="mb-3">Client say about me</h2>
            <p>
              Replenish man have thing gathering lights yielding shall you
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <Carousel showArrows={false} breakPoints={breakPoints} className="testi_slider owl-carousel">
          <div className="testi_item">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/testimonials/t1.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4>Elite Martin</h4>
                  <p>
                    Him, made can't called over won't there on divide there
                    male fish beast own his day third seed sixth seas unto.
                    Saw from
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi_item">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/testimonials/t2.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4>Davil Saden</h4>
                  <p>
                    Him, made can't called over won't there on divide there
                    male fish beast own his day third seed sixth seas unto.
                    Saw from
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi_item">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/testimonials/t1.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4>Elite Martin</h4>
                  <p>
                    Him, made can't called over won't there on divide there
                    male fish beast own his day third seed sixth seas unto.
                    Saw from
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi_item">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/testimonials/t2.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4>Davil Saden</h4>
                  <p>
                    Him, made can't called over won't there on divide there
                    male fish beast own his day third seed sixth seas unto.
                    Saw from
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi_item">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/testimonials/t1.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4>Elite Martin</h4>
                  <p>
                    Him, made can't called over won't there on divide there
                    male fish beast own his day third seed sixth seas unto.
                    Saw from
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi_item">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/testimonials/t2.jpg" alt="" />
              </div>
              <div className="col-lg-8">
                <div className="testi_text">
                  <h4>Davil Saden</h4>
                  <p>
                    Him, made can't called over won't there on divide there
                    male fish beast own his day third seed sixth seas unto.
                    Saw from
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
  
);

export default Testimonials;
