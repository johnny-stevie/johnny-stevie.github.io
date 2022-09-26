import React from "react";
import { useTranslation } from "react-i18next";
import "./Toolbar.css";
export function Toolbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
  return (
    <div className="toolbar">
      <div className="toolbar-link dropdown">
        <p className="toolbar-text">{t("options.lang-option")}</p>
        <div className="dropdown-content">
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("fr")}>FR</button>
        </div>
      </div>

      <div className="toolbar-link">
        <a className="toolbar-text" href="#about">
          {t("options.about-option")}
        </a>
      </div>

      <div className="toolbar-link">
        <a href="#projects" className="toolbar-text">
          {t("options.projects-option")}
        </a>
      </div>

      <div className="toolbar-link">
        <a href="#contact" className="toolbar-text">
          {t("options.contact-option")}
        </a>
      </div>
    </div>
  );
}
