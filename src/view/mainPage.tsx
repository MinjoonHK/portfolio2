import { useRef } from "react";
import AboutMe from "../components/aboutMe/aboutMe";
import Archiving from "../components/archiving/archiving";
import Footer from "../components/footer/footer";
import Landing from "../components/landing/landing";
import Navbar from "../components/navbar/navbar";
import Project from "../components/project/project";
import Skills from "../components/skills/skills";
import StarsBackground from "../components/canvas/StarsBackground";
import RocketScrollButton from "../components/rocketButton/RocketScrollButton";

const MainPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const archivingRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative">
      <StarsBackground />
      <div className="relative z-10">
        {/* <Navbar refs={{ aboutRef, skillsRef, projectRef, archivingRef }} /> */}
        <Landing />
        <section id="about" ref={aboutRef} style={{ scrollMarginTop: "10vh" }}>
          <AboutMe />
        </section>
        <section
          id="skills"
          ref={skillsRef}
          style={{ scrollMarginTop: "10vh" }}
        >
          <Skills />
        </section>
        <section
          id="projects"
          ref={projectRef}
          style={{ scrollMarginTop: "10vh" }}
        >
          <Project />
        </section>
        <section
          id="archiving"
          ref={archivingRef}
          style={{ scrollMarginTop: "10vh" }}
        >
          <Archiving />
        </section>
        <Footer />
      </div>
      <RocketScrollButton />
    </div>
  );
};

export default MainPage;
