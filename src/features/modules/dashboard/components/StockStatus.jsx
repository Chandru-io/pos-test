import { useTranslation } from "react-i18next";
import CustomTable from "../../../ui/table/CustomTable";

const StockStatus = () => {
  const stockData = [
    {
      ingredient: "Soybean Oil (G-001)",
      stock: "0.00 - 86.00 g",
      action: "Refill",
    },
    {
      ingredient: "Salt (G-002)",
      stock: "0.00 - 86.00 g",
      action: "Sufficient",
    },
    {
      ingredient: "Soybean Oil (G-001)",
      stock: "0.00 - 86.00 g",
      action: "Refill",
    },
    {
      ingredient: "Salt (G-002)",
      stock: "0.00 - 86.00 g",
      action: "Sufficient",
    },
    {
      ingredient: "Soybean Oil (G-001)",
      stock: "0.00 - 86.00 g",
      action: "Refill",
    },
    {
      ingredient: "Salt (G-002)",
      stock: "0.00 - 86.00 g",
      action: "Sufficient",
    },
  ];

  const stockColumns = [
    {
      id: "ingredient",
      header: "dashBoard.Stock Status.Ingredients",
      accessorKey: "ingredient",
    },
    {
      id: "stock",
      header: "dashBoard.Stock Status.Stock Range",
      accessorKey: "stock",
    },
    {
      id: "action",
      header: "dashBoard.Stock Status.Action",
      accessorKey: "action",
    },
  ];

  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className=" flex justify-between items-center">
        <h3 className="text-lg font-semibold text-[#064E79] mb-4">
          {t("dashBoard.Stock Status.Stock Status")}
        </h3>
        <button className=" px-3 py-1 rounded-lg bg-red-100 border border-red-500 border-dashed ">
          Current Status : <span className=" text-red-600">Low</span>
        </button>
      </div>
      <CustomTable data={stockData} columns={stockColumns} />
    </div>
  );
};

export default StockStatus;
