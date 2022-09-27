import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";

import northumberlandChess from "../imgs/northumberlandchess.png";
import leoAllan from "../imgs/leoallan.png";

import moominGame from "../imgs/moomingame.gif";
// import quickSong from "../imgs/quicksong.jpg";
import quickSong from "../imgs/quicksong_4.jpg";
import { LEOALLAN_SITE, NORTHUMBERLANDCHESS_SITE } from "../constants";
import { Button } from "../custom_ui/Button";

export function Projects() {
  const { t } = useTranslation();

  const chipTitles = [
    ["React", "TS", "Golang", "Google Drive API"],
    ["React", "TS", "Golang", "Google Drive API"],
    ["Unity2D", "Desktop", "C#"],
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
      t("project-items.northumberlandchess-more"),

      northumberlandChess,
    ],
    [
      t("project-items.leoallan-title"),
      t("project-items.leoallan-bio"),
      t("project-items.leoallan-more"),
      leoAllan,
    ],
    [
      t("project-items.moomingame-title"),
      t("project-items.moomingame-bio"),
      t("project-items.moomingame-more"),

      moominGame,
    ],
    [
      "QuickSong",
      t("project-items.quicksong-bio"),
      t("project-items.quicksong-more"),
      quickSong,
    ],
  ];

  const initialMoreStates: Array<boolean> = Array(rows.length).fill(false);
  const [moreStates, setMoreStates] =
    useState<Array<boolean>>(initialMoreStates);

  const flipMoreState = (i: number) => {
    const cp = Array.from(moreStates);
    cp[i] = !cp[i];
    setMoreStates(cp);
  };

  return (
    <>
      <h1 className="section project-title">{t("projects")}</h1>
      <br />
      {rows.map(([title, bio, moreText, src], i) => {
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
                {moreStates[i] ? (
                  <div>
                    <p>{moreText}</p>
                    <Button onClick={() => flipMoreState(i)}>
                      {t("less")}
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button onClick={() => flipMoreState(i)}>
                      {t("more")}
                    </Button>
                  </div>
                )}
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
