import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to bottom, rgba(8,12,30,0) 0%, rgba(8,12,30,0.3) 60px, rgba(8,12,30,0.6) 100%)",
        color: "white",
      }}
    >
      <div style={{ textAlign: "center", fontSize: "0.85rem" }}>
        <FontAwesomeIcon icon={faCopyright} /> 2024 Minjoon Park. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
