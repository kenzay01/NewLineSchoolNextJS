"use client";

import "../styles/OurClubs.css";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
import OurClubsBanner from "../components/OurClubsComponents/OurClubsBanner";
import OurClubsInfoHeader from "../components/OurClubsComponents/OurClubsInfoHeader";
import OurClubsInfoBoxContainer from "../components/OurClubsComponents/OurClubsInfoBoxContainer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function OurClubs() {
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
  const clubInfo = [
    {
      title: "“Lets talk about it”",
      subtitle: <>Розмовний клуб для підлітків</>,
      href: "teenagersClub",
      titleCard: "Онлайн",
      time: "90",
      cost: "350",
      count: "10",
      extraText:
        "Для власників Standard та Smart пакетів розмовний клуб безкоштовний.",
    },
    {
      title: "“ Англійська майстерня Cut and Talk”",
      subtitle: <>Розмовний арт-крафт клуб для дітей 1-4 класів</>,
      href: "schoolchildrenClub",
      titleCard: "Офлайн",
      time: "60",
      cost: "450",
      count: "10",
    },
    {
      title: "“Inspiration Time”",
      subtitle: <>Розмовний клуб для дорослих</>,
      href: "forAdultsClub",
      titleCard: "Онлайн",
      time: "90",
      cost: "350",
      count: "10",
      extraText: "Для власників  Smart пакету розмовний клуб безкоштовний.",
    },
    // {
    //     title:"“Key Grammar”",
    //     subtitle:<>Граматичний клуб <br /> для підлітків</>
    // }
  ];

  return (
    <div className="our-clubs-container" id="our-clubs">
      <OurClubsBanner />
      <OurClubsInfoHeader />
      <>
        {clubInfo.map((club, index) => {
          return (
            <OurClubsInfoBoxContainer
              key={index}
              title={club.title}
              subtitle={club.subtitle}
              type={`type${index + 1}`}
              href={club.href}
              titleCard={club.titleCard}
              time={club.time}
              cost={club.cost}
              count={club.count}
              extraText={club.extraText}
            />
          );
        })}
      </>
      <FreeLessonContainer />
      <div style={{ height: 50 }}></div>
    </div>
  );
}
