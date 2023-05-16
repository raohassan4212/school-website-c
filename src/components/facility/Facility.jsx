import React, { useState } from "react";
import Back from "../common/back/Back";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./facility.css";
import Dialog from "@mui/material/Dialog";

const Facility = () => {
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = (image) => {
    setImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Back title="Facility" />
      <div>
        <h1 className="facility-h">Facility</h1>
      </div>
      <div className="f-list-container">
        <ol className="facility-ol">
          <li style={{ textAlign: "center" }}>
            <b>Hostel Facility</b>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Fully Air Conditioned Hostel
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Enlightening Academic Ambience
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Transport Facility
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Value Based Education
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Musix & Dance
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            World Class Curriculum
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Highly Qualified & Experienced
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Parenting Sessions
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Activity Based Teaching
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Indoor & Outdoor Sports
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Library For Reading Skills
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Health & Hygiene
          </li>
        </ol>
        <ol className="facility-ol">
          <li style={{ textAlign: "center" }}>
            <b>General Facility</b>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Digital Class Rooms
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Sport/ yoga
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Evening Classes
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Neatness 5 Star
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            Buddy Concept
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img
              width={20}
              height={20}
              src="./images/facility/tick.png"
              alt=""
            />
            High Grade Security
          </li>
        </ol>
      </div>
      <div className="gallery-box">
        <div class="gallery">
          <div
            class="gal-1"
            onClick={() => handleClickOpen("./images/facility/h-1.jpg")}
          ></div>
          <div
            class="gal-2"
            // onClick={() => handleClickOpen("./images/facility/facility-2.jpg")}
          >
            <video
              className="video"
              autoplay=""
              loop=""
              controls=""
              style={{ flex: "1 0 25%" }}
            >
              <source src="/video/h-v-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            class="gal-3"
            onClick={() => handleClickOpen("./images/facility/h-2.jpg")}
          ></div>
          <div
            class="gal-4"
            onClick={() => handleClickOpen("./images/facility/h-3.jpg")}
          ></div>
          <div
            class="gal-5"
            onClick={() => handleClickOpen("./images/facility/h-4.jpg")}
          ></div>
          <div
            class="gal-6"
            onClick={() => handleClickOpen("./images/facility/h-5.jpg")}
          ></div>
          <div
            class="gal-7"
            onClick={() => handleClickOpen("./images/facility/h-6.jpg")}
          ></div>
          <div
            class="gal-8"
            onClick={() => handleClickOpen("./images/facility/h-7.jpg")}
          ></div>
          <div
            class="gal-9"
            onClick={() => handleClickOpen("./images/facility/h-8.jpg")}
          ></div>
          <div
            class="gal-10"
            onClick={() => handleClickOpen("./images/facility/facility-10.jpg")}
          ></div>
          <div
            class="gal-11"
            onClick={() => handleClickOpen("./images/facility/facility-11.jpg")}
          ></div>
          <div
            class="gal-12"
            onClick={() => handleClickOpen("./images/facility/facility-12.jpg")}
          ></div>
          <div
            class="gal-13"
            onClick={() => handleClickOpen("./images/facility/facility-13.jpg")}
          ></div>
          <div
            class="gal-14"
            onClick={() => handleClickOpen("./images/facility/facility-14.jpg")}
          ></div>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <img src={image} alt="picture" />
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Facility;
