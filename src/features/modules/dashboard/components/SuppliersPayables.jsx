import { useTranslation } from "react-i18next";
import CustomTable from "../../../ui/table/CustomTable";

const SuppliersPayables = () => {
  const data = [
    { no: 1, name: "Quick Ingredients", amount: "$120" },
    { no: 2, name: "Quick Ingredients", amount: "$320" },
    { no: 3, name: "Quick Ingredients", amount: "$320" },
    { no: 4, name: "Quick Ingredients", amount: "$430" },
  ];

  const columns = [
    {
      id: "no",
      header: "dashBoard.Suppliers Payables.Serial No.",
      accessorKey: "no",
    },
    {
      id: "name",
      header: "dashBoard.Suppliers Payables.Supplier Name",
      accessorKey: "name",
    },
    {
      id: "amount",
      header: "dashBoard.Suppliers Payables.Due Amount",
      accessorKey: "amount",
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold text-[#064E79] mb-1">
        {t("dashBoard.Suppliers Payables.Suppliers Payables")}
      </h3>
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default SuppliersPayables;
