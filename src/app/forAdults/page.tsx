"use client";
import "../styles/ForAdults.css";
import AdultsAboutLessons from "../components/ForAdultsComponents/AdultsAboutLessons";
import AdultsBanner from "../components/ForAdultsComponents/AdultsBanner";
import TestContainer from "../components/HomeComponents/TestContainer";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import SchoolchildrenTableContainer from "../components/SchoolchildrenComponents/SchoolchildrenTableContainer";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
export default function ForAdults() {
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
  const withOut = <IoCloseSharp className="withOutMark" />;
  const withCheck = <IoMdCheckmark className="withCheckMark" />;
  const plans = ["Start", "Standard", "Smart"];
  const features = [
    {
      name: "",
      values: [
        <>
          <h1>12 занять</h1>
          <h2>1,5 місяць</h2>
        </>,
        <>
          <h1>24 заняття</h1>
          <h2>3 місяця</h2>
        </>,
        <>
          <h1>48 занять</h1>
          <h2>6 місяців</h2>
        </>,
      ],
    },
    {
      name: "2 заняття на тиждень",
      values: [withCheck, withCheck, withCheck],
    },
    {
      name: "Тести для відстежування прогресу",
      values: [withCheck, withCheck, withCheck],
    },
    {
      name: "Доступ до онлайн-платформи з інтерактивними завданнями та матеріалами",
      values: [withCheck, withCheck, withCheck],
    },
    {
      name: "Відеоматеріали для пропущених занять",
      values: [withOut, withCheck, withCheck],
    },
    {
      name: "Персоналізовані додаткові матеріали",
      values: [withOut, withOut, withCheck],
    },
    {
      name: "Розмовні клуби",
      values: [withOut, "1 р/місяць", "3 р/місяць"],
    },
    {
      name: "Індивідуальні консультації",
      values: [withOut, withOut, withCheck],
    },
    {
      name: "Додаткові бонуси",
      values: [withOut, "-3%", "-7%"],
    },
  ];

  return (
    <div className="for-adults-container" id="for-adults">
      <AdultsBanner />
      <AdultsAboutLessons />
      <SchoolchildrenTableContainer plans={plans} features={features} />
      <FreeLessonContainer />
      <TestContainer
        backImg="/assets/background/backForTest2.png"
        backIsImg={false}
        footer={<Footer background={false} />}
      />
    </div>
  );
}
