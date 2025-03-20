import "./styles/SchoolchildrenTable.css";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

const withOut = <IoCloseSharp className="withOutMark" />;
const withCheck = <IoMdCheckmark className="withCheckMark" />;
const plans = ["Start", "Standard", "Smart", "Smart+"];
const features = [
  {
    name: "",
    values: [
      <>
        <h1>8 занять</h1>
        <h2>1 місяць</h2>
      </>,
      <>
        <h1>24 заняття</h1>
        <h2>3 місяця</h2>
      </>,
      <>
        <h1>48 занять</h1>
        <h2>5 місяців</h2>
      </>,
      <>
        <h1>72 занять</h1>
        <h2>9 місяців</h2>
      </>,
    ],
  },
  {
    name: "2 заняття на тиждень",
    values: [withCheck, withCheck, withCheck, withCheck],
  },
  {
    name: "Тести для відстежування прогресу",
    values: [withCheck, withCheck, withCheck, withCheck],
  },
  {
    name: "Доступ до онлайн-платформи з інтерактивними завданнями та матеріалами",
    values: [withCheck, withCheck, withCheck, withCheck],
  },
  {
    name: "Персоналізовані додаткові матеріали",
    values: [withOut, withCheck, withCheck, withCheck],
  },
  {
    name: "Розмовні клуби",
    values: [withOut, "2 р/місяць", "3 р/місяць", "4 р/місяць"],
  },
  {
    name: "Індивідуальні консультації",
    values: [withOut, withOut, withCheck, withCheck],
  },
  {
    name: "Розгорнутий аналіз досягнень",
    values: [withOut, withOut, withCheck, withCheck],
  },
  {
    name: "Участь у літній програмі (-50%)",
    values: [withOut, withOut, withOut, withCheck],
  },
  { name: "Додаткові бонуси", values: [withOut, "-3%", "-7%", "-10%"] },
];

export default function SchoolchildrenTable() {
  return (
    <div className="table-container-tb">
      <table className="pricing-table">
        <thead>
          <tr>
            <th></th>
            {plans.map((plan, index) => (
              <th key={index}>{plan}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td>{feature.name}</td>
              {feature.values.map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
