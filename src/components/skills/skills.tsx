import React from "react";

const Skills = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Skills</h1>
    </div>
  );
});

export default Skills;
