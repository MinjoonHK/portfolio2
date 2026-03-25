import { Button } from "antd";
import "./project.css";

type Props = { href: string; iconSrc: string; label: string };

export default function ProjectStoreLinkButton({
  href,
  iconSrc,
  label,
}: Props) {
  return (
    <a
      style={{ textDecoration: "none" }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="projectGithubLinkButton" type="default">
        <span className="projectStoreLinkIcon">
          <img src={iconSrc} alt="" width={28} height={28} />
        </span>
        {label}
      </Button>
    </a>
  );
}
