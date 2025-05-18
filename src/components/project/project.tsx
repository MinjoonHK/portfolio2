import React from "react";
import "./project.css";
import Algolog from "./algolog";
import VxtKorea from "./vxtKorea";
import ManagementSystem from "./managementSystem";
import FYP from "./fyp";
import ResumeEditor from "./resumeEditor";
import PersonalBlog from "./personalBlog";
import Portfolio from "./portfolio";
import Dangchan from "./dangchan";

const Project = () => {
  return (
    <div
      className="projectWrapper"
      style={{ backgroundColor: "rgb(50,50,50)", padding: "1% 0" }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "white",
        }}
      >
        Projects
      </div>
      <div className="projectContentContainer">
        <Dangchan/>
        <ResumeEditor />
        <Portfolio />
        <Algolog />
        <VxtKorea />
        <ManagementSystem />
        <FYP />
        <PersonalBlog />
      </div>
    </div>
  );
};

export default Project;
