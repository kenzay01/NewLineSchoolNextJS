import "./styles/ColumnLevel.css";
import { useEffect, useRef, useState, ReactElement } from "react";
import Image from "next/image";

interface Props {
  title: string;
  height: number;
  active: boolean;
  onClick: () => void;
  index: number;
  text: ReactElement;
}

const ColumnLevel = ({
  title,
  height,
  active,
  onClick,
  index,
  text,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layoutForMainBanner, setLayoutForMainBanner] = useState("desktop");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        active &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active, onClick]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForMainBanner("mobile");
        } else {
          setLayoutForMainBanner("desktop");
        }
      };

      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`column-level-container ${active ? "active" : ""} ${
        layoutForMainBanner === "mobile" ? "mobile" : ""
      }`}
      style={{ height }}
      onClick={onClick}
    >
      {index !== 4 && (
        <div
          className="column-level-arrow"
          style={{
            top: index === 0 ? -50 : -60,
            left: layoutForMainBanner === "mobile" ? 10 : 20,
          }}
        >
          <Image
            loading="lazy"
            src="/assets/elements/arrow_up_down.png"
            alt="Arrow"
            width={20}
            height={20}
          />
        </div>
      )}
      <div className="column-level-container-title">{title}</div>
      {active && (
        <div
          className={`column-level-container-active-box ${
            layoutForMainBanner === "mobile" && index < 3 ? "mobile" : ""
          }`}
        >
          <img
            loading="lazy"
            src={
              layoutForMainBanner === "mobile"
                ? "/assets/elements/activeBoxLevelMobile.png"
                : "/assets/elements/activeBoxLevel.png"
            }
            alt="Active Box"
            className="active-box-bg"
          />
          <div className="active-box-text">{text}</div>
        </div>
      )}
    </div>
  );
};

export default ColumnLevel;
