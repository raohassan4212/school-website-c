import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PrincipalDetail = () => {
  return (
    <>
      <div className="message-box">
        <Heading title="About The Principal" />
        <div className="principal-detail">
          <h3 className="principal-name">Sudhe Sharma</h3>
          <div className="qualification-flex">
            <h3 className="qualification">Qaulification :</h3>
            <div className="qualification-detail">
              <h4>M.A English</h4>
              <h4>M.A History</h4>
              <h4>B.ed</h4>
            </div>
          </div>
          <div className="principal-story">
            <p>
              I am here in <b>Arya sr.sec School Ahirka,</b> and working as a
              principal for the last 17 years with a motive of shaping a vision
              of academic and success for all student, I oversee all the higher
              level operations in the school. I always try to create a safe
              learning environment ans set performance goal both for student and
              teacher. I also handle charge of all daily activities performed by
              the teacher and student. I also lead the whole school community
              including students, teacher, staff and parents.
            </p>
          </div>
        </div>
      </div>
      <div className="home-bg-main">
        <div className="about-photo">
          {/* <div></div>
        <div className="pic-1">
          <img src="./images/team/f-1.jpeg" alt="picture" width={`100%`} />
          <div className="img-position">
            <h3>MR. WAZIR DHANDA (M.D)</h3>
          </div>
        </div> */}
          <div>
            <div className="about-img-div">
              <img src="./images/team/f-2.jpeg" alt="picture" width={`100%`} />
            </div>
            <div className="img-position">
              <h3>MRS. SUDHA SHARMA (PRINCIPAL)</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel swipeable={false}>
        <div className="about-banner">
          <img src="./images/about/about-1.jpg" alt="picture" />
        </div>
        <div className="about-banner">
          <img src="./images/about/about-2.jpg" alt="picture" />
        </div>
        <div className="about-banner">
          <img src="./images/about/about-3.jpg" alt="picture" />
        </div>
        <div className="about-banner">
          <img src="./images/about/about-4.jpg" alt="picture" />
        </div>
      </Carousel> */}
    </>
  );
};

export default PrincipalDetail;
