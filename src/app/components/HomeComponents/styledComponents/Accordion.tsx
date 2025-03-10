"use client";

import { useState } from "react";
import Image from "next/image";  

// Імпорт стилів
import "./styles/Accordion.css";

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
    console.log("title", title);
    console.log("content", content);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion" onClick={() => setIsOpen(!isOpen)}>
      <div className="accordion-header">
        <span>{title}</span>
        <Image
          loading="lazy"
          src="/assets/elements/accordionBtn.png" 
          className={`accordion-btn ${isOpen ? "open" : ""}`}
          alt="Accordion Button"
          width={16}
          height={16}
        />
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}
