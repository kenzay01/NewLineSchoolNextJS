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

  return (
    <div className={`header-container ${pathname === "/" ? "header-transparent" : ""}`}>
      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={120}
        height={50}
        className="header-logo"
        onClick={() => router.push("/")}
      />

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src="/assets/elements/menu.png" alt="Меню" />
      </div>

      <div className={`header-links ${isMenuOpen ? "open" : ""}`}>
        {headerLinks.map((link, index) => (
          <Link key={index} href={link.path} className={pathname === link.path ? "active" : ""} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}
      </div>

      <div className="header-btn">ЗАПИСАТИСЯ</div>
    </div>
  );
}
