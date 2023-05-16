import React from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import Container from "@mui/material/Container";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const gotoCourse = () => {
    navigate("/courses");
    alert("You have");
  };
  return (
    <>
      <div className="banner">
        <section className="hero">
          <div className="container">
            <div className="row">
              <Heading
                subtitle="WELCOME TO Arya School"
                title="Best Education Expertise"
              />
              <p>
                Expertise in education requires much more than knowledge of the
                subject matter.
              </p>
              <div className="button">
                <button className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button onClick={gotoCourse}>
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="margin"></div> */}
    </>
  );
};

export default Hero;
