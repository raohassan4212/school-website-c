import React from "react";
import { blog } from "../../../dummydata";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch(event.target.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Email sent successfully");
        // Your form submission success logic here
      })
      .catch((error) => {
        console.error("There was a problem sending the email", error);
        // Your form submission error logic here
      });
    alert("Thanks For Contacting Us We Will Connect You Soon.");
  };
  return (
    <>
      <section className="newletter">
        <div className="container flexSB mobile-resposive">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/12b8ddcdbfab3cc7e25fa3e9e8591d12"
            method="POST"
          >
            <div className="right row right-inp">
              <input
                type="text"
                placeholder="Enter email address"
                className="form-control"
              />
              <input type="submit" className="submit-newsletter" />
              <i className="fa fa-paper-plane"></i>
            </div>
          </form>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo f-1">
            <div className="footer-logo-flex">
              <h1>ARYA SENIOR SECONDARY SCHOOL</h1>
              <span>EDUCATION & LEARNING</span>
              <p>
                Education enlightens minds, ignites the spark to grow, Learning
                fuels curiosity, empowering us to know, Together they empower,
                shaping a brighter tomorrow.
              </p>
            </div>
            <div className="footer-social">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
            </div>
          </div>
          <div className="box link link-100 f-2">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/facility">Facility</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>{" "}
              </li>
              <li>
                <Link to="/sport">Sports</Link>
              </li>
            </ul>
          </div>
          <div className="box link f-3">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/picnic">Educational Trips</Link>
              </li>
              <li>
                <Link to="/faculty">Faculty</Link>
              </li>
              <li>
                <Link to="/faqs">FAQ</Link>
              </li>
              <li>
                <Link to="/sport">Sport</Link>
              </li>
            </ul>
          </div>
          {/* <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className="box last f-4">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <span className="footer-icon-back">
                  <i className="fa fa-map"></i>
                </span>
                Arya Sr. Sec. School, P.O-Ahirka.jind Dist. f.Teh-Ahirka,
                Haryana
              </li>
              <li>
                <span className="footer-icon-back">
                  {/* <i className="fa fa-paper-plane"></i> */}
                  <i class="fa-solid fa-envelope fa-2xl"></i>
                </span>
                Arya.School@gmail.com
              </li>
              <li>
                <span className="footer-icon-back">
                  <i className="fa fa-phone-alt"></i>
                </span>
                Wazir Dhanda (M.D) 94165-04375
              </li>
              {/* <li>
                <span className="footer-icon-back">
                  <i className="fa fa-phone-alt"></i>
                </span>
                Sudha Sharma (Pori) 99962-44390
              </li>
              <li>
                <span className="footer-icon-back">
                  <i className="fa fa-phone-alt"></i>
                </span>
                Bhim Singh (Transport) 80530-88964
              </li> */}
            </ul>
          </div>
        </div>
      </footer>
      {/* <div className="legal">
        <p>
          Copyright ©2022 All rights reserved |<i className="fa fa-heart"></i>{" "}
          by SOC
        </p>
      </div> */}
    </>
  );
};

export default Footer;
