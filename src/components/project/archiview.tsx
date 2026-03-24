import { useState } from "react";
import "./project.css";
import ArchiviewImg from "./img/archiviewImg";
import ProjectImageModal from "./ProjectImageModal";
import ProjectGithubLinkButton from "./ProjectGithubLinkButton";

const Archiview = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="ProjectWrapper">
      <div className="ProjectInnerWrapper">
        <div className="ProjectTitle">
          <div>
            <h2>아카이뷰</h2>
          </div>
          <div>2025.11 - 2026.03</div>
        </div>
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
                    src="/img/archiview_banner.png"
                    alt="이미지가 표시되지 않습니다"
                  />
                </div>
              </div>
              <div className="ClickImageDescription">
                클릭하여 프로젝트 이미지를 확인해보세요!
              </div>
              <div className="projectButton">
                <ProjectGithubLinkButton href="https://github.com/MinjoonHK" />
              </div>
            </div>
            <div className="ProjectSummaryWrapper">
              <div className="ProjectSummaryTitle">PROJECT SUMMARY</div>
              <div className="ProjectSummaryContent">
                인스타그램에 저장하거나 DM으로 보내두었던 정보를 나중에 찾기
                어렵다는 문제에서 출발한 서비스 <b>아카이뷰</b> 입니다.
                <p>
                  &apos;SNS 속에 흩어진 정보를 제대로 쓰고 싶다&apos;는
                  생각으로 기획했고, 5인 팀에서 프론트엔드로 참여했습니다.
                </p>
                <p>
                  <b>React Native(Expo)</b>로 모바일 앱과 <b>Next.js</b>로 웹을
                  함께 다루었고, <b>Feature-Sliced Design(FSD)</b>과{" "}
                  <b>pnpm·Turborepo</b> 모노레포로 코드 구조를 나누었습니다.
                </p>
                <p>
                  앱과 웹은 <b>WebView 브릿지</b>로 연결했으며,{" "}
                  <b>App Store</b>, <b>Google Play</b>, <b>웹</b>에서 이용할 수
                  있습니다.
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
                      <td>프로젝트 기여도:</td>
                      <td>프론트엔드 (모바일·웹)</td>
                    </tr>
                    <tr>
                      <td>Tech Stack:</td>
                      <td>
                        React Native, Expo, Next.js, TypeScript,
                        <br />
                        WebView 브릿지, FSD
                      </td>
                    </tr>
                    <tr>
                      <td>Build:</td>
                      <td>Expo, Next.js, Turborepo</td>
                    </tr>
                    <tr>
                      <td>CI/CD:</td>
                      <td>Github Action</td>
                    </tr>
                    <tr>
                      <td>Deploy:</td>
                      <td>App Store, Google Play, Web</td>
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
        images={ArchiviewImg}
      />
    </div>
  );
};

export default Archiview;
