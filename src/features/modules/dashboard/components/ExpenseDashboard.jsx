import { useTranslation } from "react-i18next";
import CustomTable from "../../../ui/table/CustomTable";

const ExpenseDashboard = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      date: "11-12-2023",
      amount: "$120",
      paymentmethod: "Cash",
      category: "other",
      person: "N/A",
      note: "",
      addedby: "admin",
    },
    {
      id: 2,
      date: "11-12-2023",
      amount: "$120",
      paymentmethod: "Cash",
      category: "other",
      person: "N/A",
      note: "",
      addedby: "admin",
    },
  ];

  const columns = [
    { id: "id", header: "dashBoard.Expenses.Sr. No", accessorKey: "id" },
    { id: "date", header: "dashBoard.Expenses.Date", accessorKey: "date" },
    {
      id: "amount",
      header: "dashBoard.Expenses.Amount",
      accessorKey: "amount",
    },
    {
      id: "paymentmethod",
      header: "dashBoard.Expenses.Payment Method",
      accessorKey: "paymentmethod",
    },
    {
      id: "category",
      header: "dashBoard.Expenses.Category",
      accessorKey: "category",
    },
    {
      id: "person",
      header: "dashBoard.Expenses.Responsible Person",
      accessorKey: "person",
    },
    { id: "note", header: "dashBoard.Expenses.Note", accessorKey: "note" },
    {
      id: "addedby",
      header: "dashBoard.Expenses.Added By",
      accessorKey: "addedby",
    },
  ];

  return (
    <div className="p-2 md:p-6 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold text-[#064E79] mb-4">
        {t("dashBoard.Expenses.Expenses")}
      </h3>
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default ExpenseDashboard;
