"use client";
import { useEffect, useState } from "react";

import "./styles/SchoolchildrenBanner.css";
import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
export default function SchoolchildrenBanner() {
  const links = [
    {
      text: "Англійська для дітей (1-4 класи)",
      href: "#folder1",
    },
    {
      text: "навчання для підлітків (5-9 класи)",
      href: "#folder2",
    },
    {
      text: "Англійська для підлітків (10-11 клас) Підготовка до НМТ",
      href: "#folder3",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);
  return (
    <div className="schoolchildren-banner-container">
      <div className="schoolchildren-banner-content">
        <div className="schoolchildren-banner-content-text-header">
          англійська для {isMobile? null:<br />}
          <HighlightedTextWithDots
            colorText="#ffffff"
            colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
            widthDots={isMobile ? 8 : 10}
            widthBorder={isMobile ? 3 : 4}
          >
         школярів
          </HighlightedTextWithDots>
        </div>
        <div className="schoolchildren-banner-content-text-links">
          {links.map((link, index) => {
            return (
              <div
                key={index}
                className="schoolchildren-banner-content-text-link"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  target?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {link.text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="schoolchildren-banner-right">
        <div className="schoolchildren-banner-right-img">
          <img loading="lazy"src="/assets/images/forSchoolchildren.png" alt="" />
        </div>
        <div className="schoolchildren-banner-right-text">
          school · exams · speak club
        </div>
      </div>
    </div>
  );
}
