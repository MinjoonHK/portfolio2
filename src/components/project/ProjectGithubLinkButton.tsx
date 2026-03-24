import { Button } from "antd";
import { GithubOriginal } from "devicons-react";
import "./project.css";

type Props = { href: string };

export default function ProjectGithubLinkButton({ href }: Props) {
  return (
    <a style={{ textDecoration: "none" }} href={href}>
      <Button className="projectGithubLinkButton" type="default">
        <span className="projectGithubLinkIcon">
          <GithubOriginal size={30} />
        </span>
        GITHUB 에서 확인하기
      </Button>
    </a>
  );
}
