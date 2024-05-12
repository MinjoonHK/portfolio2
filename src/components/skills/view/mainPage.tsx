import { useRef } from "react";
import AboutMe from "../../aboutMe/aboutMe";
import Archiving from "../../archiving/archiving";
import Footer from "../../footer/footer";
import Landing from "../../landing/landing";
import Navbar from "../../navbar/navbar";
import Project from "../../project/project";
import Skills from "../skills";

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
