"use client";

import "./styles/FolderContent.css";
import { ReactNode } from "react";
import ContainerAboutLessons from "./ContainerAboutLessons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";
interface FolderContentProps {
  title: ReactNode;
  idHash: string;
  bodyTextTop?: ReactNode;
  bodyTextMid?: ReactNode;
  bodyTextLast?: ReactNode;
  yellowBox?: ReactNode;
}

export default function FolderContent({
  title,
  idHash,
  bodyTextTop,
  bodyTextMid,
  bodyTextLast,
  yellowBox,
}: FolderContentProps) {
  const [layoutForFolder, setLayoutForFolder] = useState("desktop");
  const isMobile = layoutForFolder === "mobile";
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForFolder("mobile");
        } else {
          setLayoutForFolder("desktop");
        }
      };

      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);
  return (
    <div className="expanded-folder-content-container" id={idHash}>
      <div className="expanded-folder-content">
        <div className="expanded-folder-content-title">{title}</div>
        <div className="expanded-folder-content-body">
          <div className="expanded-folder-content-body-list-items">
            <motion.div
              className="expanded-folder-content-body-item"
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {bodyTextTop}
            </motion.div>
            {idHash === "folder3" ? (
              <>
                <motion.div
                  className="expanded-folder-content-body-img"
                  initial={{ opacity: 0, y: 75 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img src="/assets/images/folderImage.png" alt="" />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="expanded-folder-content-body-item"
                  initial={{ opacity: 0, y: 75 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {bodyTextMid}
                </motion.div>
              </>
            )}
            <motion.div
              className="expanded-folder-content-body-item"
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {bodyTextLast}
            </motion.div>
          </div>
          <div className="expanded-folder-content-body-info-container">
            <motion.div
              className="expanded-folder-content-extra-container"
              initial={{ opacity: 0, x: -75 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {yellowBox}
            </motion.div>
            <motion.div
              className="expanded-folder-content-body-info"
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="expanded-folder-content-body-info-text">
                <div className="expanded-folder-content-body-info-text-item">
                  Курс - 9 місяців
                </div>
                <div className="expanded-folder-content-body-info-text-item">
                  Дітей у групі- до 10
                </div>
                <div className="expanded-folder-content-body-info-text-item">
                  Формат- онлайн/офлайн
                </div>
                <div className="expanded-folder-content-body-info-text-item">
                  Вартість- від 230 грн 60 хв
                </div>
              </div>
              <div className="expanded-folder-content-body-info-btn-container">
                <button
                  className="expanded-folder-content-body-info-btn"
                  onClick={() => {
                    const target = document.getElementById("price-table");
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    }
                  }}
                >
                  Деталі та пропозиції
                  <TbArrowBigRightFilled className="expanded-folder-btn-arrow" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
