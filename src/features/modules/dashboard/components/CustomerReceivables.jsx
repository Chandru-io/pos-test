import { useTranslation } from "react-i18next";
import CustomTable from "../../../ui/table/CustomTable";

const CustomerReceivables = () => {
  const { t } = useTranslation();
  const data = [
    { no: 1, name: "John Doe", amount: "$100" },
    { no: 2, name: "John Doe", amount: "$100" },
    { no: 3, name: "John Doe", amount: "$100" },
    { no: 4, name: "John Doe", amount: "$100" },
  ];

  const columns = [
    {
      id: "no",
      header: "dashBoard.Customer Receivables.Serial No.",
      accessorKey: "no",
    },
    {
      id: "name",
      header: "dashBoard.Customer Receivables.Customer Name",
      accessorKey: "name",
    },
    {
      id: "amount",
      header: "dashBoard.Customer Receivables.Due Amount",
      accessorKey: "amount",
    },
  ];
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold text-[#064E79] mb-1">
        {t("dashBoard.Customer Receivables.Customer Receivables")}
      </h3>
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default CustomerReceivables;
