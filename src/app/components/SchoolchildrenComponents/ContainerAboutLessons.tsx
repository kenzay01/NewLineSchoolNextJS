import "./styles/ContainerAboutLessons.css";
import { ReactNode } from "react";
export default function ContainerAboutLessons({
  bodyTitle = false,
  bodyCenterElements,
  bodyBottomElements,
  btnWidth = 200,
  btnHeight = 45,
}: {
  bodyTitle?: boolean;
  bodyCenterElements: ReactNode[];
  bodyBottomElements: ReactNode[];
  btnWidth?: number;
  btnHeight?: number;
}) {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="container-about-lessons">
      <div className="container-about-lessons-title-body-container">
        <div className="container-about-lessons-title-body">
          <div className="container-about-lessons-title">
            Формат та <br /> Структура Навчання
          </div>
          <div className="container-about-lessons-body">
            <div className="container-about-lessons-body-title">
              {bodyTitle
                ? "Навчання в групі та індивідуально або міні групи"
                : "Групові та індивідуальні заняття"}
            </div>
            <div className="container-about-lessons-body-center">
              {bodyCenterElements.map((text, index) => {
                return (
                  <div
                    key={index}
                    className="container-about-lessons-body-elem-item"
                  >
                    {text}
                  </div>
                );
              })}
            </div>
            <div className="container-about-lessons-body-bottom">
              {bodyBottomElements.map((text, index) => {
                return (
                  <div
                    key={index}
                    className="container-about-lessons-body-elem-item"
                  >
                    {text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="container-about-lessons-bottom"
          style={{ marginTop: bodyTitle ? (isMobile ? 0 : 25) : 0 }}
        >
          <div className="container-about-lessons-bottom-title">
            Бонусні пропозиції
          </div>
          <div className="container-about-lessons-bottom-subtitle">
            (Чим більше, тим вигідніше)
          </div>
          <div className="container-about-lessons-bottom-img">
            <img loading="lazy"src="/assets/elements/long_line.png" alt="" />
          </div>
          <div className="container-about-lessons-bottom-footer">
            Для уточнення зв'язатись з <br /> менеджером
          </div>
        </div>
      </div>
      <div className="container-about-lessons-btn-container">
        <button
          style={{
            width: isMobile ? 130 : btnWidth,
            height: isMobile ? 30 : btnHeight,
          }}
          className="container-about-lessons-btn"
          onClick={() => {}}
        >
          ЗАПИСАТИСЯ
        </button>
      </div>
    </div>
  );
}
