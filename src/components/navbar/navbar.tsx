import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = ({ refs }: any) => {
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
          <li
            onClick={() =>
              refs.aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </li>
          <li>|</li>
          <li
            onClick={() =>
              refs.skillsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </li>
          <li>|</li>
          <li
            onClick={() =>
              refs.projectRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
          <li>|</li>
          <li
            onClick={() =>
              refs.archivingRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Archiving
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
