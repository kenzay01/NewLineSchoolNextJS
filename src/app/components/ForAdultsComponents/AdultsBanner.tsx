"use client";
import "./styles/AdultsBanner.css";
import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
import HighlightedText from "../HomeComponents/styledComponents/HighlightedText";
import { useEffect, useState } from "react";

export default function AdultsBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="for-adults-banner-container">
      <div className="for-adults-banner-title-container">
        <div className="for-adults-banner-title">
          Англійська для {isMobile ? <></> : <br />}
          {isMobile ? (
            <HighlightedText colorBack="#ebbb0d77">
              дорослих (Adults 18+)
            </HighlightedText>
          ) : (
            <HighlightedTextWithDots
              colorText="#ffffff"
              colorBackground="#BFA0BEB2"
              colorDots="#AE88AD"
              widthDots={isMobile ? 8 : 10}
              widthBorder={isMobile ? 3 : 4}
            >
              дорослих (Adults 18+)
            </HighlightedTextWithDots>
          )}
        </div>
        <div className="for-adults-banner-title-underline">
          General English A0-B2. {isMobile ? <></> : <br />}
          {/* Вивчення рівня +
          <span> Підготовка до ЄВІ</span> */}
        </div>
      </div>
      <div className="for-adults-banner-text">
        <div className="for-adults-banner-text-title">
          Підвищення рівня <br />
          англійської мови{" "}
          <HighlightedTextWithDots
            colorText="#ffffff"
            colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
            widthDots={5}
            widthBorder={2}
          >
            — це чудове рішення!
          </HighlightedTextWithDots>
        </div>
        <div className="for-adults-banner-text-description">
          Ми пропонуємо навчання у сфері живої комунікації, адже наша програма
          базується на комунікативній методиці Cambridge English та відповідає
          міжнародній шкалі CEFR (Common European Framework of Reference).
        </div>
      </div>
      <div className="for-adults-banner-img">
        <img
          loading="lazy"
          src="/assets/images/forAdults.png"
          alt="Adults Banner"
        />
      </div>
    </div>
  );
}
