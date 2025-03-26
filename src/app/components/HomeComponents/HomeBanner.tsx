"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./styles/HomeBanner.css";

export default function HomeMainBanner() {
  const [layoutForMainBanner, setLayoutForMainBanner] = useState("desktop");
  const isMobile = layoutForMainBanner === "mobile";
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForMainBanner("mobile");
        } else {
          setLayoutForMainBanner("desktop");
        }
      };

      updateLayout(); // Ініціалізація при першому рендерингу
      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);

  return (
    <div className="home-main-banner-container">
      <div className="home-main-banner-title">
        <div className="home-main-banner-title-text-p1">ITS YOUR</div>
        <div className="home-main-banner-title-text-p2">
          NEW{" "}
          {isMobile ? null : (
            <div>
              <span className="span-online">ONLINE</span>
            </div>
          )}
        </div>
        <div className="home-main-banner-title-text-p3">
          {isMobile ? (
            <div>
              <span className="span-online">ONLINE</span>
              <span className="span-offline">OFFLINE</span>
            </div>
          ) : (
            <span className="span-offline">OFFLINE</span>
          )}{" "}
          SCHOOL
        </div>
      </div>

      <div className="home-main-banner-img">
        <Image
          loading="lazy"
          src="/assets/images/homeMainBanner.png"
          alt="Main Banner"
          width={1200}
          height={600}
        />
      </div>

      <div className="home-main-banner-p">
        Школа англійської мови та офіційний{" "}
        {layoutForMainBanner === "mobile" ? null : <br />}
        підготовчий центр {layoutForMainBanner === "mobile" ? <br /> : null}
        <span>Cambridge Assessment English</span>
      </div>

      <div className="home-main-banner-btn-container">
        <button
          className="home-main-banner-btn"
          onClick={() => {
            const target = document.getElementById("free-lessons");
            if (target) {
              setTimeout(() => {
                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 100);
            }
          }}
        >
          ЗАПИСАТИСЯ
        </button>
        <button
          className="home-main-banner-btn-test"
          onClick={() => {
            const target = document.getElementById("test-container");
            if (target) {
              setTimeout(() => {
                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 100);
            }
          }}
        >
          ПРОЙТИ ТЕСТ
        </button>
      </div>
    </div>
  );
}
