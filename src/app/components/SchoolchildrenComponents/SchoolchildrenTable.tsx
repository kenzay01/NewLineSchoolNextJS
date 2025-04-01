import "./styles/SchoolchildrenTable.css";
import { motion } from "framer-motion";
import { JSX } from "react";

export default function SchoolchildrenTable({
  plans,
  features,
}: {
  plans: string[];
  features: {
    name: string;
    values: (string | JSX.Element)[];
  }[];
}) {
  return (
    <motion.div
      className="table-container-tb"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true, amount: 0.2 }}
    >
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
    </motion.div>
  );
}
