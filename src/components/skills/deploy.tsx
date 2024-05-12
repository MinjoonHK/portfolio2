import {
  VercelOriginalWordmark,
  GithubactionsOriginal,
  AmazonwebservicesOriginalWordmark,
} from "devicons-react";

const Deploy = () => {
  return (
    <div className="skillsFrontend skills">
      <div className="skillsHeader" style={{ textAlign: "center" }}>
        <h1>Deploy</h1>
      </div>
      <div className="skillsContent">
        <div className="skillsItems">
          <VercelOriginalWordmark size={75} />
        </div>
        <div className="skillsItems">
          <AmazonwebservicesOriginalWordmark size={75} />
        </div>
        <div className="skillsItems">
          <GithubactionsOriginal size={75} />
        </div>
      </div>
    </div>
  );
};

export default Deploy;
