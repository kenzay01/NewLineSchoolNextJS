import "./styles/SchoolchildrenTableContainer.css";
import HighlightedText from "../HomeComponents/styledComponents/HighlightedText";
import SchoolchildrenTable from "./SchoolchildrenTable";
import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
export default function SchoolchildrenTableContainer() {
  return (
    <div className="table-container" id="price-table">
      <motion.div
        className="table-container-title"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <HighlightedText colorBack="#BFA0BEB2">Структура</HighlightedText>{" "}
        навчання та{" "}
        <HighlightedText colorBack="#BFA0BEB2">пропозиції</HighlightedText>
      </motion.div>
      <SchoolchildrenTable />
      <div className="table-container-button-container">
        <p>Запишіться на пробне заняття</p>
        <MdOutlineKeyboardDoubleArrowRight className="table-container-button-container-icon" />
        <button
          className="table-container-button"
          onClick={() => {
            const target = document.getElementById("free-lessons");
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
          Записатися
        </button>
      </div>
    </div>
  );
}
