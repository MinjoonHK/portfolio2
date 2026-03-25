import { useState } from "react";
import "./project.css";
import PersonalBlogImg from "./img/personalBlogImg";
import ProjectImageModal from "./ProjectImageModal";
import ProjectGithubLinkButton from "./ProjectGithubLinkButton";

const PersonalBlog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="ProjectWrapper">
      <div className="ProjectInnerWrapper">
        <div className="ProjectTitle">
          <div>
            <h2>개인 블로그</h2>
          </div>
          <div>06.2022 - 08.2022</div>
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
                  <img src="/img/Blog1.png" alt="이미지가 표시되지 않습니다" />
                </div>
              </div>
              <div className="ClickImageDescription">
                클릭하여 프로젝트 이미지를 확인해보세요!
              </div>
              <div className="projectButton">
                <ProjectGithubLinkButton href="https://github.com/MinjoonHK/Personal_Blog" />
              </div>
            </div>
            <div className="ProjectSummaryWrapper">
              <div className="ProjectSummaryTitle">PROJECT SUMMARY</div>
              <div className="ProjectSummaryContent">
                <b>
                  <p>Django 를 이용해서 만든 블로그 페이지 입니다</p>
                </b>
                <p>
                  처음으로 만들어본 웹 풀스택 개발 프로젝트 입니다 파이썬의 웹
                  프레임 워크인 <b>Django</b> 를 이용해서 백엔드를
                  구현하였습니다.
                </p>
                <p>
                  핵심기능으로는 구글 로그인, 댓글, 태그를 이용한 검색이
                  있습니다. 배포는
                  <b>AWS Lightsail, Docker, 그리고 github</b> 을 이용하였습니다.
                  또한 Certbot 을 이용하여 HTTPS 인증서를 자동으로 갱신하도록
                  설정 하였습니다.
                </p>
                <p>
                  이 프로젝트 이전에는 클라우드 라는 단어 조차 생소하였습니다.
                  하지만 이 프로젝트를 진행하며 클라우드 라는 기술에 흥미를 갖게
                  되었고 더욱 깊은 이해를 위해 <b>AWS</b> 에서 발급하는
                  <b>Associate</b>
                  레벨의 자격증 2개를 취득하였습니다.
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
                      <td>개인 프로젝트</td>
                    </tr>
                    <tr>
                      <td>담당 역할:</td>
                      <td>프론트엔드, 백엔드</td>
                    </tr>
                    <tr>
                      <td>Tech Stack:</td>
                      <td>Django, HTML, BootStrap, AWS LightSail</td>
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
        images={PersonalBlogImg}
      />
    </div>
  );
};

export default PersonalBlog;
