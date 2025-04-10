"use client";

import { useRef, useState, useEffect } from "react";
import ReviewBox from "./styledComponents/ReviewBox";
import Image from "next/image";
import "./styles/ReviewsContainer.css";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import { motion } from "framer-motion";
export default function ReviewsContainer() {
  const reviews = [
    {
      user: "Inna",
      rating: 5,
      text: "Діти ходять в школу Англійської мови New Study Line вже три роки із задоволенням.Сучасна система подачі матеріалів,викладач завжди радий бачити дітей.Також дуже гнучкий графік  є можливість відвідувати заняття онлайн та офлайн .Нам все дуууже подобається.Дякуємо що ви в нас є. Найкращі 🥰",
    },
    {
      user: "Світлана",
      rating: 5,
      text: "Моя дитина відвідує школу англійської мови із великим задоволенням! Завдяки індивідуальному підходу, дитина швидко засвоює новий матеріал! Щиро дякую за вашу працю!",
    },
    {
      user: "Анастасія",
      rating: 5,
      text: "Дуже рекомендую школу англійської мови New Study Line. Ця школа дуже розвиває навички англійської мови, наші вчителі мають дуже гарний підхід до учнів. Кетрін сама найкраща вчителька у світі. Творча програма: подкасти, проекти, презентації, це все ви можете знайти в цій школі. Підготовка до екзаменів та НМТ. Різні свята, солодке заохочення. Дякую New Study Line за цікаве проведення часу та навчання. Люблю ❤️❤️",
    },
    {
      user: "yeon",
      rating: 5,
      text: "Дуже люблю відвідувати ваші уроки) Можна сказати, що саме цих курсах англійської мови навчають краще чим у школі. Також купу цікавих вправ, тренінгів, навчальних ігор та розваг. І головне - вивчення сленгу! Також дуже дякую нашому керівнику, яка дуже цікаво та зрозуміло пояснює матеріал. Вона навчає розмовляти сленгом, а не те що в школі “старйо віків„ 🙄 Особисто я знайшла свій куточок, де хочу вивчати англійську. І всім раджу відвідати «New Study Line»!!!",
    },
    {
      user: "nastya",
      rating: 5,
      text: "Мій особистий відгук про New Study Line. Сучасний та цікавий заклад в якому реально хочеться вчитись. Вчителя на одній хвилі з учнями, влаштовують свята, ігри на уроках. Саме в цій школі я почала вільно спілкуватися на англійській, хоча думала що ніколи не зможу. Колектив приємний, багато вправ в групі.Мої враження від цієї школи найкращі💕!!!",
    },
    {
      user: "Unknown",
      rating: 5,
      text: "Дитина ходить із-за доволенням. Індивідуальний підхід,(що дуже важливо в нашому випадку) та креативність",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current && !isScrolling) {
      setIsScrolling(true);
      const scrollAmount = 325;
      const newScrollLeft =
        containerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(() => setIsScrolling(false), 200);
    }
  };
  const [layoutForBenefits, setLayoutForBenefits] = useState("desktop");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForBenefits("mobile");
        } else {
          setLayoutForBenefits("desktop");
        }
      };

      updateLayout();
      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);
  const isMobile = layoutForBenefits === "mobile";

  return (
    <div className="home-reviews-container">
      <motion.div
        className="home-reviews-boxes-title-container"
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="home-reviews-boxes-title">
          Ваші{" "}
          <HighlightedTextWithDots
            colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
            colorText="#ffffff"
            widthDots={8}
            widthBorder={3}
          >
            коментарі
          </HighlightedTextWithDots>
        </div>
      </motion.div>
      {isMobile ? (
        <>
          <div className="home-reviews-boxes-container" ref={containerRef}>
            {reviews.map((review, index) => (
              <ReviewBox
                key={index}
                name={review.user}
                rating={review.rating}
                text={review.text}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <motion.div
            className="home-reviews-boxes-container"
            ref={containerRef}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {reviews.map((review, index) => (
              <ReviewBox
                key={index}
                name={review.user}
                rating={review.rating}
                text={review.text}
              />
            ))}
          </motion.div>
        </>
      )}
      <div className="home-reviews-boxes-btns">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <Image
            src="/assets/elements/arrow_left.png"
            alt="Arrow Left"
            width={24}
            height={24}
          />
        </button>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <Image
            src="/assets/elements/arrow_right.png"
            alt="Arrow Right"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
