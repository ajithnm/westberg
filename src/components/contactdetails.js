import React from "react";
import GoogleMap from "./googlemap";


const ContactDetails = () => (
  <section class="contact_area section_gap">
    <div class="container">
      {/* Implement map ! */}
      {/* <div
          id="mapBox"
          class="mapBox"
          data-lat="40.701083"
          data-lon="-74.1522848"
          data-zoom="13"
          data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
          data-mlat="40.701083"
          data-mlon="-74.1522848"
        ></div> */}
{/* <GoogleMap/> */}
      <div class="contact_info">
        <div class="info_item">
          <i class="ti-home"></i>
          <h6>Kerala, India</h6>
          <p>Office #1515, (Door No. 2/1149/A89)<br/>
          Hilite Business Park<br/>
          Thondayad Bypass Road<br/>
          Kozhikode - 673016</p>
        </div>
        <div class="info_item">
          <i class="ti-headphone"></i>
          <h6>
            <a href="tel:+917034533222">00 (91) 7034533222</a>
          </h6>
          <p>Mon to Fri 9am to 6 pm</p>
        </div>
        <div class="info_item">
          <i class="ti-home"></i>
          <h6>Doha, Qatar</h6>
          <p>Room No. 119<br/>
          First floor, Second gate<br/>
          Al Matar Center<br/>
          Old air port (Near Mathar Gadeem Metro Station)</p>
        </div>
        <div class="info_item">
          <i class="ti-headphone"></i>
          <h6>
            <a href="tel:+917034533222">00 (974) 30944477</a>
          </h6>
          <p>Mon to Fri 9am to 6 pm</p>
        </div>
        <div class="info_item">
          <i class="ti-email"></i>
          <h6>
            <a href="mailto:info@westberginternational.com">info@westberginternational.com</a>
          </h6>
          <p>Send us your query anytime!</p>
        </div>
      </div>
    </div>
  </section>
  //   <section className="feature_area section_gap_top">
  //     <div className="container">
  //       <div className="row justify-content-center">
  //         <div className="col-lg-5">
  //           <div className="main_title">
  //             <h2 className="mb-3">Contact Us</h2>
  //             <p>We are happy to hear from you.</p>
  //           </div>
  //         </div>
  //       </div>
  //       {/* <div className="row"> */}
  //       {/* <div className="col-lg-12 col-md-6"> */}
  //       <div className="single_feature">
  //         <div className="icon">
  //           <span className="flaticon-student"></span>
  //         </div>
  //         <div className="desc">
  //           <h4 className="mt-3 mb-2">
  //             <a href="info@westberginternational.com" style={{color: 'inherit'}}>
  //               Mail us at info@westberginternational.com
  //             </a>
  //           </h4>
  //           <p>We are available for enquiries at: +1234567890</p>
  //         </div>
  //       </div>
  //     </div>

  //     {/* </div>
  //     </div> */}
  //   </section>
);

export default ContactDetails;
