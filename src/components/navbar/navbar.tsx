import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ refs }: any) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleNavClick = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsBurgerOpen(false);
  };

  return (
    <div className="w-full fixed top-0 h-[10vh] bg-white text-[rgb(70,70,70)] z-[100]">
      <nav className="flex justify-between items-center h-full px-[10%] max-[480px]:pl-0 max-[480px]:pr-[5%] text-base">
        <div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1>Minjoon Park's Portfolio</h1>
        </div>

        <div
          className="flex md:hidden border border-[rgb(70,70,70)] h-8 w-8 justify-center items-center rounded-[20%] cursor-pointer"
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        >
          <FontAwesomeIcon icon={faBars as IconProp} />
        </div>

        <ul
          className={`font-bold list-none p-0 m-0 flex flex-col absolute top-[10vh] left-0 w-full bg-white overflow-hidden transition-[max-height] duration-300 ease-in-out md:static md:flex-row md:w-[30%] md:max-h-none md:overflow-visible md:justify-between ${
            isBurgerOpen ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <li
            className="py-4 text-center cursor-pointer md:py-0 md:transition-transform md:duration-300 md:hover:-translate-y-[5px]"
            onClick={() => handleNavClick(refs.aboutRef)}
          >
            About Me
          </li>
          <li className="hidden md:block">|</li>
          <li
            className="py-4 text-center cursor-pointer md:py-0 md:transition-transform md:duration-300 md:hover:-translate-y-[5px]"
            onClick={() => handleNavClick(refs.skillsRef)}
          >
            Skills
          </li>
          <li className="hidden md:block">|</li>
          <li
            className="py-4 text-center cursor-pointer md:py-0 md:transition-transform md:duration-300 md:hover:-translate-y-[5px]"
            onClick={() => handleNavClick(refs.projectRef)}
          >
            Projects
          </li>
          <li className="hidden md:block">|</li>
          <li
            className="py-4 text-center cursor-pointer md:py-0 md:transition-transform md:duration-300 md:hover:-translate-y-[5px]"
            onClick={() => handleNavClick(refs.archivingRef)}
          >
            Archiving
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
