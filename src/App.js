import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Facility from "./components/facility/Facility";
import Sports from "./components/sports/Sports";
import Picnic from "./components/picnic/Picnic";
import Achievement from "./components/achievement/Achievement";
import Events from "./components/events/Events";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/sport" element={<Sports />} />
          <Route path="/trip" element={<Picnic />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/faculty" element={<Team />} />
          <Route path="/faqs" element={<Pricing />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
