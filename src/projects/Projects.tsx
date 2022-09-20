import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";

import northumberlandChess from "../imgs/northumberlandchess.png";
import leoAllan from "../imgs/leoallan.png";

import moominGame from "../imgs/moomingame.gif";
export function Projects() {
  const { t } = useTranslation();

  const rows = [
    [
      `Northumberland Chess Association Website.`,
      `A local chess association wanted me to redesign their site to attract 
      more visitors to read about the chess news in the region`,
      northumberlandChess,
    ],
    [
      `LeoAllan Portfolio site`,
      `A local photographer and videographer wanted a website
       to display all his artistic work`,
      leoAllan,
    ],
    [
      `Moomin Game`,
      `A game based on the Finnish Moomin series where Moomintroll has to find a lost friend`,
      moominGame,
    ],
  ];
  return (
    <div>
      <div id="projects-title">{t("projects")}:</div>
      <br />
      {rows.map(([title, bio, src]) => {
        return (
          <div>
            <div className="project-row">
              <div className="project-item project-title">
                <p>{title}</p>
                <p>{bio}</p>
              </div>
              <div className="project-item">
                <img src={src} alt="" />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
