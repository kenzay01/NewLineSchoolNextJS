"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import SchoolchildrenBanner from "../components/SchoolchildrenComponents/SchoolchildrenBanner";
import FolderContent from "../components/SchoolchildrenComponents/FolderContent";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
import "../styles/ForSchoolchildren.css";

export default function ForSchoolchildren() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
    const updateHash = () => setHash(window.location.hash.substring(1));

    updateHash(); 
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
    }
  }, []);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  const [layoutForFolder, setLayoutForFolder] = useState("desktop");
  const isMobile = layoutForFolder === "mobile";

  useEffect(() => {
    if (typeof window !== "undefined") {
    const updateLayout = () => {
      setLayoutForFolder(window.innerWidth < 768 ? "mobile" : "desktop");
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
}
  }, []);

  const folderData = [
    {
      backgroundImg: isMobile? "/assets/elements/folderElement1Mobile.png" :"/assets/elements/folderElement1.png",
      title: (
        <>
          1 - англійська для {isMobile? "":<br />} <span>дітей (1-4 класи)</span>
        </>
      ),
      bodyLeftUpperPart1Title: (
        <>
          Наш Фокус <br /> та Мета
        </>
      ),
      bodyLeftUpperPart2Title: (
        <>
          Навчальні <br /> програми
        </>
      ),
      bodyLeftUpperPart1Body: (
        <>
          Закохати наших найменших <br /> студентів у англійську мову і зробити
          навчання не тільки ігровим, активним <br /> та цікавим, але
          і продуктивним для міжнародних іспитив for Young Learners (Starters,
          Movers, Flyers), навчанні у школі, і просто для реального життя.
        </>
      ),
      bodyLeftUpperPart2Body: (
        <>
          Всі наші програми розроблені <br /> відповідно загальноєвропейським
          стандартам володінням  іноземною мовою{" "}
          <span>
            Common European
            <br /> Framework of Reference and Cambridge Assessment English
          </span>
        </>
      ),
      bodyLeftLowwerPartTitle: <>Атмосфера Навчання</>,
      lowerLeftPartText: [
        "Ігрова та рольова",
        "Навчаємось спілкуватись англійською завдяки взаємодії між учнями та вчителем",
        "Граматика та лексика подається у комунікативних іграх",
        "Цікаві методи, техніки та прийоми для запам’ятовування",
      ],
      lowerRightPartText: [
        "Творчі проекти в кінці кожного уроку",
        "Є доступ до онлайн вправ, вікторин та навчальних ігор",
        "Розмовний Арт Клуб “ Англійська Майстерня Cut and Talk ”",
        "Постійний зворотній зв’язок з батьками",
        "“Домашки” є і завжди будуть😁",
      ],
      bottomExtraCon: -60,
      bodyCenterElements:[
        <>Тривалість курсу: <span>10 місяців (Вересень-Червень)</span></>,
        <>Одне заняття: <span>60 хв</span></>,
        <>Періодичність: <span>2 рази на тиждень</span></>,
        <>Дітей у групі: <span>до 10 учнів</span></>,
        <>Формат: <span>Офлайн, Онлайн, або Комбінований</span></>,
        <>Вартість групового заняття: <span>200грн/60хв</span></>,
      ],
      bodyBottomElements:[
        <>Вартість індивідуального заняття: <span>600грн</span></>,
        <>Навчальний Модуль (на місяць):<span>8 занять 1600 грн</span></>
      ],
      idHash: "folder1"
    },
    {
      backgroundImg: isMobile?"/assets/elements/folderElement2Mobile.png" : "/assets/elements/folderElement2.png",
      title: (
        <>
          2 - навчання для {isMobile? "":<br />} <span>підлітків (5-9 класи)</span>
        </>
      ),
      bodyLeftUpperPart1Title: (
        <>
          Наш Фокус <br /> та Мета
        </>
      ),
      bodyLeftUpperPart2Title: (
        <>
          Навчальні <br /> програми
        </>
      ),
      bodyLeftUpperPart1Body: (
        <>
          Закохати у англійську  мову наших амбітних та активних підлітків і
          підвищити їх рівень у форматі , який вони люблять🥰 (так щоб  весь
          урок крутився навколо них) і який  100% буде результативним на
          міжнародних іспитах, у школі  та у реальному житті. 
        </>
      ),
      bodyLeftUpperPart2Body: (
        <>
          Всі наші програми розроблені <br /> відповідно загальноєвропейським
          стандартам володінням  іноземною мовою{" "}
          <span>
            Common European
            <br /> Framework of Reference and Cambridge Assessment English
          </span>
        </>
      ),
      bodyLeftLowwerPartTitle: <>Атмосфера Навчання</>,
      lowerLeftPartText: [
        "Максимально наближена до реального життя ",
        "Ненудна прокачка Скілів ( Listening, Reading, Writing та Speaking) яка заходить кожному нашому підлітку",
        "Доступ до інтерактивних онлайн вправ",
        "Рольові ігри для покращення спілкування",
        "Граматика та лексика- яка і розважає, і навчає",
      ],
      lowerRightPartText: [
        "Вчимося працювати з mind-maps та презентаціями з елементами інфографіки для вивчення та закріплення нового матеріалу",
        "Творчий підхід у використанні смартфонів",
        "Контроль знань кожний місяць та зворотній зв’язок з батьками",
        "Розмовний клуб для підлітків “ Lets talk about it”",
        "“Домашка” є і завжди буде",
        "Граматичний клуб для підлітків",
        "Доступ до онлайн навчальних матеріалів: вправ, тестів, вікторин тощо"
      ],
      bottomExtraCon: -80,
      bodyCenterElements:[
        <>Тривалість курсу: <span>10 місяців (Вересень-Червень)</span></>,
        <>Одне заняття: <span>60 хв</span></>,
        <>Періодичність: <span>2 рази на тиждень</span></>,
        <>Дітей у групі: <span>до 10 учнів</span></>,
        <>Формат: <span>Офлайн, Онлайн, або Комбінований</span></>,
        <>Вартість групового заняття: <span>200грн/60хв</span></>,
      ],
      bodyBottomElements:[
        <>Вартість індивідуального заняття: <span>600грн</span></>,
        <>Навчальний Модуль (на місяць):<span>8 занять 1600 грн</span></>
      ],
      idHash: "folder2"
    },
  ];

  const bodyCenterElements=[
    <>Тривалість курсу: <span>10 місяців (Вересень-Червень)</span></>,
    <>Одне заняття: <span>60 хв</span></>,
    <>Дітей у групі: <span>до 6 учнів</span></>,
    <>Формат: <span>Офлайн, Онлайн, або Комбінований</span></>,
    <>Вартість групового заняття: <span>від 250грн/60хв</span></>,
  ]
  const bodyBottomElements=[
    <>Вартість індивідуального заняття: <span>від 750грн/60хв</span></>
  ];

  return (
    <div className="for-schoolchildren-container">
      <SchoolchildrenBanner />
      <div className="folders-content-container">
      {folderData.map((data, index) => {
        return (
          <FolderContent
            key={index}
            backgroundImg={data.backgroundImg}
            title={data.title}
            bodyLeftUpperPart1Title={data.bodyLeftUpperPart1Title}
            bodyLeftUpperPart2Title={data.bodyLeftUpperPart2Title}
            bodyLeftUpperPart1Body={data.bodyLeftUpperPart1Body}
            bodyLeftUpperPart2Body={data.bodyLeftUpperPart2Body}
            bodyLeftLowwerPartTitle={data.bodyLeftLowwerPartTitle}
            lowerLeftPartText={data.lowerLeftPartText}
            lowerRightPartText={data.lowerRightPartText}
            bottomExtraCon={data.bottomExtraCon}
            bodyCenterElements={data.bodyCenterElements}
            bodyBottomElements={data.bodyBottomElements}
            type="expanded"
            subtype={`expanded-${index}`}
            idHash={data.idHash}
          />
        );
      })}
      <FolderContent
        title={
          <>
            3 - навчання для {" "}
            <span>
            <br /> підлітків (10-11 клас) Підготовка до НМТ
            </span>
          </>
        }
        backgroundImg={isMobile? "/assets/elements/folderElement3Mobile.png": "/assets/elements/folderElement3.png"}
        bodyCenterElements={bodyCenterElements}
        bodyBottomElements={bodyBottomElements}
        type="simple"
        idHash="folder3"
      />
      </div>
      <FreeLessonContainer paddingTop={20}/>
    </div>
  );
}
