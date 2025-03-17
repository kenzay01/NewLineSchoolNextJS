"use client";

import { useEffect, useState } from "react";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import Accordion from "./styledComponents/Accordion";
import Image from "next/image";
import "./styles/ForUsImportant.css"; // імпортуємо стилі
import HighlightedText from "./styledComponents/HighlightedText";
import HighlightedTextBorder from "./styledComponents/HighlightedTextBorder";
import { motion } from "framer-motion";

export default function ForUsImportant() {
  const [layoutForMainBanner, setLayoutForMainBanner] = useState("desktop");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForMainBanner("mobile");
        } else {
          setLayoutForMainBanner("desktop");
        }
      };

      updateLayout();
      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);

  const accordionContent = [
    {
      title: "Впевнено спілкуватись",
      content:
        "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      title: "Сласти міжнародні іспити",
      content:
        "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      title: "Досягти академічних успіхів",
      content:
        "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];
  const mobileText = [
    "Надихати вільно спілкуватися у повсякденному житті, подорожах, кар'єрі та еміграції в іншу країну.",
    "Мотивувати дітей та підлітків досягати академічних успіхів у школі.",
    "Допомагати успішно складати міжнародні іспити IELTS, A2 KEY (KET), B1 Preliminary (PET), B2 First (FCE), C1 Advanced (CAE). ТАКОЖ НМТ ТА ЄВІ.",
  ];
  const isMobile = layoutForMainBanner === "mobile";
  let content;
  if (layoutForMainBanner === "desktop") {
    content = (
      <div className="home-for-us-important-text-container">
        <div className="home-for-us-important-text-title">
          А також ми допоможемо всім нашим студентам підняти свій рівень
          англійської мови
        </div>
        <div className="home-for-us-important-text">
          {isMobile ? (
            <>
              {" "}
              ·{" "}
              <HighlightedText colorBack="#FCE69699">
                для вільного спілкування
              </HighlightedText>
            </>
          ) : (
            <HighlightedTextWithDots
              colorBackground="#FCE69699"
              colorDots="#FCE696"
              colorText="#414040"
              widthDots={5}
              widthBorder={1}
            >
              для вільного спілкування
            </HighlightedTextWithDots>
          )}{" "}
          у повсякденному житті, подорожах, карʼєрі та еміграції в іншу країну.
        </div>
        <div className="home-for-us-important-text">
          {isMobile ? (
            <>
              {" "}
              ·{" "}
              <HighlightedText colorBack="#A0BFBD66">
                для досягнення академічних успіхів
              </HighlightedText>
            </>
          ) : (
            <HighlightedTextWithDots
              colorBackground="#A0BFBD66"
              colorDots="#A0BFBD"
              colorText="#414040"
              widthDots={5}
              widthBorder={1}
            >
              для досягнення академічних успіхів
            </HighlightedTextWithDots>
          )}{" "}
          у школі та вищих навчальних закладах.
        </div>
        <div className="home-for-us-important-text">
          {isMobile ? (
            <>
              {" "}
              ·{" "}
              <HighlightedText colorBack="#FCE69699">
                для успішного складання міжнародних іспитів
              </HighlightedText>
            </>
          ) : (
            <HighlightedTextWithDots
              colorBackground="#FCE69699"
              colorDots="#FCE696"
              colorText="#414040"
              widthDots={5}
              widthBorder={1}
            >
              для успішного складання міжнародних іспитів
            </HighlightedTextWithDots>
          )}{" "}
          IELTS, A2 KEY (KET), B1 Preliminary (PET), B2 First (FCE), C1 Advanced
          (CAE)
        </div>
        <div className="home-for-us-important-text">
          {isMobile ? (
            <>
              {" "}
              ·{" "}
              <HighlightedText colorBack="#BFA0BEB2">
                та для успішного складання НМТ, ЄВІ
              </HighlightedText>
            </>
          ) : (
            <HighlightedTextWithDots
              colorBackground="#BFA0BEB2"
              colorDots="#AE88AD"
              colorText="#414040"
              widthDots={5}
              widthBorder={1}
            >
              та для успішного складання НМТ, ЄВІ
            </HighlightedTextWithDots>
          )}
        </div>
      </div>
    );
  } else {
    content = (
      <div className="home-for-us-important-text-container">
        {mobileText.map((text, index) => {
          return (
            <motion.div
              className="home-for-us-important-text-mobile-container"
              key={index}
              initial={{ opacity: 0, x: 75 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="home-for-us-important-text-mobile-circle"></div>
              <div className="home-for-us-important-text-mobile-text">
                {text.split(" ").map((word, index) => {
                  if (index === 0) {
                    return (
                      <span key={index} className="home-for-us-important-text-mobile-text-first-word">{word} {" "}</span>)
                  }
                  return word + " ";
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="home-for-us-important-main-container">
      <div className="scroll-to-see-more">
        SCROLL TO SEE MORE
        <img
          loading="lazy"
          src="/assets/elements/arrow_bottom.png"
          alt=""
        />{" "}
      </div>
      <div className="home-for-us-important-container">
        <div className="home-for-us-important-title-container">
          <div className="home-for-us-important-title">
            {" "}
            <HighlightedTextWithDots
              colorBackground="#BFA0BEB2"
              colorDots="#AE88AD"
              colorText="#ffffff"
              widthDots={8}
              widthBorder={3}
            >
              ДЛЯ НАС ВАЖЛИВО
            </HighlightedTextWithDots>
          </div>
          <div className="home-for-us-important-title-subtitles-container">
            {!isMobile ? (
              <>
                <div className="home-for-us-important-title-subtitle p1">
                  надихати
                </div>
                <div className="home-for-us-important-title-subtitle p2">
                  мотивувати
                </div>
                <div className="home-for-us-important-title-subtitle p3">
                  спонукати до ефективного навчання
                </div>
              </>
            ) : 
            null}
          </div>
        </div>
        <div className="home-for-us-important-content">
          <div className="home-for-us-important-img">
            <img
              loading="lazy"
              src="/assets/images/forUsImportant.png"
              alt="For Us Important"
            />
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}
