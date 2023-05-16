import React, { useState } from "react";
import Back from "../common/back/Back";
import "./sports.css";
import Dialog from "@mui/material/Dialog";

const Sports = () => {
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
      <Back title="Sport" />
      <div>
        <div>
          <h1 className="facility-h">Sports</h1>
        </div>
        <div className="f-list-container">
          <ol className="facility-ol">
            {/* <li style={{ textAlign: "center" }}>
              <b>Hostel Facility</b>
            </li> */}
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                width={20}
                height={20}
                src="./images/facility/tick.png"
                alt=""
              />
              Kabaadi
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                width={20}
                height={20}
                src="./images/facility/tick.png"
                alt=""
              />
              Cricket
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                width={20}
                height={20}
                src="./images/facility/tick.png"
                alt=""
              />
              FootBall
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                width={20}
                height={20}
                src="./images/facility/tick.png"
                alt=""
              />
              Basket Ball
            </li>
          </ol>
          <ol className="facility-ol">
            {/* <li style={{ textAlign: "center" }}>
              <b>General Facility</b>
            </li> */}
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                width={20}
                height={20}
                src="./images/facility/tick.png"
                alt=""
              />
               Yoga
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                width={20}
                height={20}
                src="./images/facility/tick.png"
                alt=""
              />
              Tennis
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                width={20}
                height={20}
                src="./images/facility/tick.png"
                alt=""
              />
              Badminton
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                width={20}
                height={20}
                src="./images/facility/tick.png"
                alt=""
              />
              Racing
            </li>
          </ol>
        </div>
        <div class="gallery">
          <div
            class="gal-s-1"
            // onClick={() => handleClickOpen("./images/sport/sport-1.jpg")}
          >
            <video
              className="video"
              autoplay=""
              loop=""
              controls=""
              style={{ flex: "1 0 25%" }}
            >
              <source src="/images/sport/s-v-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            class="gal-s-2"
            onClick={() => handleClickOpen("./images/sport/sport-6.jpg")}
          ></div>
          <div
            class="gal-s-3"
            onClick={() => handleClickOpen("./images/sport/sport-3.jpg")}
          ></div>
          <div
            class="gal-s-4"
            onClick={() => handleClickOpen("./images/sport/sport-5.jpg")}
          ></div>
          <div
            class="gal-s-5"
            onClick={() => handleClickOpen("./images/sport/sport-2.jpg")}
          ></div>
          <div
            class="gal-s-6"
            onClick={() => handleClickOpen("./images/sport/sport-7.jpg")}
          ></div>
          <div
            class="gal-s-7"
            onClick={() => handleClickOpen("./images/sport/sport-8.jpg")}
          ></div>
          <div
            class="gal-s-8"
            onClick={() => handleClickOpen("./images/sport/sport-9.jpg")}
          ></div>
          <div
            class="gal-s-9"
            onClick={() => handleClickOpen("./images/sport/sport-10.jpg")}
          ></div>
          <div
            class="gal-s-10"
            onClick={() => handleClickOpen("./images/sport/sport-11.jpg")}
          ></div>
          <div
            class="gal-s-11"
            onClick={() => handleClickOpen("./images/sport/sport-1.jpg")}
          ></div>
          <div
            class="gal-s-12"
            onClick={() => handleClickOpen("./images/sport/sport-1.jpg")}
          ></div>
          <div
            class="gal-s-13"
            onClick={() => handleClickOpen("./images/sport/sport-2.jpg")}
          ></div>
          <div
            class="gal-s-14"
            onClick={() => handleClickOpen("./images/sport/sport-1.jpg")}
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

export default Sports;
