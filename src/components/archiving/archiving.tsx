import { GithubOriginalWordmark } from "devicons-react";
import React from "react";
import "./archiving.css";

const Archiving = () => {
  return (
    <div
      className="archivingWrapper"
      style={{
        background: "linear-gradient(to bottom, rgba(8,12,30,0) 0%, rgba(8,12,30,0.2) 80px, rgba(8,12,30,0.55) 100%)",
        padding: "1% 0",
      }}
    >
      <div
        className="archivingHeader"
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
        ARCHIVING
      </div>
      <div className="archivingInnerWrapper">
        <div className="archivingContent">
          <div className="archivingIcon" style={{ filter: "brightness(0) invert(1)" }}>
            <GithubOriginalWordmark size={100} />
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <a
              href="https://github.com/MinjoonHK"
              target="_blank"
              rel="noreferrer"
              className="archivingLink"
            >
              GITHUB 방문하기
            </a>
          </div>
          <ul className="archivingList">
            <li>공부한 것들을 기록하고 있습니다</li>
            <li>과거 프로젝트 코드를 관리하고 있습니다</li>
            <li>프로젝트를 이해하기 쉽게 문서화 합니다</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Archiving;
