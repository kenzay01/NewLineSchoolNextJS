"use client";

import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
import "./styles/PrepareForExamsBanner.css";
import { useEffect, useState } from "react";
export default function PrepareForExamsBanner() {
  const bannerMidText = [
    "Підвищити рівень академічної англійської (відповідна граматика та словниковий запас)",
    "Ознайомити з форматом іспиту",
    "Відпрацювати всі вправи з кожної частини іспиту",
    "Навчити стратегіям успішноі здачі",
    "Організувати пробний іспит",
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
    <div className="prepare-for-exams-banner" id="prepare-for-exams">
      <div className="prepare-for-exams-banner-title">
        Підготовка до {isMobile ? <></> : <br />}
        <HighlightedTextWithDots
          colorText="#ffffff"
          colorBackground="#BFA0BEB2"
          colorDots="#AE88AD"
          widthDots={isMobile ? 8 : 10}
          widthBorder={isMobile ? 3 : 4}
        >
          Сambridge Exams
        </HighlightedTextWithDots>
      </div>
      <div className="prepare-for-exams-banner-content">
        <div className="prepare-for-exams-banner-left">
          <div className="pepare-for-exams-banner-left-upper">
            У 2021 році New Line School стала офіційним  підготовчим центром 
            {""}
            <br />
            <span>Cambridge Assessment English</span> <br />І тепер ми
            професійно  готуємо до таких іспитів:
          </div>
          <div className="pepare-for-exams-banner-left-lower">
            A1 KEY (KET)+ for schools <br /> B1 Preliminary (PET)+for schools{" "}
            <br /> B2 First (FCE)+ for schools <br /> C1 Advanced (CAE) <br />{" "}
            C2 Proficiency
          </div>
        </div>
        {isMobile ? (
          <div className="prepare-for-exams-combine-mobile">
            <div className="prepare-for-exams-banner-mid">
              <div className="prepare-for-exams-banner-mid-title">
                Саме тут ми допомагаємо:
              </div>
              <div className="prepare-for-exams-banner-mid-body">
                {bannerMidText.map((text, index) => {
                  return (
                    <div
                      key={index}
                      className="prepare-for-exams-banner-mid-body-item"
                    >
                      <div className="prepare-for-exams-banner-mid-body-item-img">
                        <img
                          loading="lazy"
                          src="/assets/elements/arrow_right.png"
                          alt=""
                        />
                      </div>
                      <div className="prepare-for-exams-banner-mid-body-item-text">
                        {text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="prepare-for-exams-banner-right">
              <img
                loading="lazy"
                src="/assets/images/PrepareForExamsBanner.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <>
            <div className="prepare-for-exams-banner-mid">
              <div className="prepare-for-exams-banner-mid-title">
                Саме тут ми допомагаємо:
              </div>
              <div className="prepare-for-exams-banner-mid-body">
                {bannerMidText.map((text, index) => {
                  return (
                    <div
                      key={index}
                      className="prepare-for-exams-banner-mid-body-item"
                    >
                      <div className="prepare-for-exams-banner-mid-body-item-img">
                        <img
                          loading="lazy"
                          src="/assets/elements/arrow_right.png"
                          alt=""
                        />
                      </div>
                      <div className="prepare-for-exams-banner-mid-body-item-text">
                        {text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="prepare-for-exams-banner-right">
              <img
                loading="lazy"
                src="/assets/images/PrepareForExamsBanner.png"
                alt=""
              />
            </div>
          </>
        )}
      </div>
      <div className="prepare-for-exams-banner-attention">
        У зв'язку з поточною ситуацією в Україні та тимчасовими обмеженнями на
        проведення міжнародних іспитів, ми повідомляємо, що на даний момент
        проведення іспитів Cambridge English в Україні призупинено до
        стабілізації ситуації. <br /> Однак, для тих, хто хоче скласти іспит, ми
        раді повідомити, що всі міжнародні іспити Cambridge English зараз
        проводяться в Польщі. Ми готові допомогти організувати ваш іспит у
        найближчому сертифікованому центрі, забезпечивши всі необхідні деталі та
        підтримку під час підготовки.
      </div>
    </div>
  );
}
