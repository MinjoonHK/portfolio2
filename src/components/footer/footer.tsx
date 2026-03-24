import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Archiving", href: "#archiving" },
];

const socialLinks = [
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/minjoonpark/",
    label: "LinkedIn",
  },
  {
    icon: faEnvelope,
    href: "mailto:minjoon.park.dev@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background:
          "linear-gradient(to bottom, rgba(8,12,30,0) 0%, rgba(8,12,30,0.3) 60px, rgba(8,12,30,0.6) 100%)",
        color: "white",
      }}
      className="px-[10%] py-10"
    >
      <div className="flex justify-between items-start">
        {/* Left: Brand + Copyright */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold tracking-wider">Minjoon Park</h3>
          <p className="text-xs text-white/40">
            <FontAwesomeIcon icon={faCopyright} /> 2026 Minjoon Park. All rights reserved.
          </p>
        </div>

        {/* Right: Navigation + Contact */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
