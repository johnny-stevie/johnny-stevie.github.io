import React from "react";
import { useTranslation } from "react-i18next";
import { HoverableButton } from "../custom_ui/Button";

import "./Contact.css";

export function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <HoverableButton
        onClick={() =>
          window.open("mailto:johnstevenwall@gmail.com", "_blank")?.focus()
        }
      >
        {t("contact-me-via") + " " + t("email")}
      </HoverableButton>
      <div className="social-media-links">
        <a
          href="https://www.linkedin.com/in/john-wall-061148231/"
          className="fa fa-linkedin"
          target="_blank"
          rel="noreferrer"
        >
          {""}
        </a>
        <a
          href="https://github.com/johnny-stevie"
          target="_blank"
          rel="noreferrer"
          className="fa fa-github"
        >
          {""}
        </a>
      </div>
    </div>
  );
}
