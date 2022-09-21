import React from "react";
import { useTranslation } from "react-i18next";

import "./Contact.css";

export function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <p>
        {t("contact-me-via") + " "}
        <a href="mailto:johnstevenwall@gmail.com">{t("email")}</a>
      </p>
    </div>
  );
}
