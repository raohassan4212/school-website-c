import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { gallery } from "../../dummydata";
import Back from "../common/back/Back";
import "./gallery.css";
import Heading from "../common/heading/Heading";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
  const totalImages = gallery.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = gallery.slice(startIndex, endIndex);
  return (
    <>
      <Back title="Gallery" />
      <Heading title="Gallery" />
      {/* <div className="main-gallery-div">
        <ImageList sx={{ width: 800, height: 450 }} cols={4} rowHeight={164}>
          {gallery.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt="gallery"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div> */}
      <div>
        <div className="grid-container">
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
          {currentImages.map((image, index) => (
            <img
              key={startIndex + index}
              src={image}
              alt={`image-${startIndex + index}`}
              style={{ flex: "1 0 25%" }}
              className="grid-image"
            />
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{`${currentPage} / ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
