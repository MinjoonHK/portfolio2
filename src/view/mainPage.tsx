import AboutMe from "../components/aboutMe/aboutMe";
import Archiving from "../components/archiving/archiving";
import Footer from "../components/footer/footer";
import Landing from "../components/landing/landig";
import Navbar from "../components/navbar/navbar";
import Project from "../components/project/project";
import Skills from "../components/skills/skills";

const MainPage = () => {
  return (
    <div style={{ height: "80vh" }}>
      <Navbar />
      <Landing />
      <AboutMe />
      <Skills />
      <Project />
      <Archiving />
      <Footer />
    </div>
  );
};

export default MainPage;
