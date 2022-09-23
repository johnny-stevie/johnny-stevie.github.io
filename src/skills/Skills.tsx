import React from "react";
import { useTranslation } from "react-i18next";
import { CV_HREF } from "../constants";
import { HoverableButton } from "../custom_ui/Button";
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
              {/* <span className="closebtn">&times;</span> */}
            </div>
          );
        })}
      </div>
      <br />
      <HoverableButton onClick={() => window.open(CV_HREF, "_blank")?.focus()}>
        {t("my-cv")}
      </HoverableButton>
    </div>
  );
}
