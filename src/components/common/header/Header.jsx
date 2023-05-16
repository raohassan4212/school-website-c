import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/facility">Facility</Link>
            </li>
            <li>
              <Link to="/sport">Sports</Link>
            </li>
            <li>
              <Link to="/trip">Educational Trips</Link>
            </li>
            <li>
              <Link to="/achievement">Achievement</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/faqs">FAQS</Link>
            </li>
            {/* <li>
              <Link to='/journal'>Journal</Link>
            </li> */}
          </ul>
          <div className="start">
            <Link to="/contact" style={{ color: "white" }}>
              Contact
            </Link>

            {/* <div className="button">Contact</div> */}
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
