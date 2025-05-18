import {
  VercelOriginalWordmark,
  GithubactionsOriginal,
  AmazonwebservicesOriginalWordmark,
  JenkinsOriginal,
} from "devicons-react";

const Deploy = () => {
  return (
    <div className="skillsFrontend skills">
      <div className="skillsHeader" style={{ textAlign: "center" }}>
        <h1>Deploy</h1>
      </div>
      <div className="skillsContentWrapper">
        <div className="skillsContent">
          <div className="skillsItems">
            <JenkinsOriginal size={90} />
          </div>
          <div className="skillsItems">
            <AmazonwebservicesOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <GithubactionsOriginal size={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
