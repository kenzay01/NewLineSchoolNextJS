"use client";

import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
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
        backgroundImage: background
          ? "url('/assets/background/back-footer.png')"
          : "none",
        paddingTop: background ? 80 : 0,
        height: background
          ? isMobile
            ? "auto"
            : 400
          : isMobile
          ? "auto"
          : 350,
      }}
    >
      <div className="footer-info">
        <div className="footer-info-adress-container">
          <div className="footer-info-adress">
            <h1>АДРЕСА</h1>
            <h2>Киівська область, Бориспіль, вул. Білодідівка 19</h2>
          </div>
          <a
            href="https://maps.app.goo.gl/UPMrS4pAHhR2GVoJ9"
            className="footer-info-map"
          >
            Подивитися на карті
          </a>
        </div>
        <div className="footer-info-contacts-container">
          <div className="footer-info-contacts">
            <h1>КОНТАКТИ</h1>
            <h2>+38 (067) 71 49 862</h2>
            <h2>nnewstudyline@gmail.com</h2>
          </div>
          <div className="footer-info-socials">
            <a href="https://www.instagram.com/new_study_line?igsh=MXJ1aW5xemt5OHdtcg%3D%3D&utm_source=qr">
              <FaInstagram className="footer-info-socials-icon" />
            </a>
            <a href="https://www.tiktok.com/@new_study_line?_t=ZM-8vRUnOb0yud&_r=1">
              <FaTiktok className="footer-info-socials-icon" />
            </a>
            <a href="https://t.me/new_line_school_boryspil">
              <FaTelegram className="footer-info-socials-icon" />
            </a>
          </div>
        </div>
        {/* <div className="footer-info-work-schedule-container">
          <h1>ГРАФІК РОБОТИ</h1>
          <div>
            <h2>ПН-ПТ:</h2>
            <h2>СБ-НД:</h2>
          </div>
        </div> */}
      </div>
      <a className="footer-logo" href="/">
        <img src="/assets/logo_white_back.png" alt="Logo" />
      </a>
      <div className="footer-copyright">
        <a
          href="https://telebots.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Telebots
        </a>
      </div>
    </div>
  );
}
