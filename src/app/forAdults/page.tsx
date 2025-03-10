"use client";
import "../styles/ForAdults.css";
import AdultsAboutLessons from "../components/ForAdultsComponents/AdultsAboutLessons";
import AdultsBanner from "../components/ForAdultsComponents/AdultsBanner";
import TestContainer from "../components/HomeComponents/TestContainer";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
export default function ForAdults(){
    const pathname = usePathname();
      const [hash, setHash] = useState("");
    
      useEffect(() => {
        const updateHash = () => setHash(window.location.hash.substring(1));
    
        updateHash(); 
        window.addEventListener("hashchange", updateHash);
        return () => window.removeEventListener("hashchange", updateHash);
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

    return <div className="for-adults-container" id="for-adults">
        <AdultsBanner />
        <AdultsAboutLessons />
        <TestContainer backImg="/assets/background/backForTest2.png" backIsImg={false} footer={<Footer background={false}/>}/>
    </div>
}