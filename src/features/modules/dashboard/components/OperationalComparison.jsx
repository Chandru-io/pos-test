import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useTranslation } from "react-i18next";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: ["Sales", "Vendors", "Expenses", "Receivables", "Payables"],

  datasets: [
    {
      label: "Operational Data",
      data: [300, 200, 150, 400, 250],
      backgroundColor: ["#22c55e", "#3b82f6", "#f97316", "#eab308", "#ef4444"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const OperationalComparison = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold text-[#064E79] mb-4">
        {t("dashBoard.Operational Comparison.Operational Comparison")}
      </h3>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default OperationalComparison;
