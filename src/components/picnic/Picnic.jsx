import React, { useState } from "react";
import Back from "../common/back/Back";
import "./picnic.css";
import Dialog from "@mui/material/Dialog";

const Picnic = () => {
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
      <Back title="Educational Trips" />
      <div>
        <div class="gallery">
          <div
            class="gal-p-1"
            onClick={() => handleClickOpen("./images/picnic/t-1.jpg")}
          ></div>
          <div
            class="gal-p-2"
            onClick={() => handleClickOpen("./images/picnic/t-16.jpg")}
          ></div>
          <div
            class="gal-p-3"
            onClick={() => handleClickOpen("./images/picnic/t-3.jpg")}
          ></div>
          <div
            class="gal-p-4"
            onClick={() => handleClickOpen("./images/picnic/t-4.jpg")}
          ></div>
          <div
            class="gal-p-5"
            onClick={() => handleClickOpen("./images/picnic/t-5.jpg")}
          ></div>
          <div
            class="gal-p-6"
            onClick={() => handleClickOpen("./images/picnic/t-6.jpg")}
          ></div>
          <div
            class="gal-p-7"
            onClick={() => handleClickOpen("./images/picnic/t-7.jpg")}
          ></div>
          <div
            class="gal-p-8"
            onClick={() => handleClickOpen("./images/picnic/t-8.jpg")}
          ></div>
          <div
            class="gal-p-9"
            onClick={() => handleClickOpen("./images/picnic/t-9.jpg")}
          ></div>
          <div
            class="gal-p-10"
            onClick={() => handleClickOpen("./images/picnic/t-10.jpg")}
          ></div>
          <div
            class="gal-p-11"
            onClick={() => handleClickOpen("./images/picnic/t-11.jpg")}
          ></div>
          <div
            class="gal-p-12"
            onClick={() => handleClickOpen("./images/picnic/t-12.jpg")}
          ></div>
          <div
            class="gal-p-13"
            onClick={() => handleClickOpen("./images/picnic/t-13.jpg")}
          ></div>
          <div
            class="gal-p-14"
            onClick={() => handleClickOpen("./images/picnic/t-14.jpg")}
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

export default Picnic;
