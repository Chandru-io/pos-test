import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslation } from "react-i18next";

// Register necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Dine In", "Take Away", "Delivery"],
  datasets: [
    {
      label: "Sales Type",
      data: [1400, 600, 200],
      backgroundColor: ["#22c55e", "#3b82f6", "#ef4444"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "right", // Move labels to the right side
      align: "center", // Align labels to the center
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 10,
        padding: 20,
      },
    },
  },
  maintainAspectRatio: false,
};

const SalesType = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold text-[#064E79] mb-4">
        {t("dashBoard.Sales Type")}
      </h3>
      <div className=" h-72">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesType;
