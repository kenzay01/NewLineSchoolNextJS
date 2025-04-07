"use client";

import "../styles/PrepareForExams.css";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
import PrepareForExamsBanner from "../components/PrepareForExamsComponents/PrepareForExamsBanner";
import PrepareForEviBanner from "../components/PrepareForEviComponents/PrepareForEviBanner";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function PrepareForEvi() {
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
  return (
    <div className="prepare-for-evi-container" id="prepare-for-evi">
      <PrepareForEviBanner />
      <FreeLessonContainer />
      <div style={{ height: 50 }}></div>
    </div>
  );
}
