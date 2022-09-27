import React, { useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import photoOfMe from "./imgs/me_2.jpg";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("projects-section-animation");
        }
      });
    });
    const projectsSection = document.querySelector(".projects-section");
    const contactSection = document.querySelector(".contact-section");
    if (projectsSection && contactSection) {
      observer.observe(projectsSection);
      observer.observe(contactSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/** main page */}
      <div className="page">
        <div id="about" className="center about-me-section">
          <div>
            <h1 className="greeting">{t("title")}</h1>
          </div>
          <div className="about-row">
            <div className="frame">
              <img
                className="profile-pic"
                src={photoOfMe}
                alt={t("picture-of-me")}
              />
            </div>
            <br />
            <div className="about-profile-section">
              <div className="about-text">{t("about-me")}</div>
              <br />
              <Skills />
            </div>
          </div>
          <br />
        </div>

        <div id="projects" className="projects-section">
          <Projects />
        </div>

        <div id="contact" className="center contact-section">
          <Contact />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
