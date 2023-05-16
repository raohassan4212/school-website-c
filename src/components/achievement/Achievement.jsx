import React from "react";
import "./achievement.css";
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Table from "./Table";
import Container from "@mui/material/Container";

const Achievement = () => {
  return (
    <div>
      <Back title="Achievement" />
      <Heading title="Our Achievement" />
      <Carousel swipeable={false}>
        <div className="achievement-banner">
          <Container maxWidth="sm">
            <h2>
              अनन्या ने लहरा या जी त का परचम आर्य वरि ष्ठ मा ध्यमि क वि द्या लय
              अहि रका की कक्षा नौ वीं की छा त्रा अनन्या सुपुत्री श्री फूल कुमा र
              गां व शा हपुर ने अपनी प्रति भा का लो हा मनवा या । दि नां क 09 दि
              संबसं र 2022 को हो ने वा ली जि ला स्तरी य कवि ता पा ठ प्रति यो गि
              ता मेंप् रथम स्था न हा सि ल कि या Legal literacy
            </h2>
            <br></br>
          </Container>
          <img src="./images/achievement/sliderimg1.png" alt="picture" />
        </div>
        <div className="achievement-banner">
          <Container maxWidth="sm">
            <h2>
              आर्य सीनियर सेकेंडरी स्कूल , अहिरका की विद्यार्थी कोमल सुपुत्री
              श्री राजेश का दाखिला B . SC एग्रीकल्चर यूनिवर्सिटी , हिसार में हो
              गया है।है कोमल और उसके परिवार को आर्य परिवार की तरफ से बहुत - बहुत
              बधाई।
            </h2>
            <br></br>
          </Container>
          <img
            src="./images/achievement/sliderimg2.png"
            alt="picture"
            id="img_resp"
          />
        </div>
        <div className="achievement-banner">
          <Container maxWidth="sm">
            <h2>
              Vanshika Bhola got silver medal in 5TH asian youth championship.
            </h2>
            <br></br>
          </Container>
          <img src="./images/achievement/Accivementimg3.png" alt="picture" />
        </div>
        <div className="achievement-banner">
          <Container maxWidth="sm">
            <h2>Kafi in national athlatics championship silver medalist</h2>
            <br></br>
          </Container>
          <img src="./images/achievement/sliderimg4.png" alt="picture" />
        </div>
        <div className="achievement-banner">
          <Container maxWidth="sm">
            <h2>Sandeep Jee mains qualified batch 2022-23</h2>
            <br></br>
          </Container>
          <img src="./images/achievement/sliderimg6.png" alt="picture" />
        </div>

        <div className="achievement-banner">
          <Container maxWidth="sm">
            <h2>Pryianshu Jee mains qualified batch 2022-23</h2>
            <br></br>
          </Container>
          <img src="./images/achievement/sliderimg10.png" alt="picture" />
        </div>

        <div className="achievement-banner">
          <Container maxWidth="sm">
            <h2>DSP Nidhi Nain studied AT ARYA SR.SEC.SCHOOL</h2>
            <br></br>
          </Container>
          <img src="./images/achievement/sliderimg9.png" alt="picture" />
        </div>
      </Carousel>
      <Table />
    </div>
  );
};

export default Achievement;
