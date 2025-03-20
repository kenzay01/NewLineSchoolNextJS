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
      backgroundImg: isMobile
        ? "/assets/elements/folderElement1Mobile.png"
        : "/assets/elements/folderElement1.png",
      title: (
        <>
          англійська для <br />{" "}
          <HighlightedText colorBack="#BFA0BEB2">1-4 класів</HighlightedText>
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
          <span>Закохати</span> наших найменших студентів {baryer} у{" "}
          <b>англійську мову</b> і <span>зробити навчання</span> не тільки
          ігровим, активним {baryer} та <span>цікавим</span>, але і{" "}
          <b>продуктивним для Cambridge Exams</b> for Young Learners (Starters,
          Movers, Flyers) <span>навчанні у школі</span>, і{" "}
          <b>для реального спілкування</b>.
        </>
      ),
      bodyLeftUpperPart1BodyMobile: (
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
      bodyLeftUpperPart2Body: (
        <>
          Всі наші програми розроблені {baryer} відповідно загальноєвропейським
          стандартам володінням  іноземною мовою{" "}
          <span>
            Common European
            {baryer} Framework of Reference and Cambridge Assessment English
          </span>
        </>
      ),
      bodyLeftUpperPart2BodyMobile: (
        <>
          <span>
            Всі наші програми розроблені відповідно загальноєвропейським
            стандартам володінням іноземною мовою
          </span>{" "}
          Common European Framework of Reference and Cambridge Assessment
          English
        </>
      ),
      bodyLeftLowwerPartTitle: <>Атмосфера Навчання</>,
      lowerLeftPartText: [
        "Ігрова та рольова",
        "Творчі проекти в кінці кожного уроку",
        "Граматика та лексика подається у комунікативних іграх",
        "Навчаємось спілкуватись англійською завдяки взаємодії між учнями та вчителем",
      ],
      lowerRightPartText: [
        "Цікаві методи, техніки та прийоми для запам’ятовування",
        "Є доступ до онлайн вправ, вікторин та навчальних ігор",
        "Розмовний Арт Клуб “ Англійська Майстерня Cut and Talk ”",
        "Постійний зворотній зв’язок з батьками",
        "“Домашки” є і завжди будуть😁",
      ],
      lowerPartTextMobile: (
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
      bottomExtraCon: -60,
      bodyCenterElements: [
        <>
          Тривалість курсу: <span>10 місяців (Вересень-Червень)</span>
        </>,
        <>
          Одне заняття: <span>60 хв</span>
        </>,
        <>
          Періодичність: <span>2 рази на тиждень</span>
        </>,
        <>
          Дітей у групі: <span>до 10 учнів</span>
        </>,
        <>
          Формат: <span>Офлайн, Онлайн, або Комбінований</span>
        </>,
        <>
          Вартість групового заняття: <span>200грн/60хв</span>
        </>,
      ],
      bodyBottomElements: [
        <>
          Вартість індивідуального заняття: <span>600грн</span>
        </>,
        <>
          Навчальний Модуль (на місяць):<span>8 занять 1600 грн</span>
        </>,
      ],
      idHash: "folder1",
    },
    {
      backgroundImg: isMobile
        ? "/assets/elements/folderElement2Mobile.png"
        : "/assets/elements/folderElement2.png",
      title: (
        <>
          навчання для <br />{" "}
          <HighlightedText colorBack="#BFA0BEB2">5-9 класів</HighlightedText>
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
      bodyLeftUpperPart1BodyMobile: (
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
      bodyLeftUpperPart2Body: (
        <>
          Всі наші програми розроблені {baryer} відповідно загальноєвропейським
          стандартам володінням  іноземною мовою{" "}
          <span>
            Common European
            {baryer} Framework of Reference and Cambridge Assessment English
          </span>
        </>
      ),
      bodyLeftUpperPart2BodyMobile: (
        <>
          <span>
            Всі наші програми розроблені відповідно загальноєвропейським
            стандартам володінням іноземною мовою
          </span>{" "}
          Common European Framework of Reference and Cambridge Assessment
          English{" "}
        </>
      ),
      bodyLeftLowwerPartTitle: <>Атмосфера Навчання</>,
      lowerLeftPartText: [
        "Максимально наближена до реального життя ",
        "Ненудна прокачка Скілів ( Listening, Reading, Writing та Speaking) яка заходить кожному нашому підлітку",
        "Доступ до інтерактивних онлайн вправ",
        "Рольові ігри для покращення спілкування",
        "Граматика та лексика- яка і розважає, і навчає",
        "Граматичний клуб для підлітків",
      ],
      lowerRightPartText: [
        "Вчимося працювати з mind-maps та презентаціями з елементами інфографіки для вивчення та закріплення нового матеріалу",
        "Творчий підхід у використанні смартфонів",
        "Контроль знань кожний місяць та зворотній зв’язок з батьками",
        "“Домашка” є і завжди буде",
        "Доступ до онлайн навчальних матеріалів: вправ, тестів, вікторин тощо",
        "Розмовний клуб для підлітків “ Lets talk about it”",
      ],
      lowerPartTextMobile: (
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
      bottomExtraCon: -80,
      bodyCenterElements: [
        <>
          Тривалість курсу: <span>10 місяців (Вересень-Червень)</span>
        </>,
        <>
          Одне заняття: <span>60 хв</span>
        </>,
        <>
          Періодичність: <span>2 рази на тиждень</span>
        </>,
        <>
          Дітей у групі: <span>до 10 учнів</span>
        </>,
        <>
          Формат: <span>Офлайн, Онлайн, або Комбінований</span>
        </>,
        <>
          Вартість групового заняття: <span>200грн/60хв</span>
        </>,
      ],
      bodyBottomElements: [
        <>
          Вартість індивідуального заняття: <span>600грн</span>
        </>,
        <>
          Навчальний Модуль (на місяць):<span>8 занять 1600 грн</span>
        </>,
      ],
      idHash: "folder2",
    },
  ];

  const bodyCenterElements = [
    <>
      Тривалість курсу: <span>10 місяців (Вересень-Червень)</span>
    </>,
    <>
      Одне заняття: <span>60 хв</span>
    </>,
    <>
      Дітей у групі: <span>до 6 учнів</span>
    </>,
    <>
      Формат: <span>Офлайн, Онлайн, або Комбінований</span>
    </>,
    <>
      Вартість групового заняття: <span>від 250грн/60хв</span>
    </>,
  ];
  const bodyBottomElements = [
    <>
      Вартість індивідуального заняття: <span>від 750грн/60хв</span>
    </>,
  ];

  return (
    <div className="for-schoolchildren-container">
      <SchoolchildrenBanner />
      <div className="folders-content-container">
        <SchoolchildrenTableContainer />
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
              bodyLeftUpperPart1BodyMobile={data.bodyLeftUpperPart1BodyMobile}
              bodyLeftUpperPart2BodyMobile={data.bodyLeftUpperPart2BodyMobile}
              lowerPartTextMobile={data.lowerPartTextMobile}
              type="expanded"
              subtype={`expanded-${index}`}
              idHash={data.idHash}
            />
          );
        })}
        <FolderContent
          title={
            <>
              навчання для {isMobile ? <br /> : ""}{" "}
              <HighlightedText colorBack="#BFA0BEB2">
                10-11 класів <br />
              </HighlightedText>
              Підготовка до НМТ
            </>
          }
          backgroundImg={
            isMobile
              ? "/assets/elements/folderElement3Mobile.png"
              : "/assets/elements/folderElement3.png"
          }
          bodyCenterElements={bodyCenterElements}
          bodyBottomElements={bodyBottomElements}
          type="simple"
          idHash="folder3"
        />
      </div>
      <FreeLessonContainer paddingTop={20} />
    </div>
  );
}
