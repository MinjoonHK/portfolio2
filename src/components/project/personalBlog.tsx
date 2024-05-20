import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PersonalBlogImg from "./img/personalBlogImg";
import { Button } from "antd";
import { GithubOriginal } from "devicons-react";
const PersonalBlog = () => {
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
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/MinjoonHK/Personal_Blog"
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
                <b>
                  <p>Django 를 이용해서 만든 블로그 페이지 입니다</p>
                </b>
                <p>
                  첫음으로 만들어본 웹 풀스택 개발 프로젝트 입니다 파이썬의 웹
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
                      <td>프로젝트 기여도:</td>
                      <td>100%</td>
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
              {PersonalBlogImg.map((img, idx) => {
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

export default PersonalBlog;
