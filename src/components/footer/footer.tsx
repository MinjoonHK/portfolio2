import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(50,50,50)",
        color: "white",
        fontSize: "0.85rem",
      }}
    >
      <Marquee autoFill={true} speed={70}>
        <p style={{ marginRight: "50px" }}>Thank you for watching!</p>
      </Marquee>
      <div style={{ textAlign: "center" }}>
        <FontAwesomeIcon icon={faCopyright} /> 2024 Minjoon Park. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
