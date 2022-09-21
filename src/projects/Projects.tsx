import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";

import northumberlandChess from "../imgs/northumberlandchess.png";
import leoAllan from "../imgs/leoallan.png";

import moominGame from "../imgs/moomingame.gif";
import quickSong from "../imgs/quicksong.jpg";

export function Projects() {
  const { t } = useTranslation();
  const chipTitles = [
    ["React", "TS", "Golang", "Google Drive API"],
    ["React", "TS", "Golang", "Google Drive API"],
    ["Unity2D", "Desktop"],
    ["Flutter", "Dart", "Android"],
  ];
  const rows = [
    [
      t("project-items.northumberlandchess-title"),
      t("project-items.northumberlandchess-bio"),

      northumberlandChess,
    ],
    [
      t("project-items.leoallan-title"),
      t("project-items.leoallan-bio"),
      leoAllan,
    ],
    [
      t("project-items.moomingame-title"),
      t("project-items.moomingame-bio"),
      moominGame,
    ],
    ["QuickSong", t("project-items.quicksong-bio"), quickSong],
  ];
  return (
    <>
      <div className="project-title">{t("projects")}:</div>
      <br />
      {rows.map(([title, bio, src], i) => {
        return (
          <div key={i.toString()}>
            <div className="project-row">
              <div className="project-item project-title">
                <p>{title}</p>

                <p>{bio}</p>
                {chipTitles[i].map((chipTitle, j) => {
                  return (
                    <div key={j.toString()} className="project-chip">
                      {chipTitle}
                      <span className="project-closebtn">&times;</span>
                    </div>
                  );
                })}
              </div>
              <div className="project-item">
                <img src={src} alt="" />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
}
