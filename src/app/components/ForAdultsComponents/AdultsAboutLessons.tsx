"use client";

import React, { useState, useEffect } from "react";
import "./styles/AdultsAboutLessons.css";
import { motion } from "framer-motion";
type CourseLevel = "A1" | "A2" | "B1" | "B2" | "C1";

interface CourseDetails {
  duration: string;
  students: string;
  format: string;
  price: string;
}

interface Course {
  title: string;
  description: React.ReactNode;
  details: CourseDetails;
}

const courseData: Record<CourseLevel, Course> = {
  A1: {
    title: "Англійська для початківців",
    description: (
      <>
        Цей курс ідеально підходить для дорослих 18+, які ніколи не вчили
        англійську або мають мінімальні знання, а також для тих, хто колись
        навчався, але забув більшість слів і граматики. Він стане у пригоді
        людям, яким англійська необхідна для роботи, подорожей чи еміграції, а
        також тим, хто хоче почуватися впевнено за кордоном і легко спілкуватися
        з іноземцями.
      </>
    ),
    details: {
      duration: "6 місяців",
      students: "до 10",
      format: "онлайн або офлайн",
      price: "410 грн",
    },
  },
  A2: {
    title: "A2 – Basic English. Базовий рівень для впевненого спілкування",
    description: (
      <>
        Ви знаєте окремі слова, але боїтеся будувати речення? Важко розуміти
        англійську на слух? Бракує словникового запасу, а граматика здається
        складною? Швидка мова носіїв збиває з пантелику, а нові слова так і
        залишаються у списках для вивчення, але не у вашій активній мові.{" "}
        <span>Це звичні труднощі для рівня A2.</span> І цей курс для подолання
        цих труднощів.
      </>
    ),
    details: {
      duration: "6 місяців",
      students: "до 10",
      format: "онлайн або офлайн",
      price: "410 грн",
    },
  },
  B1: {
    title: "B1 – Intermediate. Середній рівень для ефективного спілкування",
    description: (
      <>
        Курс ідеально підходить для тих, хто вже має базові знання англійської,
        але хоче навчитися говорити вільно та без вагань. Він допоможе вам
        підтримувати розмову на різні теми, впевнено відповідати співрозмовникам
        і розуміти носіїв мови навіть у швидкому темпі.Цей рівень відкриває нові
        можливості для навчання, подорожей і роботи. Ви зможете впевнено
        спілкуватися англійською у повсякденних ситуаціях, брати участь у
        дискусіях і користуватися мовою у реальному житті.
      </>
    ),
    details: {
      duration: "6 місяців",
      students: "до 10",
      format: "онлайн або офлайн",
      price: "410 грн",
    },
  },
  B2: {
    title:
      "B2 – Upper-Intermediate. Просунутий рівень для професійного спілкування",
    description: (
      <>
        На цьому рівні ваш словниковий запас стане по-справжньому багатим: ви
        опануєте ідіоми, фразові дієслова та стилістичні нюанси, що дозволять
        висловлюватися точно і яскраво. Граматичні конструкції будь-якої
        складності стануть вашим інструментом для передачі найтонших відтінків
        думки. Рівень B2 – це перепустка до міжнародного професійного
        середовища. Ви зможете працювати в іноземних компаніях, навчатися в
        закордонних університетах, вільно подорожувати світом без мовного
        бар'єру та розвивати кар'єру
      </>
    ),
    details: {
      duration: "6 місяців",
      students: "до 10",
      format: "онлайн або офлайн",
      price: "410 грн",
    },
  },
  C1: {
    title:
      "C1 –Advanced. Досконале володіння англійською на рівні освічених носіїв мови",
    description: (
      <>
        Рівень C1 – це ключ до елітної освіти, міжнародної кар'єри та глибокого
        занурення в англомовну культуру. <br /> На цьому рівні ви опануєте
        мистецтво красномовства, зможете висловлювати складні ідеї з природною
        легкістю та елегантністю, використовуючи широкий спектр стилістичних
        прийомів. Ваш словниковий запас стане по-справжньому багатим і
        різноманітним
      </>
    ),
    details: {
      duration: "6 місяців",
      students: "до 10",
      format: "онлайн або офлайн",
      price: "410 грн",
    },
  },
};
const AdultsAboutLessons = () => {
  const [activeTab, setActiveTab] = useState<CourseLevel>("A1");

  const handleTabClick = (tab: CourseLevel) => {
    setActiveTab(tab);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const renderDetails = (details: CourseDetails) => {
    return (
      <>
        <p>
          <strong>Тривалість курсу:</strong> {details.duration}
        </p>
        <p>
          <strong>Студентів у групі:</strong> {details.students}
        </p>
        <p>
          <strong>Формат:</strong> {details.format}
        </p>
        <p>
          <strong>Вартість (90 хв):</strong> від {details.price}
        </p>
      </>
    );
  };

  return (
    <motion.div
      className="for-adults-about-lessons-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="folder-container">
        <div className="folder-tabs">
          {Object.keys(courseData).map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              style={{
                left: `${Object.keys(courseData).indexOf(tab) * -35}px`,
              }}
              onClick={() => handleTabClick(tab as CourseLevel)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="folder-content">
          <div className="text-section">
            <h2>{courseData[activeTab].title}</h2>
            <p>{courseData[activeTab].description}</p>
          </div>
          <div className="details-section">
            <h3>Формат та Структура</h3>
            {renderDetails(courseData[activeTab].details)}
            {!isMobile ? null : (
              <button className="details-button">Деталі та Пропозиції</button>
            )}
          </div>
        </div>
        {!isMobile ? (
          <button className="details-button">Деталі та Пропозиції</button>
        ) : null}
      </div>
    </motion.div>
  );
};

export default AdultsAboutLessons;
