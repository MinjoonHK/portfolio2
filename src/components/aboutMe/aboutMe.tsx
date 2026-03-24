import React from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div
      className="aboutMeWrapper"
      style={{
          background: "linear-gradient(to bottom, rgba(8,12,30,0) 0%, rgba(8,12,30,0.15) 60px, rgba(8,12,30,0.45) 140px, rgba(8,12,30,0.55) 100%)",
          padding: "1% 0",
          color: "rgba(240, 245, 255, 0.95)"
        }}
    >
      <div
        className="aboutMeHeader"
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "4px",
          color: "#cce4ff",
          textShadow: "0 0 10px #7eb8ff, 0 0 24px #4a90d9, 0 0 40px rgba(74,144,217,0.4)",
        }}
      >
        ABOUT ME
      </div>
      <div
        className="aboutMeContentWrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <div className="aboutMeContentGrid">
          <div className="aboutContentItems">
            <div className="aboutContentHeader">PROFILE</div>

            <table style={{ width: "100%" }}>
              <colgroup>
                <col style={{ width: "25%" }} />
                <col style={{ width: "65%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>이름:</td>
                  <td>박민준</td>
                </tr>
                <tr>
                  <td>생년월일:</td>
                  <td>1998.09.14</td>
                </tr>
                <tr>
                  <td>군필여부:</td>
                  <td>군필(병장)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="aboutContentItems">
            <div className="aboutContentHeader">EDUCATION</div>
            <table style={{ width: "100%" }}>
              <colgroup>
                <col style={{ width: "40%" }} />
                <col style={{ width: "60%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>2024.01 - 2024.05</td>
                  <td>멀티캠퍼스(JAVA 21회차)</td>
                </tr>
                <tr>
                  <td>2017.09 - 2023.08</td>
                  <td>홍콩이공대학교(전기공학)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="aboutContentItems">
            <div className="aboutContentHeader">CAREER</div>
            <table style={{ width: "100%" }}>
              <colgroup>
                <col style={{ width: "40%" }} />
                <col style={{ width: "60%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>2024.08-Present</td>
                  <td>미래에셋자산운용</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2023.06-2023.08</td>
                  <td>KELLON EPC(홍콩)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="aboutContentItems">
            <div className="aboutContentHeader">LANGUAGE</div>

            <table style={{ width: "100%" }}>
              <colgroup>
                <col style={{ width: "20%" }} />
                <col style={{ width: "80%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>한국어:</td>
                  <td>모국어</td>
                </tr>
                <tr>
                  <td>영어:</td>
                  <td>TOEIC: R&L(935) S(180)</td>
                </tr>
                <tr>
                  <td>중국어:</td>
                  <td>HSK5급(220)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="aboutContentItems">
            <div className="aboutContentHeader">CERTIFICATION</div>
            <table style={{ width: "100%" }}>
              <colgroup>
                <col style={{ width: "30%" }} />
                <col style={{ width: "70%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>2023.01.06</td>
                  <td>AWS SA Associate</td>
                </tr>
                <tr>
                  <td>2022.12.21</td>
                  <td>AWS Developer Associate</td>
                </tr>
                <tr>
                  <td>2021.08.06</td>
                  <td>컴퓨터활용능력 1급</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="aboutContentItems">
            <div className="aboutContentHeader">CONTACT</div>
            <table style={{ width: "100%" }}>
              <colgroup>
                <col style={{ width: "20%" }} />
                <col style={{ width: "80%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>핸드폰:</td>
                  <td>010-2048-0868</td>
                </tr>
                <tr>
                  <td>이메일:</td>
                  <td>minjoon.park.hk@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
