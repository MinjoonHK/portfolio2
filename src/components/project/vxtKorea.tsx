import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VxtKoreaImg from "./img/vxtKoreaImg";
import { Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { GithubOriginal } from "devicons-react";
const VxtKorea = () => {
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
            <h2>VXT Korea 홈페이지</h2>
          </div>
          <div>2023.12 - 2024.01</div>
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
                  <img src="/img/vxt1.png" alt="이미지가 표시되지 않습니다" />
                </div>
              </div>
              <div className="ClickImageDescription">
                클릭하여 프로젝트 이미지를 확인해보세요!
              </div>
              <div className="projectButton">
                <a href="https://vxtkorea.net//">
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
              </div>
            </div>
            <div className="ProjectSummaryWrapper">
              <div className="ProjectSummaryTitle">PROJECT SUMMARY</div>
              <div className="ProjectSummaryContent">
                <p>
                  <b>VXT Korea</b> 의 설립을 희망하는 지인이 있어 도움을 주고자
                  <br />
                  제작하게 되었습니다.
                </p>
                <p>
                  회사의 얼굴인 홈페이지인 만큼 디자인과 <b>Framer Motion</b> 을
                  <br />
                  활용한 이펙트등 다채로운 홈페이지 제작을 위해 노력하였습니다.
                </p>
                <p>
                  방문자들의 문의를 위해 NodeMailer 를 이용하여 이메일을 통한
                  문의 수신 기능을 추가하였습니다
                </p>
                <p>
                  효율적인 프로젝트 관리를 위해 <b>AWS S3</b> 와<b>AWS EC2</b>{" "}
                  를 이용하여 정적페이지와 API를 따로 배포하였습니다. <br />
                </p>
                <p>
                  이후 <b>AWS Cloud Front</b>를 이용하여 https로 전환하였습니다.
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
                      <td>React.js, Express.js, TypeScript, Framer Motion</td>
                    </tr>
                    <tr>
                      <td>Deploy:</td>
                      <td>AWS S3, AWS EC2</td>
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
              {VxtKoreaImg.map((img, idx) => {
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

export default VxtKorea;
