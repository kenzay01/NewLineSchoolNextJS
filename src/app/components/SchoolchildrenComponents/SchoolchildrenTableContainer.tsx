import "./styles/SchoolchildrenTableContainer.css";
import HighlightedText from "../HomeComponents/styledComponents/HighlightedText";
import SchoolchildrenTable from "./SchoolchildrenTable";
export default function SchoolchildrenTableContainer() {
  return (
    <div className="table-container">
      <div className="table-container-title">
        Структура{" "}
        <HighlightedText colorBack="#BFA0BEB2">навчання</HighlightedText> та
        пропозиції
      </div>
      <SchoolchildrenTable />
    </div>
  );
}
