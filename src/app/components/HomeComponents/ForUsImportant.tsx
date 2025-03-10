"use client";

import { useEffect, useState } from "react";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import Accordion from "./styledComponents/Accordion";
import Image from "next/image";
import "./styles/ForUsImportant.css"; // імпортуємо стилі
import HighlightedText from "./styledComponents/HighlightedText";

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
  const isMobile = layoutForMainBanner === "mobile";
  let content;
//   if (layoutForMainBanner === "desktop") {
    content = (
      <div className="home-for-us-important-text-container">
        <div className="home-for-us-important-text-title">
          А також ми допоможемо всім нашим студентам підняти свій рівень англійської мови
        </div>
        <div className="home-for-us-important-text">
          {isMobile ? <> · <HighlightedText colorBack="#FCE69699">
            для вільного спілкування
          </HighlightedText></>
          :
          <HighlightedTextWithDots
            colorBackground="#FCE69699"
            colorDots="#FCE696"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            для вільного спілкування
          </HighlightedTextWithDots>}{" "}
          у повсякденному житті, подорожах, карʼєрі та еміграції в іншу країну.
        </div>
        <div className="home-for-us-important-text">
          {isMobile ? <> · <HighlightedText colorBack="#A0BFBD66">
            для досягнення академічних успіхів
          </HighlightedText></>
          :<HighlightedTextWithDots
            colorBackground="#A0BFBD66"
            colorDots="#A0BFBD"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            для досягнення академічних успіхів
          </HighlightedTextWithDots>}{" "}
          у школі та вищих навчальних закладах.
        </div>
        <div className="home-for-us-important-text">
          {isMobile ? <> · <HighlightedText colorBack="#FCE69699">
            для успішного складання міжнародних іспитів
          </HighlightedText></>
          :<HighlightedTextWithDots
            colorBackground="#FCE69699"
            colorDots="#FCE696"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            для успішного складання міжнародних іспитів
          </HighlightedTextWithDots>}{" "}
          IELTS, A2 KEY (KET), B1 Preliminary (PET), B2 First (FCE), C1 Advanced (CAE)
        </div>
        <div className="home-for-us-important-text">
          {isMobile ? <> · <HighlightedText colorBack="#BFA0BEB2">
            та для успішного складання НМТ, ЄВІ
          </HighlightedText></>
          :<HighlightedTextWithDots
            colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            та для успішного складання НМТ, ЄВІ
          </HighlightedTextWithDots>}
        </div>
      </div>
    );
//   } else {
//     content = (
//       <div className="home-for-us-important-text-container-mobile">
//         <div className="home-for-us-important-text-container-mobile-title">
//           A також ми допоможемо{" "}
//           <img
//             src="/assets/elements/arrow_up_right.png" 
//             className="home-for-us-important-text-container-mobile-img"
//             alt=""
//           />
//         </div>
//         <div className="home-for-us-important-text-container-mobile-body">
//           {accordionContent.map((item, index) => (
//             <Accordion key={index} title={item.title} content={item.content} />
//           ))}
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="home-for-us-important-main-container">
      <div className="scroll-to-see-more">
        SCROLL TO SEE MORE
        <img loading="lazy" src="/assets/elements/arrow_bottom.png" alt="" /> {/* Оновлений шлях */}
      </div>
      <div className="home-for-us-important-container">
        <div className="home-for-us-important-title-container">
          <div className="home-for-us-important-title">ДЛЯ НАС <HighlightedTextWithDots
            colorBackground="#FCE69699"
            colorDots="#FCE696"
            colorText="#414040"
            widthDots={8}
            widthBorder={3}
          >
            ВАЖЛИВО
          </HighlightedTextWithDots></div>
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
