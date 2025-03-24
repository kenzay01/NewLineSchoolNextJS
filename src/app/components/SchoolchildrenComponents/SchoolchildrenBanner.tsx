"use client";
import { useEffect, useState } from "react";

import "./styles/SchoolchildrenBanner.css";
import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
import HighlightedText from "../HomeComponents/styledComponents/HighlightedText";
import { div } from "framer-motion/client";
export default function SchoolchildrenBanner() {
  const links = [
    {
      text: "Англійська для 1-4 класів",
      textMobile: "1-4 класи",
      href: "#folder1",
    },
    {
      text: "Англійська для 5-9 класів",
      textMobile: "5-9 класи",
      href: "#folder2",
    },
    {
      text: "Англійська для 10-11 класів",
      textMobile: "10-11 клас",
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
  const linksContainer = (
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
            {isMobile ? link.textMobile : link.text}
          </div>
        );
      })}
    </div>
  );
  const bannerRightText = isMobile ? (
    <div className="schoolchildren-banner-right-text-container">
      <div className="schoolchildren-banner-right-text">
        <div className="schoolchildren-banner-right-text-item">
          Курс <span>9</span> місяців
        </div>
        <div className="schoolchildren-banner-right-text-item">
          Онлайн/Офлайн заняття
        </div>
        <div className="schoolchildren-banner-right-text-item">
          Одне заняття від <span>230</span> грн
        </div>
      </div>
      <button
        className="schoolchildren-banner-right-text-btn"
        onClick={() => {
          const target = document.getElementById("price-table");
          if (target) {
            setTimeout(() => {
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 100);
          }
        }}
      >
        Дізнатися більше
      </button>
    </div>
  ) : (
    <div className="schoolchildren-banner-right-text">
      school · exams · speaking club
    </div>
  );
  return (
    <div className="schoolchildren-banner-container">
      <div className="schoolchildren-banner-content">
        <div className="schoolchildren-banner-content-text-header">
          англійська для {isMobile ? null : <br />}
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
        {isMobile ? null : linksContainer}
      </div>
      <div className="schoolchildren-banner-right">
        <div className="schoolchildren-banner-right-img">
          <img
            loading="lazy"
            src="/assets/images/forSchoolchildren.png"
            alt=""
          />
        </div>
        {!isMobile ? null : linksContainer}
        {bannerRightText}
      </div>
    </div>
  );
}
