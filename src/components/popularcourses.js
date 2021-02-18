import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [{ width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 }]

const PopularCourses = () => (
  <div className="popular_courses">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="main_title">
            <h2 className="mb-3">Our Popular Courses</h2>
            <p>Choose from one of our popular courses to find out more</p>
          </div>
        </div>
      </div>
      <div className="row">
        {/* <!-- single course --> */}
        <div className="col-lg-12">
          {/* <div className="owl-carousel active_course"> */}
          <Carousel itemsToShow={3} showArrows={false} breakPoints={breakPoints}>
            {/* <Item> */}
            <div className="single_course">
              <div className="course_head">
                <img className="img-fluid" src="/courses/c1.jpg" alt="" />
              </div>
              <div className="course_content">
                {/* <span className="price">$25</span> */}
                <span className="tag mb-4 d-inline-block">HEALTH AND SAFETY</span>
                <h4 className="mb-3">
                  <a href="/">BSC-ICERTOSH</a>
                </h4>
                {/* <p>
                  One make creepeth man bearing their one firmament won't fowl
                  meat over sea
                </p> */}
                <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                  {/* <div className="authr_meta">
                    <img src="/courses/author1.png" alt="" />
                    <span className="d-inline-block ml-2">Cameron</span>
                  </div> */}
                  {/* <div className="mt-lg-0 mt-3">
                    <span className="meta_info mr-4">
                      <a href="#">
                        {" "}
                        <i className="ti-user mr-2"></i>25{" "}
                      </a>
                    </span>
                    <span className="meta_info">
                      <a href="#">
                        {" "}
                        <i className="ti-heart mr-2"></i>35{" "}
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            {/* </Item> */}
            {/* <Item> */}
            <div className="single_course">
              <div className="course_head">
                <img className="img-fluid" src="/courses/c2.jpg" alt="" />
              </div>
              <div className="course_content">
                {/* <span className="price">$25</span> */}
                <span className="tag mb-4 d-inline-block">NEBOSH</span>
                <h4 className="mb-3">
                  <a href="/">NEBOSH HSW</a>
                </h4>
                {/* <p>
                  One make creepeth man bearing their one firmament won't fowl
                  meat over sea
                </p> */}
                <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                  {/* <div className="authr_meta">
                    <img src="/courses/author2.png" alt="" />
                    <span className="d-inline-block ml-2">Cameron</span>
                  </div> */}
                  {/* <div className="mt-lg-0 mt-3">
                    <span className="meta_info mr-4">
                      <a href="#">
                        {" "}
                        <i className="ti-user mr-2"></i>25{" "}
                      </a>
                    </span>
                    <span className="meta_info">
                      <a href="#">
                        {" "}
                        <i className="ti-heart mr-2"></i>35{" "}
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            {/* </Item>
            <Item> */}
            <div className="single_course">
              <div className="course_head">
                <img className="img-fluid" src="/courses/c1.jpg" alt="" />
              </div>
              <div className="course_content">
                {/* <span className="price">$25</span> */}
                <span className="tag mb-4 d-inline-block">LANGUAGE TRAINING</span>
                <h4 className="mb-3">
                  <a href="/ielts-coaching-calicut">IELTS</a>
                </h4>
                {/* <p>
                  One make creepeth man bearing their one firmament won't fowl
                  meat over sea
                </p> */}
                <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                  {/* <div className="authr_meta">
                    <img src="/courses/author3.png" alt="" />
                    <span className="d-inline-block ml-2">Cameron</span>
                  </div> */}
                  {/* <div className="mt-lg-0 mt-3">
                    <span className="meta_info mr-4">
                      <a href="#">
                        {" "}
                        <i className="ti-user mr-2"></i>25{" "}
                      </a>
                    </span>
                    <span className="meta_info">
                      <a href="#">
                        {" "}
                        <i className="ti-heart mr-2"></i>35{" "}
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="single_course">
              <div className="course_head">
                <img className="img-fluid" src="/courses/c2.jpg" alt="" />
              </div>
              <div className="course_content">
                {/* <span className="price">$25</span> */}
                <span className="tag mb-4 d-inline-block">CERTIFICATION</span>
                <h4 className="mb-3">
                  <a href="/">PROFESSIONAL CERTIFICATE IN CABIN CREW</a>
                </h4>
                {/* <p>
                  One make creepeth man bearing their one firmament won't fowl
                  meat over sea
                </p> */}
                <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                  {/* <div className="authr_meta">
                    <img src="/courses/author3.png" alt="" />
                    <span className="d-inline-block ml-2">Cameron</span>
                  </div> */}
                  {/* <div className="mt-lg-0 mt-3">
                    <span className="meta_info mr-4">
                      <a href="#">
                        {" "}
                        <i className="ti-user mr-2"></i>25{" "}
                      </a>
                    </span>
                    <span className="meta_info">
                      <a href="#">
                        {" "}
                        <i className="ti-heart mr-2"></i>35{" "}
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="single_course">
              <div className="course_head">
                <img className="img-fluid" src="/courses/c3.jpg" alt="" />
              </div>
              <div className="course_content">
                {/* <span className="price">$25</span> */}
                <span className="tag mb-4 d-inline-block">MANAGEMENT TRAINING</span>
                <h4 className="mb-3">
                  <a href="/">UK integrated MBA</a>
                </h4>
                {/* <p>
                  One make creepeth man bearing their one firmament won't fowl
                  meat over sea
                </p> */}
                <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                  {/* <div className="authr_meta">
                    <img src="/courses/author3.png" alt="" />
                    <span className="d-inline-block ml-2">Cameron</span>
                  </div> */}
                  {/* <div className="mt-lg-0 mt-3">
                    <span className="meta_info mr-4">
                      <a href="#">
                        {" "}
                        <i className="ti-user mr-2"></i>25{" "}
                      </a>
                    </span>
                    <span className="meta_info">
                      <a href="#">
                        {" "}
                        <i className="ti-heart mr-2"></i>35{" "}
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            {/* </Item> */}
          </Carousel>
          {/* </div> */}
        </div>
      </div>
    </div>
  </div>
);

export default PopularCourses;
