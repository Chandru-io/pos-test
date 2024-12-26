import { useState } from "react";

import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import Header from "./components/Headers";

const CUSTOMER_SALE_DATA = [
  {
    id: "1",
    date: "26/11/2024",
    customerName: "John Doe",
    saleNo: "S12345",
    waiter: "Mike",
    totalItem: 5,
    subTotal: "$50.00",
    deliveryCharge: "$5.00",
    serviceCharge: "$3.00",
    discount: "$2.00",
    tax: "$5.00",
    grandTotal: "$61.00",
    paymentMethod: "Credit Card",
  },
  {
    id: "2",
    date: "26/11/2024",
    customerName: "Jane Smith",
    saleNo: "S12346",
    waiter: "Sarah",
    totalItem: 3,
    subTotal: "$30.00",
    deliveryCharge: "$4.00",
    serviceCharge: "$2.00",
    discount: "$1.50",
    tax: "$3.50",
    grandTotal: "$38.00",
    paymentMethod: "Cash",
  },
  {
    id: "3",
    date: "26/11/2024",
    customerName: "Chris Evans",
    saleNo: "S12347",
    waiter: "Emma",
    totalItem: 7,
    subTotal: "$70.00",
    deliveryCharge: "$6.00",
    serviceCharge: "$4.00",
    discount: "$5.00",
    tax: "$6.50",
    grandTotal: "$81.50",
    paymentMethod: "UPI",
  },
];
const CUSTOMER_SALE_COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Date", accessorKey: "date", id: "2" },
  { header: "Customer Name", accessorKey: "customerName", id: "3" },
  { header: "Sale No.", accessorKey: "saleNo", id: "4" },
  { header: "Waiter", accessorKey: "waiter", id: "5" },
  { header: "Total Item", accessorKey: "totalItem", id: "6" },
  { header: "SubTotal", accessorKey: "subTotal", id: "7" },
  { header: "Delivery Charge", accessorKey: "deliveryCharge", id: "8" },
  { header: "Service Charge", accessorKey: "serviceCharge", id: "9" },
  { header: "Discount", accessorKey: "discount", id: "10" },
  { header: "Tax", accessorKey: "tax", id: "11" },
  { header: "Grand Total", accessorKey: "grandTotal", id: "12" },
  { header: "Payment Method", accessorKey: "paymentMethod", id: "13" },
];

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
  {
    id: "FD3",
    type: "select",
    name: "customer",
    title: "Customer",
    options: [
      { value: "name1 ", label: "Customer 1", id: 1 },
      { value: "name2 ", label: "Customer 2", id: 2 },
      { value: "name3 ", label: "Customer 3", id: 3 },
    ],
  },
  {
    id: "FD3",
    type: "select",
    name: "waiter",
    title: "Waiter",
    options: [
      { value: "name1 ", label: "waiter 1", id: 1 },
      { value: "name2 ", label: "waiter 2", id: 2 },
      { value: "name3 ", label: "waiter 3", id: 3 },
    ],
  },
];

const DetailedSalesReport = () => {
  const [filterData, setFilterData] = useState({});
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Detailed Sales Report </p>
      </div>
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>
      <div className="my-4 flex justify-between items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />
        </div>
      </div>
      <CustomTable data={CUSTOMER_SALE_DATA} columns={CUSTOMER_SALE_COLUMNS} />
    </div>
  );
};

export default DetailedSalesReport;
