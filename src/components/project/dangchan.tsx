import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ResumeEditorImg from "./img/resumeEditorImg";
import { Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { GithubOriginal } from "devicons-react";
import DangchanImg from "./img/dangchanImg";
const Dangchan = () => {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (modalOpen) {
      document.querySelector(".modal-content")?.classList.add("open");
      document.body.style.overflow = "hidden";
    } else {
      document.querySelector(".modal-content")?.classList.remove("open");
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);
  return (
    <div className="ProjectWrapper">
      <div className="ProjectInnerWrapper">
        <div className="ProjectTitle">
          <div>
            <h2>당찬이</h2>
          </div>
          <div>2024.07 - 2024.08</div>
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
                    src="/img/당찬이_1.png"
                    alt="이미지가 표시되지 않습니다"
                  />
                </div>
              </div>
              <div className="ClickImageDescription">
                클릭하여 프로젝트 이미지를 확인해보세요!
              </div>
              <div className="projectButton">
                <a href="https://github.com/MinjoonHK/sesacFrontWebApp">
                  <Button
                    style={{
                      height: "50px",
                      width: "100%",
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    size="large"
                  >
                    <GlobalOutlined />
                    WEB PAGE 방문하기
                  </Button>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/MinjoonHK/sesacFrontWebApp"
                >
                  <Button
                    style={{
                      alignItems: "center",
                      height: "50px",
                      backgroundColor: "transparent",
                      fontWeight: "bold",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1rem",
                    }}
                  >
                    <GithubOriginal size={30} style={{ marginRight: "5%" }} />{" "}
                    GITHUB 에서 확인하기
                  </Button>
                </a>
              </div>
            </div>
            <div className="ProjectSummaryWrapper">
              <div className="ProjectSummaryTitle">PROJECT SUMMARY</div>
              <div className="ProjectSummaryContent">
                SESAC 해커톤 본선 진출 작품인 AI 챗봇 서비스 <b>당찬이</b>{" "}
                입니다.
                <p>
                  사회적 약자를 위한 어플리케이션 이라는 주제로 1달간
                  제작하였습니다.
                </p>
                <p>
                  4명으로 이루어진 팀에서 팀장으로 참여하여 프론트엔드 100%,
                  백엔드 100%를 담당하였습니다.
                </p>
                <p>
                  <b>PWA(Progressive Web App)</b> 기술을 도입하여 사용자가
                  데스크톱, 모바일 등 다양한 채널에서 앱 설치 및 접속이
                  가능하도록 접근성을 향상시켰습니다.
                </p>
                <p>
                  <b>ChatGPT API와 검색 증강 생성(RAG)</b> 기술을 이용해
                  사용자가 쉽고 빠르게 보조금 정보를 얻을 수 있는 AI 챗봇 기능을
                  구현하였습니다.
                </p>
                <p>
                  <b>Figma</b>를 이용해 디자이너와 협업하며, 사용자 중심의
                  UX/UI를 구축하였습니다.
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
                      <td>4인 팀프로젝트</td>
                    </tr>
                    <tr>
                      <td>프로젝트 기여도:</td>
                      <td>프론트엔드: 100% 백엔드: 100%, AI: 50%</td>
                    </tr>
                    <tr>
                      <td>Tech Stack:</td>
                      <td>
                        React.js, TypeScript, Material UI,
                        <br />
                        MySQL, PineCone, Nest.js, Flask
                      </td>
                    </tr>
                    <tr>
                      <td>Build:</td>
                      <td>Vite.js, Flask</td>
                    </tr>
                    <tr>
                      <td>CI/CD:</td>
                      <td>Github Action</td>
                    </tr>
                    <tr>
                      <td>Deploy:</td>
                      <td>Vercel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="modalContent"
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        closeTimeoutMS={500}
      >
        <div
          onClick={(e) => {
            if (e.target == e.currentTarget) {
              setModalOpen(false);
            }
          }}
          className="modalInner"
        >
          <div
            className="modalCarouselWrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Carousel swipeable useKeyboardArrows>
              {DangchanImg.map((img, idx) => {
                return (
                  <div key={`CarouselImg${idx}`} className="CarouselImageBox">
                    <div className="ImageTitle">{img.imgTitle}</div>
                    <img src={img.imgSrc} alt="이미지를 표시할수 없습니다!" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dangchan;
