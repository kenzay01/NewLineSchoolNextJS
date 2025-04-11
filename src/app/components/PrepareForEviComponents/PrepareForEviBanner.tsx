"use client";

import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";

import "./styles/PrepareForEviBanner.css";
import { useEffect, useState } from "react";
export default function PrepareForEviBanner() {
  const bannerMidText = [
    "Системність у роботі з актуальними матеріалами",
    "CтратегіЇ та алгоритми проходження завдань",
    "Фокус на необхідній лексиці та граматиці",
  ];
  const [layoutForExamsBanner, setLayoutForExamsBanner] = useState("desktop");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForExamsBanner("mobile");
        } else {
          setLayoutForExamsBanner("desktop");
        }
      };
      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);
  const isMobile = layoutForExamsBanner === "mobile";
  return (
    <div className="prepare-for-evi-banner" id="prepare-for-evi">
      <div className="prepare-for-evi-banner-title">
        Підготовка до{" "}
        <HighlightedTextWithDots
          colorText="#ffffff"
          colorBackground="#BFA0BEB2"
          colorDots="#AE88AD"
          widthDots={isMobile ? 8 : 10}
          widthBorder={isMobile ? 3 : 4}
        >
          ЄВІ
        </HighlightedTextWithDots>
      </div>
      <div className="prepare-for-evi-banner-content">
        <div className="prepare-for-evi-banner-left">
          <span>ЄВІ - Єдиний Вступний Іспит.</span> Це форма випробування до
          вступу на навчання для здобуття ступеня магістра, яка поєднує тест
          загальної навчальної компетентності та тест з іноземної мови.
        </div>
        <div className="prepare-for-evi-banner-combine">
          <div className="prepare-for-evi-banner-mid">
            <div className="prepare-for-evi-banner-mid-title">Наш Фокус:</div>
            <div className="prepare-for-evi-banner-mid-content">
              Підготувати саме до розділу даного вступного іспиту з англійської
              мови.
            </div>
          </div>
          <div className="prepare-for-evi-banner-right">
            <div className="prepare-for-evi-banner-right-title">
              Ми пропонуємо:
            </div>
            <div className="prepare-for-evi-banner-right-body">
              {bannerMidText.map((text, index) => {
                return (
                  <div
                    key={index}
                    className="prepare-for-evi-banner-right-body-item"
                  >
                    <div className="prepare-for-evi-banner-right-body-item-img">
                      <img
                        loading="lazy"
                        src="/assets/elements/arrow_right.png"
                        alt=""
                      />
                    </div>
                    <div className="prepare-for-evi-banner-right-body-item-text">
                      {text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="prepare-for-evi-banner-img">
          <img src="/assets/images/eviBanner.png" alt="" />
        </div>
      </div>
    </div>
  );
}
