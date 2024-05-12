import React from "react";
import "./project.css";

const Project = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="scroll-container">
        <div className="scroll-area">1</div>
        <div className="scroll-area">2</div>
        <div className="scroll-area">3</div>
        <div className="scroll-area">4</div>
      </div>
    </div>
  );
});

export default Project;
