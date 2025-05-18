import {
  FigmaOriginal,
  GithubOriginalWordmark,
  NotionOriginal,
  SlackOriginal,
  SlackOriginalWordmark,
} from "devicons-react";

const Collaobration = () => {
  return (
    <div className="skillsFrontend skills">
      <div className="skillsHeader" style={{ textAlign: "center" }}>
        <h1>Collaboration</h1>
      </div>
      <div className="skillsContentWrapper">
        <div className="skillsContent">
          <div className="skillsItems">
            <FigmaOriginal size={90} />
          </div>
          <div className="skillsItems">
            <GithubOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <NotionOriginal size={90} />
          </div>
          <div className="skillsItems">
            <SlackOriginal size={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaobration;
