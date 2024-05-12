import { useRef } from "react";
import AboutMe from "../components/aboutMe/aboutMe";
import Archiving from "../components/archiving/archiving";
import Footer from "../components/footer/footer";
import Landing from "../components/landing/landing";
import Navbar from "../components/navbar/navbar";
import Project from "../components/project/project";
import Skills from "../components/skills/skills";

const MainPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const archivingRef = useRef<HTMLDivElement>(null);
  return (
    <div style={{ height: "80vh" }}>
      <Navbar refs={{ aboutRef, skillsRef, projectRef, archivingRef }} />
      <Landing />
      <AboutMe ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Project ref={projectRef} />
      <Archiving ref={archivingRef} />
      <Footer />
    </div>
  );
};

export default MainPage;
