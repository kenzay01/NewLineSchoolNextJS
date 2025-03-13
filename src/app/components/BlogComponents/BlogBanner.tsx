"use client";
import "./styles/BlogBanner.css";
import { useEffect, useState } from "react";
import HighlightedText from "../HomeComponents/styledComponents/HighlightedText";
import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
export default function BlogBanner() {
    const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        if (typeof window !== "undefined") {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        }
      }, []);
    return <div className="blog-banner">
        <div className="blog-banner-content">
            <h1>Наші <HighlightedTextWithDots
                          colorText="#ffffff"
                          colorBackground="#BFA0BEB2"
                          colorDots="#AE88AD"
                          widthDots={isMobile ? 8 : 10}
                          widthBorder={isMobile ? 3 : 4}
                        >
                          Блоги
                        </HighlightedTextWithDots></h1>
            <p>Дізнайтеся більше про наші новини та події</p>
        </div>
    </div>;
}