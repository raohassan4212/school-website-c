import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import Preparation from "./Preparation";
import EventList from "../events/EventList";
import HomePhoto from "./HomePhoto";

const Home = () => {
  return (
    <>
      <Hero />
      <EventList />
      <HomePhoto />
      <AboutCard />
      <HAbout />
      <Preparation />
      <Testimonal />
      {/* <Hblog />
      <Hprice /> */}
    </>
  );
};

export default Home;
