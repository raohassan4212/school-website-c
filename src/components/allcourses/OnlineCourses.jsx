import React, { useState } from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";
import Dialog from "@mui/material/Dialog";

const OnlineCourses = () => {
  const [coursePath, setCoursePath] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (path) => {
    if (path !== undefined) {
      setCoursePath(path);
      setOpen(true);
      console.log(`Course Path ${path}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Courses" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box" onClick={() => handleClickOpen(val?.path)}>
                <div className="img">
                  <img
                    style={{ filter: "invert(100%)" }}
                    color="red"
                    src={val.cover}
                  />
                  <img src={val.hoverCover} alt="icon" className="show" />
                </div>
                <h1 className="course-name">{val.courseName}</h1>
                {/* <span>{val.course}</span> */}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div
              style={{
                width: "400px",
                padding: "10px",
                boxSizing: "border-box",
              }}
              className="popup-media"
            >
              <h2 style={{ textAlign: "center", textTransform: "uppercase" }}>
                profession
              </h2>
              {coursePath.map((val, ind) => {
                return (
                  <li key={ind} style={{ margin: "10px 4px" }}>
                    {ind + 1}) {val}
                  </li>
                );
              })}
            </div>
          </Dialog>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
