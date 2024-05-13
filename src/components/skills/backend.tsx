import {
  NodejsOriginalWordmark,
  ExpressOriginalWordmark,
  JavaOriginalWordmark,
  SpringOriginalWordmark,
  MysqlOriginalWordmark,
  MongodbOriginalWordmark,
} from "devicons-react";

const Backend = () => {
  return (
    <div className="skillsFrontend skills">
      <div className="skillsHeader" style={{ textAlign: "center" }}>
        <h1>Backend</h1>
      </div>
      <div className="skillsContentWrapper">
        <div className="skillsContent">
          <div className="skillsItems">
            <NodejsOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <ExpressOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <JavaOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <SpringOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <MysqlOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <MongodbOriginalWordmark size={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
