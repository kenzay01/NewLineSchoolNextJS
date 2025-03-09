"use client";

import { useEffect, useState } from "react";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import Accordion from "./styledComponents/Accordion";
import Image from "next/image";
import "./styles/ForUsImportant.css"; // імпортуємо стилі

export default function ForUsImportant() {
  const [layoutForMainBanner, setLayoutForMainBanner] = useState("desktop");

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 768) {
        setLayoutForMainBanner("mobile");
      } else {
        setLayoutForMainBanner("desktop");
      }
    };

    updateLayout(); // Ініціалізація при першому рендерингу
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const accordionContent = [
    {
      title: "Впевнено спілкуватись",
      content: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      title: "Сласти міжнародні іспити",
      content: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      title: "Досягти академічних успіхів",
      content: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }
  ];

  let content;
  if (layoutForMainBanner === "desktop") {
    content = (
      <div className="home-for-us-important-text-container">
        <div className="home-for-us-important-text-title">
          А також ми допоможемо всім нашим студентам підняти свій рівень англійської мови
        </div>
        <div className="home-for-us-important-text">
          <HighlightedTextWithDots
            colorBackground="#FCE69699"
            colorDots="#FCE696"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            для вільного спілкування
          </HighlightedTextWithDots>{" "}
          у повсякденному житті, подорожах, карʼєрі та еміграції в іншу країну.
        </div>
        <div className="home-for-us-important-text">
          <HighlightedTextWithDots
            colorBackground="#A0BFBD66"
            colorDots="#A0BFBD"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            для досягнення академічних успіхів
          </HighlightedTextWithDots>{" "}
          у школі та вищих навчальних закладах.
        </div>
        <div className="home-for-us-important-text">
          <HighlightedTextWithDots
            colorBackground="#FCE69699"
            colorDots="#FCE696"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            для успішного складання міжнародних іспитів
          </HighlightedTextWithDots>{" "}
          IELTS, A2 KEY (KET), B1 Preliminary (PET), B2 First (FCE), C1 Advanced (CAE)
        </div>
        <div className="home-for-us-important-text">
          <HighlightedTextWithDots
            colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            та для успішного складання НМТ, ЄВІ
          </HighlightedTextWithDots>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="home-for-us-important-text-container-mobile">
        <div className="home-for-us-important-text-container-mobile-title">
          A також ми допоможемо{" "}
          <img
            src="/assets/elements/arrow_up_right.png" // правильний шлях до зображення
            className="home-for-us-important-text-container-mobile-img"
            alt=""
          />
        </div>
        <div className="home-for-us-important-text-container-mobile-body">
          {accordionContent.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="home-for-us-important-main-container">
      <div className="scroll-to-see-more">
        SCROLL TO SEE MORE
        <img loading="lazy" src="/assets/elements/arrow_bottom.png" alt="" /> {/* Оновлений шлях */}
      </div>
      <div className="home-for-us-important-container">
        <div className="home-for-us-important-title-container">
          <div className="home-for-us-important-title">ДЛЯ НАС ВАЖЛИВО</div>
          <div className="home-for-us-important-title-subtitles-container">
            <div className="home-for-us-important-title-subtitle p1">
              надихати
            </div>
            <div className="home-for-us-important-title-subtitle p2">
              мотивувати
            </div>
            <div className="home-for-us-important-title-subtitle p3">
              спонукати до ефективного вивчення мови
            </div>
          </div>
        </div>
        <div className="home-for-us-important-content">
          <div className="home-for-us-important-img">
            <Image
              loading="lazy"
              src="/assets/images/forUsImportant.png" // Вказуємо правильний шлях до зображення
              alt="For Us Important"
              width={600}
              height={400}
            />
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}
