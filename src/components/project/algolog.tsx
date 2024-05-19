import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AlgologImg from "./img/algologImg";
import { Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { GithubOriginal } from "devicons-react";
const Algolog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (modalOpen) {
      document.querySelector(".modal-content")?.classList.add("open");
    } else {
      document.querySelector(".modal-content")?.classList.remove("open");
    }
  }, [modalOpen]);
  return (
    <div className="ProjectWrapper">
      <div className="ProjectInnerWrapper">
        <div className="ProjectTitle">
          <div>
            <h2>Algolog</h2>
          </div>
          <div>2024.02 - 2024.03</div>
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
                    src="/img/algolog_logindark.png"
                    alt="이미지가 표시되지 않습니다"
                  />
                </div>
              </div>
              <div className="ClickImageDescription">
                클릭하여 프로젝트 이미지를 확인해보세요!
              </div>
              <div className="projectButton">
                <a href="http://algorithmlog.com/">
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
                  href="https://github.com/MinjoonHK/AlgoLog_Reboot"
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
                <b>Next.js</b> 와 <b>MongoDB</b> 학습을위해 만든 토이 프로젝트
                입니다.
                <p>
                  <b>Next.js</b> 프레임워크를 사용하여 처음으로
                  <b>SSR(Server-side Rendering)</b> <br />을 구현해보았습니다.
                  SSR을 통해 초기 로딩시간을 줄이고 SEO에 유리한
                  <br /> 페이지를 만들수 있었습니다.
                </p>
                <p>
                  <b>NextAuth</b> 라이브러리를 활용하여 빠르게 원하는 기능을
                  구현할수 있었습니다.
                  <br /> 타겟 유저층의 편의를 고려하여 일반 로그인을 비롯하여{" "}
                  <b>Naver</b>, <b>Github</b>,<br /> 그리고 <b>Google</b> 을
                  통한 oAuth 로그인을 허용하였습니다.
                  <br />
                </p>
                <p>
                  <b>ChatGPT API</b> 를 통해 문제의 답을 반례와 함께 제공하는
                  페이지를 구현하였습니다.
                </p>
                <p>
                  Github Actions를 통해 <b>CI/CD</b> 파이프라인을 구축하여 실제
                  배포 전에
                  <br /> <b>Preview Deploy</b>에 먼저 배포하도록 설정하여 배포전
                  점검후 <b>main</b> 브렌치에
                  <br /> 머지할때 자동으로 <b>Vercel</b>에 배포되도록
                  설정하였습니다.
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
                      <td>프로젝트 기여도:</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>Tech Stack:</td>
                      <td>
                        React.js, Next.js, Redux Toolkit, TypeScript, MongoDB,
                        Antd
                      </td>
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
              {AlgologImg.map((img, idx) => {
                return (
                  <div key={`CarouselImg${idx}`} className="CarouselImageBox">
                    <div
                      style={{
                        textAlign: "center",
                        backgroundColor: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {img.imgTitle}
                    </div>
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

export default Algolog;
