import React from "react";

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h1>About Me</h1>
      <p>
        I am a software engineer with a passion for front-end development. I
        have experience in developing web applications using React, Angular, and
        Vue. I am also familiar with backend technologies such as Node.js,
        Express, and MongoDB. I am always eager to learn new technologies and
        improve my skills.
      </p>
    </div>
  );
});

export default AboutMe;
