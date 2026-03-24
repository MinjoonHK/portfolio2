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
import Archiview from "./archiview";

const Project = () => {
  return (
    <div
      className="projectWrapper"
      style={{
          background: "linear-gradient(to bottom, rgba(8,12,30,0) 0%, rgba(8,12,30,0.2) 80px, rgba(8,12,30,0.55) 100%)",
          padding: "1% 0"
        }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "4px",
          color: "#cce4ff",
          textShadow:
            "0 0 10px #7eb8ff, 0 0 24px #4a90d9, 0 0 40px rgba(74,144,217,0.4)",
        }}
      >
        PROJECTS
      </div>
      <div className="projectContentContainer">
        <Archiview />
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
