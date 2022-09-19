import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import photoOfMe from "./me.jpg";
import { Toolbar } from "./toolbar/Toolbar";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
function App() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="toolbar">
        <Toolbar />
      </div>

      {/** main page */}
      <div className="page">
        <div className="center section">
          <div className="content">
            <div>{t("title")}</div>
            <br />
            <div className="frame">
              <img src={photoOfMe} alt={t("picture-of-me")} />
            </div>
            <br />
            <Skills />
            <br />
          </div>
        </div>
        <div className="section">
          <div></div>
          <div className="content">
            <Projects />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
