"use client";

import "./styles/FolderContent.css";
import { ReactNode } from "react";
import ContainerAboutLessons from "./ContainerAboutLessons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface FolderContentProps {
  backgroundImg: string;
  title: ReactNode;
  bodyLeftUpperPart1Title?: ReactNode;
  bodyLeftUpperPart2Title?: ReactNode;
  bodyLeftUpperPart1Body?: ReactNode;
  bodyLeftUpperPart2Body?: ReactNode;
  bodyLeftLowwerPartTitle?: ReactNode;
  lowerLeftPartText?: string[] | undefined;
  lowerRightPartText?: string[] | undefined;
  bottomExtraCon?: number;
  type: string;
  bodyCenterElements: ReactNode[];
  bodyBottomElements: ReactNode[];
  subtype?: string;
  idHash: string;
  bodyLeftUpperPart1BodyMobile?: ReactNode;
  bodyLeftUpperPart2BodyMobile?: ReactNode;
  lowerPartTextMobile?: ReactNode;
}

export default function FolderContent({
  backgroundImg,
  title,
  bodyLeftUpperPart1Title,
  bodyLeftUpperPart2Title,
  bodyLeftUpperPart1Body,
  bodyLeftUpperPart2Body,
  bodyLeftLowwerPartTitle,
  lowerLeftPartText,
  lowerRightPartText,
  bottomExtraCon,
  type,
  bodyCenterElements,
  bodyBottomElements,
  subtype,
  idHash,
  bodyLeftUpperPart1BodyMobile,
  bodyLeftUpperPart2BodyMobile,
  lowerPartTextMobile,
}: FolderContentProps) {
  const [layoutForFolder, setLayoutForFolder] = useState("desktop");
  const isMobile = layoutForFolder === "mobile";
  console.log(bodyLeftUpperPart1BodyMobile);
  let body;
  // const motionIfMobile={}
  if (type === "expanded") {
    body = (
      <div className="expanded-folder-content-body">
        <div className="expanded-folder-content-body-left">
          <div className="expanded-folder-content-body-left-upper-part-container">
            <motion.div
              className="expanded-folder-content-body-left-upper-part1"
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {isMobile ? null : (
                <div className="body-left-upper-part1-title">
                  {bodyLeftUpperPart1Title}
                </div>
              )}
              <div className="body-left-upper-part1-text">
                {isMobile
                  ? bodyLeftUpperPart1BodyMobile
                  : bodyLeftUpperPart1Body}
              </div>
            </motion.div>
            <motion.div
              className="expanded-folder-content-body-left-upper-part2"
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {isMobile ? null : (
                <div className="body-left-upper-part2-title">
                  {bodyLeftUpperPart2Title}
                </div>
              )}
              <div className="body-left-upper-part2-text">
                {isMobile
                  ? bodyLeftUpperPart2BodyMobile
                  : bodyLeftUpperPart2Body}
              </div>
            </motion.div>
          </div>
          <motion.div
            className="expanded-folder-content-body-left-lower-part-container"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {isMobile ? (
              lowerPartTextMobile
            ) : (
              <>
                <div className="body-left-lower-part-body-left">
                  <div className="body-left-lower-part-title">
                    {bodyLeftLowwerPartTitle}
                  </div>
                  <div className="body-left-lower-part-left-text">
                    {lowerLeftPartText?.map((text, index) => (
                      <div key={index} className="lower-part-text-item">
                        <div className="lower-part-text-item-img">
                          <img
                            src="/assets/elements/wierd_arrow_right.png"
                            alt=""
                          />
                        </div>
                        <div className="lower-part-text-item-text">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="body-left-lower-part-body-right-text">
                  {lowerRightPartText?.map((text, index) => (
                    <div key={index} className="lower-part-text-item">
                      <div className="lower-part-text-item-img">
                        <img
                          src="/assets/elements/wierd_arrow_right.png"
                          alt=""
                        />
                      </div>
                      <div className="lower-part-text-item-text">{text}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
        <motion.div
          className="expanded-folder-content-body-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContainerAboutLessons
            bodyCenterElements={bodyCenterElements}
            bodyBottomElements={bodyBottomElements}
            btnHeight={50}
            btnWidth={210}
          />
        </motion.div>
      </div>
    );
  } else {
    body = (
      <div className="folder-content-body">
        <div className="folder-content-body-info-container">
          <div className="folder-content-body-info-container-title">
            Наш Фокус <br /> та Мета
          </div>
          <div className="folder-content-body-info-container-text p1">
            Підготувати  до НМТ з англійської мови та допомогти набрати
            максимальну кількість балів
          </div>
          <div className="folder-content-body-info-container-text p2">
            Цей курс розрахований на два роки для дітей 10-11 класів. Під час
            цього курсу наші студенти  дізнаються про всі стратегії та тонкощі
            ефективного складання тесту. Також ретельно тренуються  над всіма
            типами завдань з  кожної секції.
          </div>
          <div className="folder-content-body-info-container-text p3">
            Кожний скіл такий як Listening, Speaking, Use of English, Reading,
            Writing все одно прокачується ретельно, на випадок змін у формі
            проведення вступного іспиту, так щоб нашим студентам було легко
            перелаштуватись.
          </div>
        </div>
        <div className="folder-content-body-img">
          <img loading="lazy" src="/assets/images/folderImage.png" alt="" />
        </div>
        <div className="folder-content-body-info-studying">
          <ContainerAboutLessons
            bodyCenterElements={bodyCenterElements}
            bodyBottomElements={bodyBottomElements}
          />
        </div>
      </div>
    );
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForFolder("mobile");
        } else {
          setLayoutForFolder("desktop");
        }
      };

      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);
  return (
    <div
      className="expanded-folder-content-container"
      id={idHash}
      style={{
        backgroundImage: isMobile ? "none" : `url(${backgroundImg})`,
        minHeight: type === "expanded" ? (isMobile ? "auto" : 830) : 740,
        marginTop: type === "expanded" ? 60 : isMobile ? 60 : 100,
        marginBottom:
          type === "expanded" ? (isMobile ? 0 : 140) : isMobile ? 0 : 50,
      }}
    >
      <div
        className="expanded-folder-content"
        style={{
          paddingLeft: isMobile ? 0 : 110,
          paddingRight: isMobile ? 0 : type === "expanded" ? 105 : 80,
        }}
      >
        <div className="expanded-folder-content-title">{title}</div>
        {body}
      </div>
      {type === "expanded" ? (
        <div
          className="expanded-folder-content-extra-container"
          style={{ bottom: subtype === "expanded-1" ? -100 : bottomExtraCon }}
        >
          В кінці курсу наші студенти зможуть підтвердити свої знання на
          Міжнародних іспитах Cambridge Exams for Young Learners: Starters,
          Movers, Flyers
        </div>
      ) : null}
    </div>
  );
}
