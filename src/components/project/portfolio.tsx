import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PortfolioImg from "./img/portfolioImg";
import { Button } from "antd";
import { GithubOriginal } from "devicons-react";
const Portfolio = () => {
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
            <h2>Portfolio Page</h2>
          </div>
          <div>2024.05 - 2024.05</div>
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
                    src="/img/portfolio2_banner.png"
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
                  href="https://github.com/MinjoonHK/portfolio2"
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
                <p>현재 보고계시는 포트폴리오 페이지 입니다</p>
                <p>
                  기존의 <b>Vanilla JS</b>로 작성되었던 포트폴리오 페이지를{" "}
                  <b>React.js</b>로 리팩토링 하였습니다
                </p>
                <p>
                  <b>반응형 디자인</b>과 이미지를 표시할 <b>모달창</b>을
                  추가하여 사용자 경험을 개선하였습니다.
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
                      <td>React.js, TypeScript</td>
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
              {PortfolioImg.map((img, idx) => {
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

export default Portfolio;
