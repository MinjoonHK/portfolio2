import { TypeAnimation } from "react-type-animation";
import "./landing.css";
const Landing = () => {
  return (
    <div className="outerWrapper">
      <div className="Wrapper">
        <div className="contentWrapper">
          <div className="contentInnerWrapper">
            <div className="mainContentWrapper">
              <div className="contentHeader">
                <div>MINJOON PARK</div>
                <div>PORTFOLIO</div>
              </div>
              <div className="mainContent">
                <div className="introduction">
                  <TypeAnimation
                    sequence={[
                      '"기본이란 프레임과 열정이란 엔진으로" \n\n안녕하세요 신입 웹 개발자 박민준 입니다',
                    ]}
                    wrapper="span"
                    style={{ whiteSpace: "pre-line" }}
                    cursor={false}
                    speed={20}
                  />
                </div>
                <div className="content">
                  긍정적인 태도와 끊임없는 자기개발을 바탕으로
                  <br /> 최고의 사용자 경험을 제공 하겠습니다
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
