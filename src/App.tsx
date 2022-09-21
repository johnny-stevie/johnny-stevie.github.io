import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import photoOfMe from "./imgs/me.jpg";
import { Toolbar } from "./toolbar/Toolbar";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
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
          <div>{t("title")}</div>
          <br />
          <div className="frame">
            <img src={photoOfMe} alt={t("picture-of-me")} />
          </div>
          <br />
          <Skills />
          <br />
        </div>

        <div className="projects-section section">
          <Projects />
        </div>

        <div className="center contact-section">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
