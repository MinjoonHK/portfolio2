import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(50,50,50)",
        color: "white",
      }}
    >
      <Marquee autoFill={true} speed={30}>
        <p style={{ marginRight: "50px", fontSize: "1.5rem" }}>
          Thank you for watching!
        </p>
      </Marquee>
      <div style={{ textAlign: "center", fontSize: "0.85rem" }}>
        <FontAwesomeIcon icon={faCopyright} /> 2024 Minjoon Park. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
