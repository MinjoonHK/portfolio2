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
          letterSpacing: "4px",
          color: "#cce4ff",
          textShadow:
            "0 0 10px #7eb8ff, 0 0 24px #4a90d9, 0 0 40px rgba(74,144,217,0.4)",
        }}
      >
        SKILLS
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
