import React from "react";
import { useTranslation } from "react-i18next";
import "./Toolbar.css";
export function Toolbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
  return (
    <div>
      <div className="dropdown">
        {t("lang-option")}
        <div className="dropdown-content">
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("fr")}>FR</button>
        </div>
      </div>
    </div>
  );
}
