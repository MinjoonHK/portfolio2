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
      <section ref={aboutRef} style={{ scrollMarginTop: "10vh" }}>
        <AboutMe />
      </section>
      <section ref={skillsRef} style={{ scrollMarginTop: "10vh" }}>
        <Skills />
      </section>
      <section ref={projectRef} style={{ scrollMarginTop: "10vh" }}>
        <Project />
      </section>
      <section ref={archivingRef} style={{ scrollMarginTop: "10vh" }}>
        <Archiving />
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
