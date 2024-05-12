import {
  AntdesignOriginal,
  BootstrapOriginalWordmark,
  Css3OriginalWordmark,
  Html5OriginalWordmark,
  JavascriptOriginal,
  NextjsOriginal,
  ReactOriginalWordmark,
  ReduxOriginal,
  TypescriptOriginal,
} from "devicons-react";

const Frontend = () => {
  return (
    <div className="skillsFrontend skills">
      <div className="skillsHeader">
        <h1>Frontend</h1>
      </div>
      <div className="skillsContent">
        <div className="skillsItems">
          <Html5OriginalWordmark size={75} />
        </div>
        <div className="skillsItems">
          <Css3OriginalWordmark size={75} />
        </div>
        <div className="skillsItems">
          <JavascriptOriginal size={75} />
        </div>
        <div className="skillsItems">
          <ReactOriginalWordmark size={75} />
        </div>
        <div className="skillsItems">
          <TypescriptOriginal size={75} />
        </div>
        <div className="skillsItems">
          <ReduxOriginal size={75} />
        </div>

        <div className="skillsItems">
          <NextjsOriginal size={75} />
        </div>
        <div className="skillsItems">
          <BootstrapOriginalWordmark size={75} />
        </div>
        <div className="skillsItems">
          <AntdesignOriginal size={75} />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
