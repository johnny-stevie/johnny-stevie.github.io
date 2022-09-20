import React from "react";
import { useTranslation } from "react-i18next";
import { CV_HREF } from "../constants";
import "./Skills.css";
export function Skills() {
  const { t } = useTranslation();
  const chips = [
    "Web",
    "JS",
    "TS",
    "Python",
    "Java",
    "Flutter",
    "SQL",
    "MongoDB",
    "React",
    "Golang",
    "Unity2D",
  ];
  return (
    <div>
      <b>{t("skills")}:</b>
      <div className="group-skills">
        {chips.map((skill, i) => {
          return (
            <div key={i.toString()} className="chip">
              {skill}
              <span className="closebtn">&times;</span>
            </div>
          );
        })}
      </div>
      <br />
      <a href={CV_HREF} target="_blank" rel="noreferrer">
        {t("my-cv")}
      </a>
    </div>
  );
}
