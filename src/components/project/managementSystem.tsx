import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ManagementSystemImg from "./img/managementSystemImg";
import { Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { GithubOriginal } from "devicons-react";
const ManagementSystem = () => {
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
            <h2>Management System</h2>
          </div>
          <div>2023.06 - 2023.08</div>
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
                  <img src="/img/MS1.png" alt="이미지가 표시되지 않습니다" />
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
              </div>
            </div>
            <div className="ProjectSummaryWrapper">
              <div className="ProjectSummaryTitle">PROJECT SUMMARY</div>
              <div className="ProjectSummaryContent">
                <p>
                  <b>Kellon EPC</b> 에서 3개월간의 <b>인턴십</b> 기간동안 참여한
                  프로젝트입니다.
                </p>
                <p>
                  <b>홍콩에서 30명 규모의 중소기업</b>에서 여름방학 기간동안
                  풀스택 개발 인턴으로 근무 하였습니다. 작은 규모의 회사였던
                  만큼 다양한 경험을 쌓을수 있었습니다.
                </p>
                <p>
                  저는 프로젝트 구상단계부터 참여하여
                  <b>UI 구현, API 및 DB 구축을 담당하였습니다.</b> 첫 실무
                  경험이었던 만큼 미숙한 부분도 많았지만 여가시간을 활용하여
                  인터넷 강의와 팀원들의 코드 리뷰를 통해 빠르게 팀에 적응할수
                  있었습니다. 동료들과 함께 일하며 협업능력을 키울수 있던 뜻깊은
                  경험이었습니다.
                </p>
                <p>
                  개발을 담당했던 기능으로는 달력을 이용한 일정관리와
                  파일교환,이메일 발송, 3개국어 번역 그리고 로그인과
                  회원가입입니다.
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
                      <td>인턴십</td>
                    </tr>
                    <tr>
                      <td>프로젝트 기여도:</td>
                      <td>UI(100%), API(50%), DB(50%)</td>
                    </tr>
                    <tr>
                      <td>Tech Stack:</td>
                      <td>
                        React.js, Express.js, TypeScript, MySQL, Ant Design
                      </td>
                    </tr>
                    <tr>
                      <td>Deploy:</td>
                      <td>Ubuntu Server</td>
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
              {ManagementSystemImg.map((img, idx) => {
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

export default ManagementSystem;
