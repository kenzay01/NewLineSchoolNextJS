"use client";

import { ReactNode } from "react";
import "./styles/OurClubsInfoBoxContainer.css";
import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
import { useEffect, useState } from "react";
import HighlightedText from "../HomeComponents/styledComponents/HighlightedText";
import { motion } from "framer-motion";
import { RiVidiconLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const ClubInfoCard = ({
  titleCard,
  time,
  cost,
  count,
}: {
  titleCard?: string;
  time?: string;
  cost?: string;
  count?: string;
}) => {
  return (
    <motion.div
      className="club-info-card"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="club-info-card-item">
        <RiVidiconLine className="club-info-card-icon online" />
        <div className="club-info-card-text">{titleCard}</div>
      </div>

      <div className="club-info-card-item">
        <FaRegClock className="club-info-card-icon time" />
        <div className="club-info-card-text">{time} хв</div>
      </div>

      <div className="club-info-card-item">
        <FaMoneyBillWave className="club-info-card-icon cost" />
        <div className="club-info-card-text">{cost} грн</div>
      </div>

      <div className="club-info-card-item">
        <FaUsers className="club-info-card-icon people" />
        <div className="club-info-card-text">До {count} студентів</div>
      </div>

      <a
        className="club-info-card-button"
        href="https://t.me/new_line_school_boryspil_bot"
      >
        Запис
      </a>
    </motion.div>
  );
};

export default function OurClubsInfoBoxContainer({
  title,
  subtitle,
  type,
  href,
  titleCard,
  time,
  cost,
  count,
  extraText,
}: {
  title: string;
  subtitle: ReactNode;
  type: string;
  href: string;
  titleCard?: string;
  time?: string;
  cost?: string;
  count?: string;
  extraText?: string;
}) {
  const [layoutForExams, setLayoutForExams] = useState("desktop");
  const isMobile = layoutForExams === "mobile";
  let body;
  if (type === "type1") {
    const type1TextRight = [
      "Слухати щось цікаве, трендове, та актуальне для підлітка",
      "Весело проводити час в компанії одноліток",
      "Закохуватись ще більше у англійську мову",
      "Поповнити словниковий запас та відпрацювати вимову",
    ];
    body = (
      <>
        <motion.div
          className="club-info-box-body-type1-left"
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Підлітковий вік - це саме той період коли хочеться виговоритись або
          слухати як говорять інші.
          {isMobile ? " " : <br />}
          <span>“Let’s talk about it”</span> чудовий розмовний клуб, де із
          задоволенням можна:
        </motion.div>
        <motion.div
          className="club-info-box-body-type1-right"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {type1TextRight.map((text, index) => (
            <div key={index} className="club-info-box-body-type1-right-item">
              <div className="club-info-box-body-type1-right-item-img">
                <img
                  loading="lazy"
                  src="/assets/elements/arrow_right.png"
                  alt=""
                />
              </div>
              <div className="club-info-box-body-type1-right-item-text">
                {text}
              </div>
            </div>
          ))}
        </motion.div>
      </>
    );
  } else if (type === "type2") {
    body = (
      <>
        <motion.div
          className="club-info-box-body-type2-left"
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Розвиток креативності для молодших школярів є надзвичайно актуальним.
          Креативність стимулює розвиток мислення та усного мовлення дітей.
        </motion.div>
        <motion.div
          className="club-info-box-body-type2-right"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="club-info-box-body-type2-right-upper">
            Тому оригінальність нашого арт-крафт  клубу <br /> “Cut and Talk”
            полягає в тому, що вміння <br />
            {isMobile ? (
              <HighlightedText colorBack="#BFA0BEB2">
                творити можно поєднати з навчанням вміти говорити
              </HighlightedText>
            ) : (
              <HighlightedTextWithDots
                colorBackground="#BFA0BEB2"
                colorDots="#AE88AD"
                colorText="#414040"
                widthDots={5}
                widthBorder={1}
              >
                творити можно поєднати з навчанням вміти говорити
              </HighlightedTextWithDots>
            )}
          </div>
          <div className="club-info-box-body-type2-right-lower">
            Тут можна ліпити, малювати, вирізати, клеїти,
            {isMobile ? "" : <br />} створювати  різні шедеври своїми руками та
            {isMobile ? "" : <br />} відточувати майстерність говорити
            англійською
            {isMobile ? "" : <br />} мовою одночасно.
          </div>
        </motion.div>
      </>
    );
  } else if (type === "type3") {
    const type3TextRight = [
      "Позитивний настрій",
      "Впевненість у собі",
      "Цікаві знайомства",
      "Сучасні теми для обговорення",
    ];
    body = (
      <>
        <motion.div
          className="club-info-box-body-type3-left"
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="club-info-box-body-type3-left-upper">
            Для успішного спілкування та взаємодії у бізнесі, кар’єрі, подорожі
            та на міжнародних іспитах, потрібно додатково практикуватись, а ще й
            надихатись.
          </div>
          <div className="club-info-box-body-type3-left-lower">
            Ми запрошуємо у наш розмовний клуб “Inspiration Time”. Де натхнення
            є найголовнішим у практиці спілкування.
          </div>
        </motion.div>
        <motion.div
          className="club-info-box-body-type3-right"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="club-info-box-body-type3-right-title">
            Тут ми гарантуємо:
          </div>
          <div className="club-info-box-body-type3-right-body">
            {type3TextRight.map((text, index) => {
              return (
                <div
                  key={index}
                  className="club-info-box-body-type3-right-body-item"
                >
                  <div className="club-info-box-body-type3-right-body-item-img">
                    <img
                      loading="lazy"
                      src="/assets/elements/arrow_right.png"
                      alt=""
                    />
                  </div>
                  <div className="club-info-box-body-type3-right-body-item-text">
                    {text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="club-info-box-body-type3-right-footer">
            <span>А також</span>, вдосконалення навичок
            {isMobile ? "" : <br />} говоріння, вимови та сприйняття на слух
          </div>
        </motion.div>
      </>
    );
  } else {
    const type4TextRight = [
      "Фокус на конкретні граматичні теми",
      "Пояснення граматики в контекстах, наприклад подкасти, аудіокниги , або в текстах різних жанрів",
      "Інтерактивні вправи, що допомагають вивчати та закріплювати граматичні елементи",
      "Використання інтерактивних онлайн інструментів",
      "Зворотній зв’язок. Надання індивідуальних коментарів та рекомендацій щодо  покращення",
    ];
    body = (
      <>
        <motion.div
          className="club-info-box-body-type4-left"
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="club-info-box-body-type4-left-arrow">
            <img
              loading="lazy"
              src="/assets/elements/arrow_up_down_diff.png"
              alt=""
            />
          </div>
          <div className="club-info-box-body-type4-left-upper">
            Граматика - це ключ до того щоб впевнено і вільно користуватись
            мовою. І це потребує багато зусиль та практики
          </div>
          <div className="club-info-box-body-type4-left-lower">
            Тому ми організували наш клуб Key Grammar щоб присвятити час
            основним та ключовим граматичним темам, які такі незрозумілі для
            наших підлітків.
          </div>
        </motion.div>
        <motion.div
          className="club-info-box-body-type4-right"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="club-info-box-body-type4-right-title">
            <div className="club-info-box-body-type4-right-title-upper">
              “Я нічого не розумію і у мене зовсім не вистачає часу для
              граматики у школі”
            </div>
            <div className="club-info-box-body-type4-right-title-lower">
              Так говорять наші студенти-підлітки, коли {isMobile ? "" : <br />}
              приходять до нас
            </div>
          </div>
          <div className="club-info-box-body-type4-right-body">
            <div className="club-info-box-body-type4-right-body-title">
              Ми пропонуємо:
            </div>
            <div className="club-info-box-body-type4-right-body-text">
              {type4TextRight.map((text, index) => {
                return (
                  <div
                    key={index}
                    className="club-info-box-body-type4-right-body-text-item"
                  >
                    <div className="club-info-box-body-type4-right-body-text-item-img">
                      <img
                        loading="lazy"
                        src="/assets/elements/arrow_right.png"
                        alt=""
                      />
                    </div>
                    <div className="club-info-box-body-type4-right-body-text-item-text">
                      {text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForExams("mobile");
        } else {
          setLayoutForExams("desktop");
        }
      };

      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);
  return (
    <div
      className="club-info-box-container"
      style={{
        marginBottom:
          type === "type3"
            ? isMobile
              ? 0
              : 0
            : type === "type4"
            ? isMobile
              ? 0
              : 275
            : 0,
      }}
      id={href}
    >
      <motion.div
        className="club-info-box-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {title}
      </motion.div>
      <motion.div
        className="club-info-box-subtitle"
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {subtitle}
      </motion.div>
      <div className="club-info-box-body-container">
        <div className="club-info-box-body-container-left">
          <div className="club-info-box-body">{body}</div>
          {extraText ? (
            <div className="club-info-box-body-extra-box">{extraText}</div>
          ) : null}
        </div>
        <div className="club-info-box-body-container-right">
          <ClubInfoCard
            titleCard={titleCard}
            time={time}
            cost={cost}
            count={count}
          />
        </div>
      </div>
    </div>
  );
}
