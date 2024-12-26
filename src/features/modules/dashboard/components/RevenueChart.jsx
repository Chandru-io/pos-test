import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useTranslation } from "react-i18next";

ChartJS.register(...registerables);

const data = {
  labels: ["May 15", "May 20", "May 25", "May 30"],
  datasets: [
    {
      label: "Revenue",
      data: [100, 200, 150, 300],
      borderColor: "#22c55e",
      tension: 0.4,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const RevenueChart = () => {
  useEffect(() => {
    return () => {
      ChartJS.instances = {};
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border w-full">
      <h3 className="text-lg font-semibold text-[#064E79] mb-4">
        {t("dashBoard.Revenue")}
      </h3>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
