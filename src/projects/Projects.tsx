import React from "react";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();
  return (
    <div>
      <div id="projects-title">{t("projects")}:</div>
    </div>
  );
}
