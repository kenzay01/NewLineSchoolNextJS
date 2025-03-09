"use client"; 
import { useEffect, useState, useRef } from "react";
import StyledContainerLinkType2 from "./styledComponents/StyledContainerLinkType2";

// Імпорт стилів
import "./styles/ContainerStudyingLinksType2.css";

export default function ContainerStudyingLinksType2() {
  const [layoutForLinks, setLayoutForLinks] = useState("desktop");

  const studyingPairLinks = [
    [
      {
        text: (
          <>
            Англійська для <br /> 1-4 класів
          </>
        ),
        link: "/forSchoolchildren#folder1",
        description:
          "Заняття для наших найменших студентів англійської мови, які роблять навчання не тільки ігровим, активним та цікавим, але і продуктивним для міжнародних іспитів for Young Learners (Starters, Movers, Flyers), навчанні у школі, і просто для реального життя.",
      },
      {
        text: <>розмовні клуби</>,
        link: "/ourClubs#our-clubs",
        description:
          " Розмовний клуб - це вільна та невимушена атмосфера, (навіть зі смаколиками та чашкою чаю або кави) де можна практикувати говоріння з іншими учасниками, обмінюючись думками на різні теми, а також ділитись досвідом, лексикою, граматичними структурами та вимовою. ",
      },
    ],
    [
      {
        text: (
          <>
            Англійська для <br /> 5-9 класів
          </>
        ),
        link: "/forSchoolchildren#folder2",
        description:
          "Всі наші програми розроблені відповідно загальноєвропейським стандартам володінням іноземною мовою Common European Framework of Reference and Cambridge Assessment English.",
      },
      {
        text: <>Підготовка до міжнародних іспитів Cambridge Exams</>,
        link: "/prepareForExams#prepare-for-exams",
        description:
          "У 2021 році New Line School стала офіційним підготовчим центром Cambridge Assessment English І тепер ми професійно готуємо до таких іспитів: </br> A1 KEY (KET)+ for schools </br> B1 Preliminary (PET)+for schools </br> B2 First (FCE)+ for schools </br> C1 Advanced (CAE) </br> C2 Proficiency",
      },
    ],
    [
      {
        text: <>Англійська для 10-11 класів. <br /> Підготовка до НМТ</>,
        link: "/forSchoolchildren#folder3",
        description:
          "Цей курс розрахований на два роки для дітей 10-11 класів. Під час цього курсу наші студенти дізнаються про всі стратегії та тонкощі ефективного складання тесту. Також ретельно тренуються над всіма типами завдань з кожної секції.",
      },
      {
        text: <>Підготовка до ЄВІ</>,
        link: "/prepareForExams#prepare-for-exams",
        description:
          "ЄВІ - Єдиний Вступний Іспит. Це форма випробування до вступу на навчання для здобуття ступеня магістра, яка поєднує тест загальної навчальної компетентності та тест з іноземної мови.",
      },
    ],
    [
      {
        text: (
          <>
            Англійська для дорослих <br /> A0 - C1
          </>
        ),
        link: "/forAdults#for-adults",
        description:
          "Підвищити свій рівень англійської мови - це гарна ідея. Ми пропонуємо навчатись у сфері живої мови, адже наша програма базується на комунікативній методиці Cambridge English і спирається на міжнародну шкалу CEFR ( Common European Framework of Reference.",
      },
    ],
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current && !isScrolling) {
      setIsScrolling(true);
      const scrollAmount = 325;
      const newScrollLeft =
        containerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);

      containerRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });

      setTimeout(() => setIsScrolling(false), 200);
    }
  };

  useEffect(() => {
    const updateLayout = () => {
      setLayoutForLinks(window.innerWidth < 768 ? "mobile" : "desktop");
    };
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="home-links-to-studying-container2">
      <div className="home-links-to-studying-container2-layout" ref={containerRef}>
        {studyingPairLinks.map((pair, index) => (
          <div key={index} className="home-links-to-studying-container2-pair">
            {pair.map((link, index) => (
              <StyledContainerLinkType2
                key={index}
                link={link.link}
                description={link.description}
              >
                {link.text}
              </StyledContainerLinkType2>
            ))}
          </div>
        ))}
      </div>
      {layoutForLinks === "mobile" && (
        <div className="home-links-to-studying-container2-btn-container-mobile">
          <button
            className="home-links-to-studying-container2-btn left"
            onClick={() => scroll("left")}
          ></button>
          <button
            className="home-links-to-studying-container2-btn right"
            onClick={() => scroll("right")}
          ></button>
        </div>
      )}
    </div>
  );
}
