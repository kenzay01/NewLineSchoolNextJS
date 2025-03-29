import React, { useState } from "react";
import "./styles/AdultsAboutLessons.css";
import { motion } from "framer-motion";
type CourseLevel = "A1" | "A2" | "B1" | "B2" | "C1";

interface CourseDetails {
  duration: string;
  students: string;
  format: string;
  price: string;
}

interface Course {
  title: string;
  description: string;
  details: CourseDetails;
}

const courseData: Record<CourseLevel, Course> = {
  A1: {
    title: "Англійська для початківців",
    description:
      "Цей курс ідеально підходить для дорослих 18+, які ніколи не вчили англійську або мають мінімальні знання, а також для тих, хто колись навчався, але забув більшість слів і граматики. Він стане у пригоді людям, яким англійська необхідна для роботи, подорожей чи еміграції, а також тим, хто хоче почуватися впевнено за кордоном і легко спілкуватися з іноземцями.",
    details: {
      duration: "5.5 місяця",
      students: "до 10",
      format: "онлайн або офлайн",
      price: "410 грн",
    },
  },
  A2: {
    title: "Англійська для початківців",
    description:
      "Цей курс ідеально підходить для дорослих 18+, які ніколи не вчили англійську або мають мінімальні знання, а також для тих, хто колись навчався, але забув більшість слів і граматики. Він стане у пригоді людям, яким англійська необхідна для роботи, подорожей чи еміграції, а також тим, хто хоче почуватися впевнено за кордоном і легко спілкуватися з іноземцями.",
    details: {
      duration: "5.5 місяця",
      students: "до 10",
      format: "онлайн або офлайн",
      price: "410 грн",
    },
  },
  B1: {
    title: "Англійська для початківців",
    description:
      "Курс для тих, хто має базові знання та хоче розширити свої навички спілкування, покращити граматику та впевненість у використанні англійської мови.",
    details: {
      duration: "6 місяців",
      students: "до 8",
      format: "онлайн або офлайн",
      price: "450 грн",
    },
  },
  B2: {
    title: "Англійська для початківців",
    description:
      "Інтенсивний курс для тих, хто вже має досвід спілкування англійською та прагне вільно розмовляти в різних життєвих ситуаціях.",
    details: {
      duration: "6.5 місяця",
      students: "до 6",
      format: "онлайн або офлайн",
      price: "490 грн",
    },
  },
  C1: {
    title: "Англійська для початківців",
    description:
      "Поглиблений курс для тих, хто прагне досягти високого рівня володіння мовою, вільно спілкуватися в професійному та académічному середовищі.",
    details: {
      duration: "7 місяців",
      students: "до 5",
      format: "онлайн або офлайн",
      price: "530 грн",
    },
  },
};
const AdultsAboutLessons = () => {
  const [activeTab, setActiveTab] = useState<CourseLevel>("A1");

  const handleTabClick = (tab: CourseLevel) => {
    setActiveTab(tab);
  };

  const renderDetails = (details: CourseDetails) => {
    return (
      <>
        <p>
          <strong>Тривалість курсу:</strong> {details.duration}
        </p>
        <p>
          <strong>Студентів у групі:</strong> {details.students}
        </p>
        <p>
          <strong>Формат:</strong> {details.format}
        </p>
        <p>
          <strong>Вартість (90 хв):</strong> {details.price}
        </p>
      </>
    );
  };

  return (
    <motion.div
      className="for-adults-about-lessons-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="folder-container">
        <div className="folder-tabs">
          {Object.keys(courseData).map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              style={{
                left: `${Object.keys(courseData).indexOf(tab) * -35}px`,
              }}
              onClick={() => handleTabClick(tab as CourseLevel)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="folder-content">
          <div className="text-section">
            <h2>{courseData[activeTab].title}</h2>
            <p>{courseData[activeTab].description}</p>
          </div>
          <div className="details-section">
            <h3>Формат та Структура</h3>
            {renderDetails(courseData[activeTab].details)}
            <button className="details-button">Деталі та Пропозиції</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdultsAboutLessons;
