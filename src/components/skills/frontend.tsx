import {
  AntdesignOriginalWordmark,
  BootstrapOriginalWordmark,
  Css3OriginalWordmark,
  Html5OriginalWordmark,
  JavascriptOriginal,
  NextjsOriginalWordmark,
  ReactOriginalWordmark,
  ReduxOriginal,
  TypescriptOriginal,
  ViteOriginal,
  VitejsOriginal,
} from "devicons-react";

const Frontend = () => {
  return (
    <div className="skillsFrontend skills">
      <div className="skillsHeader">
        <h1>Frontend</h1>
      </div>
      <div className="skillsContentWrapper">
        <div className="skillsContent">
          <div className="skillsItems">
            <Html5OriginalWordmark size={90} />
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
            <ReduxOriginal size={90} />
          </div>

          <div className="skillsItems">
            <NextjsOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <BootstrapOriginalWordmark size={90} />
          </div>
          <div className="skillsItems">
            <AntdesignOriginalWordmark size={90} />
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
