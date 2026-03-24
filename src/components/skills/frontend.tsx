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
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                boxShadow:
                  "0 0 0 2px rgba(49,120,198,0.9), 0 0 16px rgba(49,120,198,0.6), 0 0 36px rgba(49,120,198,0.25)",
                flexShrink: 0,
              }}
            >
              {/* Glossy highlight */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "45%",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />
              <TypescriptOriginal size={90} />
            </div>
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
