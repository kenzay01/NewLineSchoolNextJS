"use client";

import "../styles/PrepareForExams.css";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
import PrepareForExamsBanner from "../components/PrepareForExamsComponents/PrepareForExamsBanner";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function PrepareForExams() {
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
    return <div className="prepare-for-exams-container" id="prepare-for-exams">
        <PrepareForExamsBanner />
        <FreeLessonContainer />
        <div style={{height:50}}></div>
    </div>
}