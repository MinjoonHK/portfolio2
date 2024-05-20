import { GithubOriginalWordmark } from "devicons-react";
import React from "react";
import "./archiving.css";

const Archiving = () => {
  return (
    <div
      className="archivingWrapper"
      style={{ backgroundColor: "#EDB211", padding: "1% 0" }}
    >
      <div
        className="archivingHeader"
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "white",
        }}
      >
        Archiving
      </div>
      <div className="archivingInnerWrapper" style={{ width: "100%" }}>
        <div
          className="archivingContentWrapper"
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            margin: "3% 0",
          }}
        >
          <div className="archivingContent">
            <div className="archivingIcon" style={{ textAlign: "center" }}>
              <GithubOriginalWordmark size={100} />
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <a
                href="https://github.com/MinjoonHK"
                style={{ color: "black", textAlign: "center", width: "100%" }}
              >
                GITHUB 방문하기
              </a>
            </div>
            <div
              className="archivingDescription"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul className="archivingList" style={{ fontWeight: "bold" }}>
                <li>공부한 것들을 기록하고 있습니다</li>
                <li>과거 프로젝트 코드를 관리하고 있습니다</li>
                <li>프로젝트를 이해하기 쉽게 문서화 합니다 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archiving;
