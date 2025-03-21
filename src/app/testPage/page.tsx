"use client"; // цей рядок необхідно додати на початку компонента

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { test_descriptions, testTitles } from "../dict/test";
import Image from "next/image"; // для зображень замість тегу <img>
import "../styles/TestsPage.css";

export default function TestsPage() {
  const router = useRouter();

  return (
    <div className="tests-page">
      <div className="tests-page-btn-return-container">
        <button
          className="tests-page-btn-return"
          onClick={() => {
            router.back();
          }}
        >
          <FaArrowLeft className="tests-page-btn-return-icon" /> повернутися
          назад
        </button>
      </div>
      <div className="tests-page-container">
        <div className="tests-page-container-title">
          Безкоштовний тест на рівень англійської
        </div>
        <div className="tests-page-container-body">
          {testTitles.map((testTitle) => (
            <div
              className="tests-page-container-body-test"
              key={testTitle.id}
              onClick={() => {
                router.push(`/testPage/${testTitle.id}`);
              }}
            >
              <div className="tests-page-container-body-test-text">
                {testTitle.title.split("<br />").map((elem, i) => {
                  return (
                    <div key={i}>
                      {elem}
                      <br />
                    </div>
                  );
                })}
              </div>
              <button className="tests-page-container-body-test-button">
                <Image
                  loading="lazy"
                  src="/assets/elements/arrow_right_white.png"
                  alt="Arrow right"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
