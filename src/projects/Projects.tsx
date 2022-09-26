import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";

import northumberlandChess from "../imgs/northumberlandchess.png";
import leoAllan from "../imgs/leoallan.png";

import moominGame from "../imgs/moomingame.gif";
// import quickSong from "../imgs/quicksong.jpg";
import quickSong from "../imgs/quicksong.jpg";
import { LEOALLAN_SITE, NORTHUMBERLANDCHESS_SITE } from "../constants";

export function Projects() {
  const { t } = useTranslation();
  const chipTitles = [
    ["React", "TS", "Golang", "Google Drive API"],
    ["React", "TS", "Golang", "Google Drive API"],
    ["Unity2D", "Desktop"],
    [
      "Flutter",
      "Dart",
      "Android",
      "Python",
      "Django",
      "Nginx",
      "Raspberry Pi",
      "MySQL",
    ],
  ];

  const projectLinks = [NORTHUMBERLANDCHESS_SITE, LEOALLAN_SITE];
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
      <h1 className="section project-title">{t("projects")}</h1>
      <br />
      {rows.map(([title, bio, src], i) => {
        return (
          <div key={i.toString()}>
            <div className="section project-row">
              <div className="project-item project-title">
                <h2>{title}</h2>

                <p>{bio}</p>
                {chipTitles[i].map((chipTitle, j) => {
                  return (
                    <div key={j.toString()} className="project-chip">
                      {chipTitle}
                      {/* <span className="project-closebtn">&times;</span> */}
                    </div>
                  );
                })}
              </div>
              <div className="project-item">
                {i < projectLinks.length ? (
                  <img
                    src={src}
                    className="pop-out-img regular"
                    onClick={() => {
                      window.open(projectLinks[i], "_blank")?.focus();
                    }}
                    alt=""
                  />
                ) : i !== rows.length - 1 ? (
                  <img src={src} className="regular" alt="" />
                ) : (
                  <img src={src} className="extra-tall" alt="" />
                )}
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
}
