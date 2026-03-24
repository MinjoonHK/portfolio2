import {
  BootstrapOriginalWordmark,
  Css3OriginalWordmark,
  JavascriptOriginal,
  NextjsOriginalWordmark,
  ReactOriginalWordmark,
  MaterialuiOriginal,
  TypescriptOriginal,
  VitejsOriginal,
} from "devicons-react";
import HtmlPlanet from "../canvas/HtmlPlanet";

const Frontend = () => {
  return (
    <div className="skillsFrontend skills">
      <div className="skillsHeader">
        <h1>Frontend</h1>
      </div>
      <div className="skillsContentWrapper">
        <div className="skillsContent">
          <div className="skillsItems">
            <HtmlPlanet />
          </div>
          <div className="skillsItems">
            <Css3OriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <JavascriptOriginal size={90} />
          </div>
          <div className="skillsItems">
            <ReactOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <TypescriptOriginal size={90} />
          </div>
          <div className="skillsItems">
            <img
              src="/img/react_query.png"
              alt="image not found"
              style={{ width: "90px", height: "90px" }}
            />
          </div>

          <div className="skillsItems">
            <NextjsOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <BootstrapOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <MaterialuiOriginal size={90} />
          </div>
          <div className="skillsItems">
            <VitejsOriginal size={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
