import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import PrincipalDetail from "./PrincipalDetail"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <PrincipalDetail />
      <AboutCard />
    </>
  )
}

export default About
