import React from "react";
import { useTranslation } from "react-i18next";
import { ATagButton } from "../custom_ui/Button";
import "./Toolbar.css";
export function Toolbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
  const supportedLanguages = ["en", "fr", "es", "de", "ru", "zh"];
  return (
    <div className="toolbar">
      <div className="toolbar-link dropdown">
        <p className="toolbar-text dropdown-btn">{t("options.lang-option")}</p>
        <div className="dropdown-content">
          {supportedLanguages.map((lang, i) => {
            return (
              <ATagButton
                key={i.toString() + "-" + lang}
                className="dropdown-link"
                onClick={() => changeLanguage(lang)}
              >
                {lang.toUpperCase()}
              </ATagButton>
            );
          })}
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
