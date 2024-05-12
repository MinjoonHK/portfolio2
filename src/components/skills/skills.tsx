import React from "react";
import {
  ReactOriginalWordmark,
  Html5OriginalWordmark,
  Css3OriginalWordmark,
  JavascriptOriginal,
  TypescriptOriginal,
  NextjsOriginalWordmark,
  ReduxOriginal,
  VercelOriginalWordmark,
  GithubOriginalWordmark,
  GithubactionsOriginal,
  AmazonwebservicesOriginalWordmark,
  NodejsOriginalWordmark,
  ExpressOriginalWordmark,
  JavaOriginalWordmark,
  SpringOriginalWordmark,
  MysqlOriginalWordmark,
  MongodbOriginalWordmark,
  BootstrapOriginalWordmark,
  AntdesignOriginalWordmark,
  NotionOriginal,
  SlackOriginalWordmark,
  NextjsOriginal,
  AntdesignOriginal,
} from "devicons-react";

import "./skills.css";
import Frontend from "./frontend";
import Backend from "./backend";
import Deploy from "./deploy";
import Collaboration from "./collaboration";

const Skills = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="skillsWrapper"
      style={{
        height: "100vh",
        backgroundColor: "#5CB083",
      }}
      ref={ref}
    >
      <div className="skillsHeader" style={{ textAlign: "center" }}>
        <h1>Skills</h1>
      </div>
      <div className="skillsContentContainer">
        <Frontend />
        <Backend />
        <Deploy />
        <Collaboration />
      </div>
    </div>
  );
});

export default Skills;
