"use client"; 

import { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/Footer.css";

export default function Footer({ background }: { background: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      if (typeof window !== "undefined") {
      const updateLayout = () => {
        setIsMobile(window.innerWidth < 768);
      };

      updateLayout();
      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);

  return (
    <div
      className="footer-container"
      style={{
        backgroundImage: background ? "url('/assets/background/back-footer.png')" : "none",
        paddingTop: background ? 80 : 0,
        height: background ? (isMobile ? "auto" : 400) : isMobile ? "auto" : 350,
      }}
    >
      <div className="footer-info">
        <div className="footer-info-adress-container">
          <div className="footer-info-adress">
            <h1>АДРЕСА</h1>
            <h2>вул. Степана Бандери</h2>
          </div>
          <div className="footer-info-map">Подивитися на карті</div>
        </div>
        <div className="footer-info-contacts-container">
          <div className="footer-info-contacts">
            <h1>КОНТАКТИ</h1>
            <h2>+380</h2>
            <h2>пошта@gmail.com</h2>
          </div>
          <div className="footer-info-socials">
            <img src="/assets/instagram-icon.png" alt="Instagram" />
            <img src="/assets/telegram-icon.png" alt="Telegram"  />
          </div>
        </div>
        <div className="footer-info-work-schedule-container">
          <h1>ГРАФІК РОБОТИ</h1>
          <div>
            <h2>ПН-ПТ:</h2>
            <h2>СБ-НД:</h2>
          </div>
        </div>
      </div>
      <div className="footer-logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
    </div>
  );
}
