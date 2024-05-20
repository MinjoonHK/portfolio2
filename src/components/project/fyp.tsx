import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FypImg from "./img/fypImg";
import { Button } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import { GithubOriginal } from "devicons-react";
const FYP = () => {
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
            <h2>ChatGPT와 로봇팔</h2>
          </div>
          <div>2022.09 - 2023.03</div>
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
                    src="/img/FYP_Photo.png"
                    alt="이미지가 표시되지 않습니다"
                  />
                </div>
              </div>
              <div className="ClickImageDescription">
                클릭하여 프로젝트 이미지를 확인해보세요!
              </div>
              <div className="projectButton">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/MinjoonHK/vxt"
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
                <a
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1DnBJjYnD865rR_pSP4vK570wJWQ3_PCM/view?usp=sharing"
                >
                  <Button
                    style={{
                      alignItems: "center",
                      height: "50px",
                      backgroundColor: "#5CB083",
                      color: "white",
                      fontWeight: "bold",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1rem",
                    }}
                  >
                    <VideoCameraOutlined />
                    시연영상 시청하기
                  </Button>
                </a>
              </div>
            </div>
            <div className="ProjectSummaryWrapper">
              <div className="ProjectSummaryTitle">PROJECT SUMMARY</div>
              <div className="ProjectSummaryContent">
                <p>
                  졸업프로젝트인 Chat GPT를 탑재한 스마트 로봇팔 프로젝트입니다.
                </p>
                <p>
                  개발자로서의 진로를 정한 후 졸업 전 의미 있는 프로젝트를
                  진행해보고 싶어 컴퓨터 공학과의 팀 프로젝트에 참여하였습니다.
                </p>
                <p>
                  개발 당시 <b>Chat-GPT</b>가 출시되어 화제를 모으고 있었고 이를
                  졸업 프로젝트에 응용해보고자 <b>Chat GPT</b>의{" "}
                  <b>Prompt Engineering</b>을 활용하여 유저와 상호작용하도록
                  만들었습니다.
                </p>
                <p>
                  또한 기획 당시 타겟층을 몸이 불편한 환자들로 설정하였기 때문에
                  편의성을 높이고자 Pyttsx와 Google text to speech를 활용하여
                  대화를 통해 로봇팔에게 명령할 수 있도록 하였습니다.
                </p>
                <p>
                  3명의 다른 팀원들과 함께 노력한 끝에 2023년 공과대학 최우수
                  프로젝트에 선정되었습니다. 또한 2023년 학교를 대표하는 최우수
                  졸업 프로젝트 16개 중 하나로 선정되었습니다.
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
                      <td>3인 팀 프로젝트</td>
                    </tr>
                    <tr>
                      <td>프로젝트 기여도:</td>
                      <td>그림 그리기(100%), 음성인식(100%), GPT(50%)</td>
                    </tr>
                    <tr>
                      <td>Tech Stack:</td>
                      <td>
                        Python, OpenCV, G-code, Pyttsx, Google Cloud,
                        ChatGPT-API
                      </td>
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
              {FypImg.map((img, idx) => {
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

export default FYP;
