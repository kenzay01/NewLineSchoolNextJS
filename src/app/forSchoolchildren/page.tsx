"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import SchoolchildrenBanner from "../components/SchoolchildrenComponents/SchoolchildrenBanner";
import FolderContent from "../components/SchoolchildrenComponents/FolderContent";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
import "../styles/ForSchoolchildren.css";
import HighlightedTextWithDots from "../components/HomeComponents/styledComponents/HighlightedTextWithDots";
import HighlightedText from "../components/HomeComponents/styledComponents/HighlightedText";
import SchoolchildrenTableContainer from "../components/SchoolchildrenComponents/SchoolchildrenTableContainer";
import { title } from "process";
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
  const baryer = isMobile ? "" : <br />;
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
      title: (
        <>
          англійська для
          {isMobile ? <br /> : null}{" "}
          <HighlightedText colorBack="#BFA0BEB2">1-4 класів</HighlightedText>
        </>
      ),
      bodyTextTop: (
        <>
          <span>
            Наш фокус та мета - закохати наших найменших студентів у англійську
            мову і зробити навчання не тільки ігровим, активним та цікавим, але
            і
          </span>{" "}
          продуктивним для міжнародних іспитів for Young Learners (Starters,
          Movers, Flyers), навчанні у школі, і для реального спілкування.
        </>
      ),
      bodyTextMid: (
        <>
          <span>
            Всі наші програми розроблені відповідно загальноєвропейським
            стандартам володінням іноземною мовою
          </span>{" "}
          Common European Framework of Reference and Cambridge Assessment
          English
        </>
      ),
      bodyTextLast: (
        <>
          <span>
            Ігрове та інтерактивне середовище, де учні вивчають англійську через
            активне спілкування.
          </span>{" "}
          Граматика та лексика подаються у формі комунікативних ігор,
          використовуємо ефективні методики запам'ятовування. Кожен урок
          завершується творчим проектом. Підтримуємо постійний зв'язок з
          батьками.
        </>
      ),
      yellowBox: (
        <>
          В кінці кожного курсу наші студенти зможуть підтвердити свої знання на
          міжнародних іспитах, таких як <span>Starters, Movers, Flyers</span>
        </>
      ),
      idHash: "folder1",
    },
    {
      title: (
        <>
          англійська для
          {isMobile ? <br /> : null}{" "}
          <HighlightedText colorBack="#BFA0BEB2">5-9 класів</HighlightedText>
        </>
      ),
      bodyTextTop: (
        <>
          <span>
            Ми прагнемо закохати амбітних і активних підлітків в англійську
            мову, пропонуючи уроки, які точно відображають їхні інтереси та
            стиль життя.
          </span>
          Наша мета – створити навчальне середовище, де кожен урок зосереджений
          на учнях, забезпечуючи 100% результативність на міжнародних іспитах, у
          школі та в реальному житті. Ми віримо, що навчання може бути не лише
          ефективним, але й захоплюючим!
        </>
      ),
      bodyTextMid: (
        <>
          <span>
            Всі наші програми розроблені відповідно загальноєвропейським
            стандартам володінням іноземною мовою
          </span>{" "}
          Common European Framework of Reference and Cambridge Assessment
          English{" "}
        </>
      ),
      bodyTextLast: (
        <>
          <span>
            Наші заняття занурюють у реальне життя, які підлітки зустрічають
            щодня. Прокачуємо всі мовні навички у форматі, який подобається
            кожному учню.
          </span>{" "}
          Інтерактивні онлайн вправи забезпечують практику будь-де та будь-коли,
          а рольові ігри допомагають удосконалити комунікативні навички в
          безпечному середовищі. Граматику та лексику вивчаємо через метод
          guided discovery або text-based. Розвиваємо візуальне мислення,
          створюючи mind-maps та презентації з інфографікою для кращого
          засвоєння матеріалу.{" "}
        </>
      ),
      yellowBox: (
        <>
          В кінці кожного курсу наші студенти зможуть підтвердити свої знання на
          міжнародних іспитах, таких як{" "}
          <span>Movers, Flyers, A2 KEY (KET), Preliminary (PET)</span>
        </>
      ),
      idHash: "folder2",
    },
    {
      title: (
        <>
          англійська для {isMobile ? <br /> : ""}{" "}
          <HighlightedText colorBack="#BFA0BEB2">
            10-11 класів <br />
          </HighlightedText>
          <HighlightedText colorBack="#BFA0BEB2">Підготовка</HighlightedText> до
          НМТ
        </>
      ),
      bodyTextTop: (
        <>
          <span>
            Наша мета підготувати до НМТ з англійської мови та допомогти набрати
            максимальну кількість балів
          </span>
        </>
      ),
      bodyTextLast: (
        <>
          <span>
            Під час цього курсу наші студенти дізнаються про всі стратегії та
            тонкощі ефективного складання тесту.
          </span>{" "}
          Також ретельно тренуються над всіма типами завдань з кожної секції .
          Кожний скіл такий як Listening, Writing, Speaking все одно
          прокачується ретельно, на випадок змін у формі проведення вступного
          іспиту, так щоб нашим студентам було легко перелаштуватись.
        </>
      ),
      yellowBox: (
        <>
          В кінці кожного курсу наші студенти також зможуть підтвердити свої
          знання на міжнародних іспитах, таких як{" "}
          <span>A2 KEY (KET), Preliminary (PET)</span>
        </>
      ),
      idHash: "folder3",
    },
  ];

  return (
    <div className="for-schoolchildren-container">
      <SchoolchildrenBanner />
      <div className="folders-content-container">
        {folderData.map((data, index) => {
          return (
            <FolderContent
              key={index}
              title={data.title}
              bodyTextTop={data.bodyTextTop}
              bodyTextMid={data.bodyTextMid}
              bodyTextLast={data.bodyTextLast}
              idHash={data.idHash}
              yellowBox={data.yellowBox}
            />
          );
        })}
        <SchoolchildrenTableContainer />
      </div>
      <FreeLessonContainer paddingTop={20} />
    </div>
  );
}
