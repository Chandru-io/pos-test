/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEdit,
  FaTrashAlt,
  FaEye,
  FaFilePdf,
  FaTrash,
} from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { IoPencilSharp } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import CustomTable from "../../../../ui/table/CustomTable";

const SupplierDetails = () => {
  const [isEditingBilling, setIsEditingBilling] = useState(false);
  const [isEditingCompany, setIsEditingCompany] = useState(false);
  const [billingAddress, setBillingAddress] = useState(
    "Borivali, GUJARAT, 395006 India"
  );
  const [companyAddress, setCompanyAddress] = useState(
    "Kim J Gibson Roshita Apartment"
  );

  const bills = [
    {
      id: "BILL00002",
      date: "12-12-24",
      paid: 1500,
      due: 1500,
      person: "Muthu",
      status: "Partially Paid",
    },
    {
      id: "BILL00003",
      date: "13-12-24",
      paid: 1000,
      due: 500,
      person: "Silpa",
      status: "Draft",
    },
    {
      id: "BILL00004",
      date: "14-12-24",
      paid: 2000,
      due: 0,
      person: "Sasik",
      status: "Sent",
    },
    {
      id: "BILL00005",
      date: "15-12-24",
      paid: 3000,
      due: 0,
      person: "John",
      status: "Paid",
    },
  ];

  const statusColors = {
    "Partially Paid": "bg-green-100 text-green-700",
    Draft: "bg-red-100 text-red-700",
    Sent: "bg-yellow-100 text-yellow-700",
    Paid: "bg-teal-100 text-teal-700",
  };

  const columns = [
    { header: "Bill", accessorKeyKey: "id", id: "1" },
    { header: "Bill Date", accessorKey: "date", id: "2" },
    { header: "Paid", accessorKey: "paid", id: "3" },
    { header: "Due Amount", accessorKey: "due", id: "4" },
    { header: "Responsible Person", accessorKey: "person", id: "5" },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ value }) => (
        <span className={`rounded-full px-2 ${statusColors[value]}`}>
          {value}
        </span>
      ),
    },
    {
      header: "Actions",
      cell: () => (
        <div className="flex space-x-2 justify-center">
          <button className="bg-red-500 p-2 rounded-md text-white">
            <FaTrashAlt />
          </button>
          <button className="bg-blue-500 p-2 rounded-md text-white">
            <FaEdit />
          </button>
          <button className="bg-green-500 p-2 rounded-md text-white">
            <FaEye />
          </button>
          <button className="bg-orange-500 p-2 rounded-md text-white">
            <FaFilePdf />
          </button>
        </div>
      ),
    },
  ];

  const paymentSummaryData = [
    {
      receipt: "--",
      DATE: "12-12-2024",
      AMOUNT: "USD 1500.00",
      ACCOUNT: "ROUNDBANK Benjamin Adams",
      REFERENCE: "---",
      DESCRIPTION: "---",
    },
    {
      receipt: "--",
      DATE: "12-12-2024",
      AMOUNT: "USD 1500.00",
      ACCOUNT: "ROUNDBANK Benjamin Adams",
      REFERENCE: "---",
      DESCRIPTION: "---",
    },
    {
      receipt: "--",
      DATE: "12-12-2024",
      AMOUNT: "USD 1500.00",
      ACCOUNT: "COBIZ BANK Chisom Latifat",
      REFERENCE: "---",
      DESCRIPTION: "---",
    },
  ];

  const debitNoteSummaryData = [
    {
      DATE: "12-12-2024",
      AMOUNT: "USD 630.00",
      DESCRIPTION: "---",
    },
    {
      DATE: "12-12-2024",
      AMOUNT: "USD 630.00",
      DESCRIPTION: "---",
    },
    {
      DATE: "12-12-2024",
      AMOUNT: "USD 630.00",
      DESCRIPTION: "---",
      ACTION: (
        <div className="flex justify-center space-x-4">
          <FaEdit className="text-[#1AB69D] bg-[#E9FAF7]  cursor-pointer" />
          <FaTrash className="text-[#EB3D4D] bg-[#FFECE4] cursor-pointer" />
        </div>
      ),
    },
    {
      DATE: "12-12-2024",
      AMOUNT: "USD 630.00",
      DESCRIPTION: "---",
    },
    {
      DATE: "12-12-2024",
      AMOUNT: "USD 630.00",
      DESCRIPTION: "---",
    },
    {
      DATE: "12-12-2024",
      AMOUNT: "USD 630.00",
      DESCRIPTION: "---",
    },
    {
      DATE: "12-12-2024",
      AMOUNT: "USD 630.00",
      DESCRIPTION: "---",
    },
    {
      DATE: "12-12-2024",
      AMOUNT: "USD 630.00",
      DESCRIPTION: "---",
      ACTION: (
        <div className="flex justify-center space-x-4">
          <FaEdit className="text-[#1AB69D] bg-[#E9FAF7]  cursor-pointer" />
          <FaTrash className="text-[#EB3D4D] bg-[#FFECE4]  cursor-pointer" />
        </div>
      ),
    },
  ];

  const paymentSummaryColumns = [
    { header: "PAYMENT RECEIPT", accessorKey: "receipt", id: "1" },
    { header: "DATE", accessorKey: "DATE", id: "2" },
    { header: "AMOUNT", accessorKey: "AMOUNT", id: "3" },
    { header: "ACCOUNT", accessorKey: "ACCOUNT", id: "4" },
    { header: "REFERENCE", accessorKey: "REFERENCE", id: "5" },
    { header: "DESCRIPTION", accessorKey: "DESCRIPTION", id: "6" },
    {
      header: "ACTION",
      cell: () => (
        <div>
          <FaTrash className="text-[#EB3D4D] bg-[#FFECE4] mx-auto cursor-pointer" />
        </div>
      ),
    },
  ];

  const debitNoteSummaryColumns = [
    { header: "DATE", accessorKey: "DATE", id: "1" },
    { header: "AMOUNT", accessorKey: "AMOUNT", id: "2" },
    { header: "DESCRIPTION", accessorKey: "DESCRIPTION", id: "3" },
    {
      header: "ACTION",
      accessorKey: "ACTION",
      cell: () => (
        <div className="flex justify-center space-x-4">
          <FaEdit className="text-[#1AB69D] bg-[#E9FAF7]  cursor-pointer" />
          <FaTrash className="text-[#EB3D4D] bg-[#FFECE4] cursor-pointer" />
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Supplier Info Section */}
      <div className="bg-white rounded-lg shadow p-6 w-full flex flex-col md:flex-row gap-8">
        <div className="flex justify-center items-center flex-1 w-full gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="flex-1 flex items-center">
            <div className="mb-4">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Sameer Kumar Chouhan
              </h3>
              <p className="text-[#285773]">
                <FaMapMarkerAlt className="inline-block mr-2 text-[#005180]" />{" "}
                Mumbai
              </p>
              <p className="text-[#285773]">
                <BsBuildings className="inline-block mr-2 text-[#005180]" /> veg
                peer
              </p>
              <p className="text-[#285773]">
                <FaPhoneAlt className="inline-block mr-2 text-[#005180]" />{" "}
                780018112
              </p>
              <p className="text-[#285773]">
                <FaEnvelope className="inline-block mr-2 text-[#005180]" />{" "}
                proton@gmail.com
              </p>
            </div>
            <div className="flex space-x-4 text-[#005180]">
              <FaEnvelope size={15} />
              <IoCopyOutline size={15} />
              <MdOutlineShare size={15} />
              <CiCircleMinus size={15} />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center gap-4">
          <div className="flex items-center">
            <h4 className="font-semibold">Billing Address</h4>
            <IoPencilSharp
              className="ml-2 cursor-pointer text-gray-500"
              onClick={() => setIsEditingBilling(!isEditingBilling)}
            />
          </div>
          {isEditingBilling ? (
            <input
              type="text"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              className="border p-2 rounded w-full mt-2"
            />
          ) : (
            <p>{billingAddress}</p>
          )}

          <div className="flex items-center">
            <h4 className="font-semibold">Company Address</h4>
            <IoPencilSharp
              className="ml-2 cursor-pointer text-gray-500"
              onClick={() => setIsEditingCompany(!isEditingCompany)}
            />
          </div>
          {isEditingCompany ? (
            <input
              type="text"
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
              className="border p-2 rounded w-full mt-2"
            />
          ) : (
            <p>{companyAddress}</p>
          )}
        </div>
      </div>

      {/* Recent Bills Table using CustomTable */}
      <div className="mt-10 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Bills</h3>
        <CustomTable columns={columns} data={bills} />
        <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
        <CustomTable
          columns={paymentSummaryColumns}
          data={paymentSummaryData}
        />
        <h3 className="text-lg font-semibold mb-4">Debit Note Summary</h3>
        <CustomTable
          columns={debitNoteSummaryColumns}
          data={debitNoteSummaryData}
        />
      </div>
    </div>
  );
};

export default SupplierDetails;
