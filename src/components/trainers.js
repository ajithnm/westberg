import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3 },
];

const trainerDetails = [
  // {
  //   name: "K.JAYAKUMAR",
  //   imagePath: "/jayakumar.png",
  //   qualification: "LLB, IDip NEBOSH, Env.Dip NEBOSH, CMIOSH, AMIEMA",
  //   desc: `K. Jayakumar has accomplished IOSH Chartered (CMIOSH) HSE
  // Practitioner offering 25+ years of dynamic experience in HSE
  // Management, legislation, industry standards, best practices
  // applicable to Roads and Infrastructure Development, Construction
  // in Oil & Gas, Petrochemicals, Airports, High rise buildings,
  // Metro Rail, MEP and Facility management for Universities,
  // Hospitals, Malls, Airport & Hazardous waste treatment center. He
  // has Successfully completed high profile projects with client
  // (Ashghal, Kahramaa, Qatar Foundation, Ras gas, Qatar Petroleum –
  // Qatar ), Supervisory Consultant (MSCEB, Bahrain), Main
  // Contractors (BCC-Qatar, HLG-Qatar, Med Gulf Qatar, Voltas (IOBG)
  // Ltd- Qatar & Bahrain, SBC Bahrain) and Project Management
  // Consultant (KPHCC, Kerala, India).`,
  // },
  {
    name: "ANIL KUMAR MISHRA",
    imagePath: "/anilmishra.png",
    qualification: "Grad.IOSH (UK)",
    desc: `Anil Kumar Mishra is an experienced, multi-skilled, self-motivated, enthusiastic, highly
  competent HSE Professional with a wide range of skills and experience gained distinguished
  career of more than 20 years in managing Health, Safety, Security, Fire, Environment, & general
  administration activities in the Indian Navy, and 11 years GCC as a senior in HSE Management
  System. Having experienced in offshore & onshore marine, dockyard, Jetty, Bridges field, High
  rise & Towers Buildings up to 25 floors, Sewerage Pipeline /Micro tunneling project,
  Infrastructure Construction project. Having full knowledge of HSEMS Standards such a QCS
  2014, ISO HSE Management, NFPA, OSHA, ILO, NEBOSH and British Safety Council. He has more
  than 30 year experience in HSSE / FIRE FIGHTING field.`,
  },
  {
    name: "JUSTICE ANYANWU",
    imagePath: "/justice.png",
    qualification: "B.SC, GRADIOSH, MWSO, IDIPIOSH, NVQ5",
    desc: `Justice Anyanwu is a professional Safety Coordinator/Engineer with versed experience in the
  area of Construction/High Rise Building, Road Construction, Stadium project, M.E.P and Theme
  park with focus on ensuring safety and welfare of the personnel in the organization, by
  implementing occupational safety and health programs that is aligned with the organization’s 
  HSE policy and geared towards protecting the workforce of the company. He has more than 11
  year experience in Health and safety.`,
  },
  {
    name: "ADEOSUN ADELOWO",
    imagePath: "/adeosun.jpeg",
    qualification: "BSc, MSc, IDIPNebosh, CMIOSH, MIIRSM",
    desc: `Adeosun Adelowo is a dedicated Environment, Health, Safety professional with over 15 years of
  industry experience including successful developing, implementing and monitoring of health,
  safety and environment compliance programmes cut across Micro-tunneling, Pilling work,
  Roadworks (Highway and Local Roads), Critical lifting, Traffic diversion layout, Asphalt Laying,
  Stormwater drainages, Investigate underground utilities, Monitoring of environmental
  pollutions, Civil works (High-rising structures, bridges), Plant facilities in Oil and Gas Sectors.
  Expert at inspecting, evaluating workplaces for safety hazards, recommending and implementing
  safe workplace policies and procedures and management of subcontractors.`,
  },
  {
    name: "MOHAMED NASHEETH THAIKKAT",
    imagePath: "/nasheeth.png",
    qualification: "MBA",
    desc: `UK Experienced business management graduate and a management trainer, who is a strategic thinker with fantastic organizational and time management skills. He have excellent research skills with the ability to multitask and adapt in a fast-paced environment.`,
  },
  {
    name: "NABEEL",
    imagePath: "/nabeel.png",
    qualification: `Research Scholar in Geopolitics and International Relations
    Post graduate in Business management, Operations and HR`,
    desc: `Talent Acquisition expert (tech & non-tech) with several years of experience in recruiting and training company employees and is working as freelance management trainer for various industries and for several technological domains for the startup markets in Europe, America and Asia.`,
  },
  {
    name: "GOPAKUMAR PARAMESWARAN ",
    imagePath: "/gopakumar.png",
    qualification: "IDip NEBOSH, Grad IOSH, CMIOSH",
    desc: `Gopakumar Parameswaran is a proactive Site HSE Manager with 15 years’ experience in managing
  a variety of construction teams & projects. Successful in creating effective communication
  between personnel, general contractors and the management team. Oversight
  Project HSE Management functions including Development/Review of Project HSE Documents,
  Planning and Implementation of Project HSE MS Audits, Site Audits and Site Inspections,
  Project HSE Risk Assessments, Investigation of High Level Incidents and Review of
  Project HSE Performance for all company projects.`,
  },
  {
    name: "ROQUE PETER DCUNHA",
    imagePath: "/roque.png",
    qualification: `IDip NEBOSH, EnvDip NEBOSH, 
  Grad–IOSH SIIRSM ,PIEMA , (IMS)-LA 9001 , 14001 , 45001`,
    desc: `Roque is a confident HSE professional having the ability to lead a team or work independently and implement management systems with a belief that incidents can be avoided by adopting proactive control measures. He is an approved trainer and assessor by many reputable international accredited bodies in UK.`,
  },
];

const Trainers = () => (
  <section className="trainer_area section_gap_top">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="main_title">
            <h2 className="mb-3">Our Expert Trainers</h2>
            <p>Some of the most prominent ones in their fields.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center d-flex align-items-center">
        <Carousel itemsToShow={3} showArrows={false} breakPoints={breakPoints}>
          {trainerDetails.map((trainer) => (
            <div className="single-trainer">
              <div className="thumb d-flex justify-content-sm-center">
                <img
                  className="img-fluid"
                  src={`/trainer/${trainer.imagePath}`}
                  alt=""
                />
              </div>
              <div className="meta-text text-sm-center">
                <h4>{trainer.name}</h4>
                <p className="designation">{trainer.qualification}</p>
                <div className="mb-4">
                  <p>{trainer.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </section>
);

export default Trainers;
