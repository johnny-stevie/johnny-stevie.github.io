import React from "react";
import { useTranslation } from "react-i18next";
import { HoverableButton } from "../custom_ui/Button";

import "./Contact.css";

export function Contact() {
  const { t } = useTranslation();
  return (
    <HoverableButton
      onClick={() =>
        window.open("mailto:johnstevenwall@gmail.com", "_blank")?.focus()
      }
    >
      {t("contact-me-via") + " " + t("email")}
    </HoverableButton>
  );
}
