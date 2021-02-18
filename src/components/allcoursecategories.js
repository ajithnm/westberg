import React from "react";
import Arrow from "../icons/arrow";

const CourseCategory = ({ category }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  return (
    <div className="category">
      <button className="single_category" onClick={toggleMenu}>
        <div className="desc">
          <h4 className="mt-3 mb-2">{category.name}</h4>
        </div>
        <span className={`${openMenu ? 'down' : 'up'}`}><Arrow strokeColor={"#ffffff"} /></span>
      </button>
      {openMenu && (
        <div className="expanded-courses">
          <div className="row">
            
              {category.courses.map((course, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                <div className="single_course" >
                  <div className="course_head">
                    <img className="img-fluid" src={course.bgImg} alt="" />
                  </div>
                  <div className="course_content">
                    {/* <span className="price">$25</span> */}
                    {/* <span className="tag mb-4 d-inline-block">
                      {category.name}
                    </span> */}
                    <h4 className="mb-3">
                      <a href={course.link}>{course.name}</a>
                    </h4>
                    {/* <p>{course.desc}</p> */}
                    <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                      {/* <div className="authr_meta">
                        <img src={course.authorImg} alt="" />
                        <span className="d-inline-block ml-2">
                          {course.author}
                        </span>
                      </div> */}
                      {/* {course.meta && (
                        <div className="mt-lg-0 mt-3">
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
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
                </div>
              ))}
            
          </div>
        </div>
      )}
    </div>
  );
};

const categories = [
  {
    name: "HEALTH AND SAFETY COURSES",
    courses: [
      {
        name: "OTHM LEVEL 6 INTERNATIONAL DIPLOMA IN HEALTH & SAFETY",
        bgImg: "/courses/c1.png",
        desc: "Some desc",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "BRITISH SAFETY COUNCIL CERTIFICATION COURSE",
        bgImg: "/courses/c2.png",
        desc: "Some desc",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "BSC-ICERTOSH",
        bgImg: "/courses/c3.png",
        desc: "Some desc",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "BSC-IDIPOSH",
        bgImg: "/courses/c2.png",
        desc: "Some desc",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
    ],
  },
  // {
  //   name: "NEBOSH",
  //   courses: [
  //     {
  //       name: "NEBOSH HSW",
  //       bgImg: "/courses/c1.png",
  //       desc: "Some desc",
  //       author: "Cameron",
  //       link: "/",
  //       authorImg: "/courses/author1.png",
  //       meta: {},
  //     },
  //     {
  //       name: "NEBOSH IGC",
  //       bgImg: "/courses/c2.png",
  //       desc: "Some desc",
  //       author: "Cameron",
  //       link: "/",
  //       authorImg: "/courses/author1.png",
  //       meta: {},
  //     },
  //     {
  //       name: "NEBOSH DIPLOMA IN OCCUPATIONAL HEALTH AND SAFETY",
  //       bgImg: "/courses/c3.png",
  //       desc: "Some desc",
  //       author: "Cameron",
  //       link: "/",
  //       authorImg: "/courses/author1.png",
  //       meta: {},
  //     },
  //   ],
  // },
  {
    name: "HIGHFIELD AWARDING BODY OF COMPLIANCE CERTIFICATION COURSES",
    courses: [
      {
        name: "HIGHFIELD AWARDING BODY OF COMPLIANCE CERTIFICATION COURSE",
        bgImg: "/courses/c1.png",
        desc: "Some desc",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
    ],
  },
  {
    name: "IRCA- LEAD AUDITOR",
    courses: [
      {
        name: "ISO 9001-2015 QMS",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "ISO 14001-2015 EMS",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "ISO 45001-2018 OHSMS",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
    ],
  },
  {
    name: "BASIC HEALTH AND SAFETY COURSES",
    courses: [
      {
        name: "FIRE WARDEN SAFETY TRAINING",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "FIRST AID PLUS CPR TRAINING",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "WORK AT HEIGHT SAFETY TRAINING",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "CONFINED SPACE SAFETY TRAINING",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "EXCAVATION & TRENCHING TRAINING",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "RIGGING & SLINGING TRAINING",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "LIFTING SUPERVISOR TRAINING",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "SCAFFOLDING SAFETY TRAINING",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "SCAFFOLDING SUPERVISOR TRAININGG",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "SCAFFOLDING INSPECTOR SAFETY TRAINING",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "ACCIDENT PREVENTION AND INVESTIGATION TRAINING",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "DEFENSIVE DRIVING",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "CCTV OPERATOR TRAINING",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "LOTO TRAINING",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "WELDING & CUTTING SAFETY AWARENESS TRAINING",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "RISK ASSESSMENT",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
    ],
  },
  {
    name: "LANGUAGE TRAINING",
    courses: [
      {
        name: "IELTS",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "OET",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "PTE",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "GERMAN LANGUAGE COURSE",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
    ],
  },
  {
    name: "CERTIFICATION COURSE",
    courses: [
      {
        name: "PMP- PROJECT  MANAGEMENT  PROFESSIONAL",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "CFM- CERTIFIED FACILITY MANAGEMENT",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "CERTIFIED PERSONAL TRAINER",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "PROFESSIONAL CERTIFICATE IN CABIN CREW",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "LEAN SIX SIGMA CERTIFICATION",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
    ],
  },
  {
    name: "FASHION DESIGNING COURSE (UK QUALIFICATION)",
    courses: [
	 {
        name: "THREE MONTHS CERTIFICATE IN FASHION DESIGNING",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "6 MONTHS CERTIFICATION COURSE IN FASHION DESIGNING",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "1 YEAR ADVANCE DIPLOMA IN FASHION DESIGNING",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },	 
	  {
        name: "TWO YEAR ADVANCED PG DIPLOMA IN FASHION DESIGNING.",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
    ],
  },
  {
    name: "MANAGEMENT TRAINING COURSES",
    courses: [
      {
        name: "UK integrated MBA",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "UK integrated BBA",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "UK Master in Education ( MED)",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "UK Bachelor in Education( BED)",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "ACCA + BCOM",
        bgImg: "/courses/c2.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "CMA + BCOM",
        bgImg: "/courses/c1.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
      {
        name: "BBA in Aviation  Management",
        bgImg: "/courses/c3.png",
        desc: "Some big text...",
        author: "Cameron",
        link: "/",
        authorImg: "/courses/author1.png",
        meta: {},
      },
    ],
  },
];

const AllCategories = () => (
  <section className="feature_area section_gap_top all-courses">
    <div className="container">
      {categories.map((category, index) => (
        <CourseCategory category={category} key={index}/>
      ))}
    </div>
  </section>
);

export default AllCategories;
