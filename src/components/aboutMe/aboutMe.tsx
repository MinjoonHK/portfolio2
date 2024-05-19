import React from "react";

const AboutMe = () => {
  return (
    <div
      className="aboutMeWrapper"
      style={{ backgroundColor: "rgb(235,235,235)", padding: "1% 0" }}
    >
      <div
        className="aboutMeHeader"
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "white",
        }}
      >
        About Me
      </div>
    </div>
  );
};

export default AboutMe;
