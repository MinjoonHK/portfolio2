import React from "react";

const Archiving = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="title" style={{ textAlign: "center" }}>
        <h1>Archiving</h1>
      </div>
    </div>
  );
});

export default Archiving;
