import React from "react";
import "./skills.css";
import Frontend from "./frontend";
import Backend from "./backend";
import Deploy from "./deploy";
import Collaboration from "./collaboration";

const Skills = () => {
  return (
    <div className="skillsWrapper">
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
        Skills
      </div>
      <div className="skillsContentContainer">
        <Frontend />
        <Backend />
        <Deploy />
        <Collaboration />
      </div>
    </div>
  );
};

export default Skills;
