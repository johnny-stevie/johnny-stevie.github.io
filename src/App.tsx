import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import photoOfMe from "./imgs/me.jpg";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
function App() {
  const { t } = useTranslation();

  return (
    <div>
      {/** main page */}
      <div className="page">
        <div className="center section about-me-section">
          <h1>{t("title")}</h1>
          <br />
          <div className="frame">
            <img src={photoOfMe} alt={t("picture-of-me")} />
          </div>
          <br />
          <Skills />
          <br />
        </div>
        <br />

        <div className="projects-section">
          <Projects />
        </div>

        <div className="section center contact-section">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
