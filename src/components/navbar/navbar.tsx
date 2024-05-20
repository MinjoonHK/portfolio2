import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = ({ refs }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleNavClick = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsBurgerOpen(false);
  };

  return (
    <div className={`navbarWrapper ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ cursor: "pointer" }}
        >
          <h1>Minjoon Park's Portfolio</h1>
        </div>
        <div className="burgerMenu" onClick={toggleBurgerMenu}>
          <FontAwesomeIcon icon={faBars as IconProp} />
        </div>
        <ul className={`nav-links ${isBurgerOpen ? "open" : ""}`}>
          <li onClick={() => handleNavClick(refs.aboutRef)}>About Me</li>
          <li className="separator">|</li>
          <li onClick={() => handleNavClick(refs.skillsRef)}>Skills</li>
          <li className="separator">|</li>
          <li onClick={() => handleNavClick(refs.projectRef)}>Projects</li>
          <li className="separator">|</li>
          <li onClick={() => handleNavClick(refs.archivingRef)}>Archiving</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
