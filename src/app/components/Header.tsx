"use client"; // бо використовуємо useState та useEffect

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import "../styles/Header.css";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerLinks = [
    { name: "Головна", path: "/" },
    { name: "Для школярів", path: "/forSchoolchildren" },
    { name: "Для дорослих", path: "/forAdults" },
    { name: "Підготовка до Cambridge Exams", path: "/prepareForExams" },
    { name: "Розмовні клуби", path: "/ourClubs" },
    { name: "Блог", path: "/blog" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.querySelector(".header-links");
      const hamburger = document.querySelector(".hamburger");
      if (
        isMenuOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        !hamburger?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  const [layoutForHeader, setLayoutForHeader] = useState("desktop");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForHeader("mobile");
        } else {
          setLayoutForHeader("desktop");
        }
      };

      updateLayout();
      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);
  const isMobile = layoutForHeader === "mobile";
  return (
    <div
      className={`header-container ${
        pathname === "/" || pathname === "/forSchoolchildren"
          ? "header-transparent"
          : ""
      }`}
    >
      <div className="header-logo-container" onClick={() => router.push("/")}>
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={74}
          height={74}
          className="header-logo"
        />
        <img
          src="/assets/logo_title.png"
          alt=""
          className="header-logo-title"
        />
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src="/assets/elements/menu.png" alt="Меню" />
      </div>

      <div className={`header-links ${isMenuOpen ? "open" : ""}`}>
        {headerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={pathname === link.path ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="header-btn">ЗАПИСАТИСЯ</div>
    </div>
  );
}
