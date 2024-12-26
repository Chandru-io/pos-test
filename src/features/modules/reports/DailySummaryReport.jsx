import { useState } from "react";

import ReportFilters from "./components/ReportFilters";
import Table from "./components/ReportTable";

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
];

// Table Headers
const salesHeaders = [
  "Sr. No.",
  "Reference No",
  "Order Type",
  "Table",
  "Customer",
  "Total Payable",
  "Discount",
  "Paid",
  "Due",
  "Refund Amount",
];
const purchasesHeaders = [
  "Sr. No.",
  "Reference No",
  "Supplier",
  "Grand Total",
  "Paid",
  "Due",
];
const duePayment = ["  Sr No.", "  Amount", " Supplier", "Note"];
const expenceHeader = [
  " Sr No.",
  "Amount",
  "Category",
  "Responsible Person",
  "Note",
];

const dueReceived = ["  Sr No.", "  Amount", " Customer", "Note"];

const wasteHeaders = [
  "  Sr No.",
  "Reference No",
  " Loss Amount",
  "Responsible Person",
  "Note",
];

// Table Datas
const salesData = [
  {
    id: 1,
    referenceNo: "aSW240622-001",
    orderType: "Dine In",
    table: "1",
    customer: "Walk-in Customer",
    totalPayable: 184.0,
    discount: 0.0,
    paid: 184.0,
    due: 0.0,
    refundAmount: 0.0,
  },
  {
    id: 2,
    referenceNo: "aSW240622-001",
    orderType: "Dine In",
    table: "1",
    customer: "Walk-in Customer",
    totalPayable: 184.0,
    discount: 0.0,
    paid: 184.0,
    due: 0.0,
    refundAmount: 0.0,
  },
];
const purchasesData = [
  {
    SrNo: 1,
    refNo: "0250",
    Supplier: "RPS Balaji",
    GrandTotal: 6225.225,
    Paid: 5645,
    Due: 4522,
  },
];

const expenceData = [
  {
    SrNo: 1,
    Amount: 1541,
    Category: "gsadu",
    ResponsiblePerson: "rps Balaji",
    Note: "jsahdjihasidh",
  },
];

const duePaymentData = [
  {
    SrNo: 1,
    Amount: 5454,
    Supplier: "RPS Balaji",
    Note: "jshdihasdijnhdsifhsdjk",
  },
];

const dueReceivedData = [
  {
    SrNo: 1,
    Amount: 5454,
    customer: "RPS Balaji",
    Note: "jshdihasdijnhdsifhsdjk",
  },
];

const wasteData = [
  {
    SrNo: 1,
    ReferenceNo: 23154521,
    LossAmount: 12000,
    ResponsiblePerson: "rps balaji",
    Note: "sbdjjsbdjbsadbd",
  },
];

// Sales Summary
const salesSummary = salesData.reduce(
  (acc, item) => {
    acc.totalPayable += item.totalPayable || 0;
    acc.discount += item.discount || 0;
    acc.paid += item.paid || 0;
    acc.due += item.due || 0;
    acc.refundAmount += item.refundAmount || 0;
    return acc;
  },
  { totalPayable: 0, discount: 0, paid: 0, due: 0, refundAmount: 0 }
);

// Purchases Summary
const purchasesSummary = purchasesData.reduce(
  (acc, item) => {
    acc.GrandTotal += item.GrandTotal || 0;
    acc.Paid += item.Paid || 0;
    acc.Due += item.Due || 0;
    return acc;
  },
  { GrandTotal: 0, Paid: 0, Due: 0 }
);

// Expenses Summary
const expenseSummary = expenceData.reduce(
  (acc, item) => {
    acc.Amount += item.Amount || 0;
    return acc;
  },
  { Amount: 0 }
);

// Due Payments Summary
const duePaymentSummary = duePaymentData.reduce(
  (acc, item) => {
    acc.Amount += item.Amount || 0;
    return acc;
  },
  { Amount: 0 }
);

// Due Received Summary
const dueReceivedSummary = dueReceivedData.reduce(
  (acc, item) => {
    acc.Amount += item.Amount || 0;
    return acc;
  },
  { Amount: 0 }
);

// Waste Summary
const wasteSummary = wasteData.reduce(
  (acc, item) => {
    acc.LossAmount += item.LossAmount || 0;
    return acc;
  },
  { LossAmount: 0 }
);

const DailySummaryReport = () => {
  const [filterData, setFilterData] = useState({});

  return (
    <div className="bg-white rounded-md p-2">
      <div className="px-4">
        <p className="text-xl font-bold ">Daily Summary </p>
      </div>
      <div className="flex justify-between items-center mb-4 px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
        <button
          type="button"
          className="bg-[#3FB547] text-white rounded-lg px-4 py-2 "
        >
          Print
        </button>
      </div>
      <div className="px-4">
        <div className=" flex flex-col gap-3  ">
          <p className="  rounded font-bold text-xl">Purchase</p>
          <Table
            headers={purchasesHeaders}
            data={purchasesData}
            summary={purchasesSummary}
          />
        </div>
        <div className=" flex flex-col gap-3 ">
          <p className="  rounded font-bold text-xl">sales</p>
          <Table
            headers={salesHeaders}
            data={salesData}
            summary={salesSummary}
          />
        </div>
        <div className=" flex flex-col gap-3 ">
          <p className="  rounded font-bold text-xl">Expenses</p>
          <Table
            headers={expenceHeader}
            data={expenceData}
            summary={expenseSummary}
          />
        </div>
        <div className=" flex flex-col gap-3 ">
          <p className="  rounded font-bold text-xl">Supplier Due Payments</p>
          <Table
            headers={duePayment}
            data={duePaymentData}
            summary={duePaymentSummary}
          />
        </div>
        <div className=" flex flex-col gap-3 ">
          <p className="  rounded font-bold text-xl">Customer Due Recieves</p>
          <Table
            headers={dueReceived}
            data={dueReceivedData}
            summary={dueReceivedSummary}
          />
        </div>
        <div className=" flex flex-col gap-3 ">
          <p className="  rounded font-bold text-xl">Wastes</p>
          <Table
            headers={wasteHeaders}
            data={wasteData}
            summary={wasteSummary}
          />
        </div>
      </div>
    </div>
  );
};

export default DailySummaryReport;
