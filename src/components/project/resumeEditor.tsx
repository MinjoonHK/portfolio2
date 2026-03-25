import { useState } from "react";
import "./project.css";
import ResumeEditorImg from "./img/resumeEditorImg";
import ProjectImageModal from "./ProjectImageModal";
import ProjectGithubLinkButton from "./ProjectGithubLinkButton";

const ResumeEditor = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="ProjectWrapper">
      <div className="ProjectInnerWrapper">
        <div className="ProjectTitle">
          <div>
            <h2>Reditor</h2>
          </div>
          <div>2024.04 - 2024.05</div>
        </div>
        {/* <hr style={{ width: "80%" }} /> */}
        <div className="ProjectContentWrapper">
          <div className="ProjectContentInnerWraper">
            <div className="ProjectContentLeft">
              <div
                onClick={() => {
                  setModalOpen(true);
                }}
                className="ProjectContentImage"
              >
                <div className="ImageBox">
                  <img
                    src="/img/reditor1.png"
                    alt="이미지가 표시되지 않습니다"
                  />
                </div>
              </div>
              <div className="ClickImageDescription">
                클릭하여 프로젝트 이미지를 확인해보세요!
              </div>
              <div className="projectButton">
                <ProjectGithubLinkButton href="https://github.com/MinjoonHK/resumeEditorFrontend" />
              </div>
            </div>
            <div className="ProjectSummaryWrapper">
              <div className="ProjectSummaryTitle">PROJECT SUMMARY</div>
              <div className="ProjectSummaryContent">
                부트캠프 최종 프로젝트인 자소서 첨삭 사이트 <b>Reditor</b>{" "}
                입니다.
                <p>
                  기존의 자소서 첨삭 사이트들이 부족하다고 생각하여 이를 개선해
                  보고자 해당 프로젝트를 기획하게 되었습니다.
                </p>
                <p>
                  5인 팀에 팀원으로 참여하여 프론트엔드를 주로 담당하고
                  백엔드는 일부 지원하였습니다.
                </p>
                <p>
                  <b>Lazy loading, Suspense</b>를 활용하여 <b>Code Splitting</b>
                  을 통해 로딩속도를 개선하였고 RCA로 만든 프로젝트를
                  <b> Vite.js</b> 로 변경하며 빌드 속도를 개선하였습니다
                </p>
                <p>
                  <b>Github Action</b>을 통한 CI/CD 파이프라인 구축과 원활한
                  협업을 위해 Main Branch에 Merge가 발생했을때 Slack을 통한 알림
                  기능을 추가하였습니다
                </p>
              </div>
              <div className="ProjectSummaryTitle">PROJECT OVERVIEW</div>
              <div style={{ marginTop: "2%" }}>
                <table
                  className="ProjectOverviewTable"
                  style={{ width: "100%", fontWeight: "bold" }}
                >
                  <colgroup>
                    <col style={{ width: "40%" }} />
                    <col style={{ width: "60%" }} />
                  </colgroup>
                  <tbody style={{ verticalAlign: "top" }}>
                    <tr>
                      <td>프로젝트 유형:</td>
                      <td>5인 팀프로젝트</td>
                    </tr>
                    <tr>
                      <td>담당 역할:</td>
                      <td>프론트엔드, 백엔드</td>
                    </tr>
                    <tr>
                      <td>Tech Stack:</td>
                      <td>
                        React.js, TypeScript, Redux Toolkit,
                        <br /> Spring Boot, MySQL, Antd
                      </td>
                    </tr>
                    <tr>
                      <td>Build:</td>
                      <td>Gradle, Vite.js</td>
                    </tr>
                    <tr>
                      <td>CI/CD:</td>
                      <td>Github Action</td>
                    </tr>
                    <tr>
                      <td>Deploy:</td>
                      <td>Vercel, CloudType</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectImageModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        images={ResumeEditorImg}
      />
    </div>
  );
};

export default ResumeEditor;
