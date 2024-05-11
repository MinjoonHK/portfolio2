import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <div className={`navbarWrapper ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="logo">
          <h1>Minjoon Park's Portfolio</h1>
        </div>
        <div className="burgerMenu">
          <FontAwesomeIcon icon={faBars as IconProp} />
        </div>
        <ul className="nav-links">
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Archiving</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
