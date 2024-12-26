/* eslint-disable react/prop-types */

const RegisterReport = () => {
  return (
    <div className=" p-2  flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl rounded-lg  ">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4 relative">
          <h2 className="text-xl font-semibold">Register</h2>
        </div>
        {/* User Info */}
        <div className="mb-6">
          <p>
            <span className="font-semibold">User:</span> Admin User
          </p>
          <p>
            <span className="font-semibold">Time Range:</span> 21-05-2023 01:05
            : 53 PM to 21-05-2024 11:45 : 55 AM
          </p>
        </div>
        {/* Action Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300">
            Print
          </button>
          <button className="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300">
            Excel
          </button>
          <button className="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300">
            CSV
          </button>
          <button className="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300">
            PDF
          </button>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border">
            {/* Table Header */}
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left border">Serial No.</th>
                <th className="px-4 py-2 text-left border">Payment Method</th>
                <th className="px-4 py-2 text-left border">Transactions</th>
                <th className="px-4 py-2 text-left border">Amount</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {/* First Row */}
              <tr>
                <td className="px-4 py-2 border text-gray-600">1</td>
                <td className="px-4 py-2 border text-gray-600">Cash</td>
                <td className="px-4 py-2 border">
                  <div className="flex flex-col space-y-1 text-sm">
                    <span className="text-green-600">Opening Balance(+)</span>
                    <span className="text-red-600">Purchase(-)</span>
                    <span className="text-green-600">Sales(+)</span>
                    <span className="text-green-600">Due Received(+)</span>
                    <span className="text-red-600">Due Payment(-)</span>
                    <span className="text-red-600">Expense(-)</span>
                    <span className="text-green-600">Refund Amount(+)</span>
                  </div>
                </td>
                <td className="px-4 py-2 border text-right text-gray-600">
                  <div className="flex flex-col space-y-1">
                    <span>4,544.00</span>
                    <span>2,582.00</span>
                    <span>311.32</span>
                    <span>0.00</span>
                    <span>300.00</span>
                    <span>0.00</span>
                    <span>8.00</span>
                  </div>
                  <p className="mt-2 text-black font-bold">1981.32</p>
                </td>
              </tr>
              {/* Second Row */}
              <tr>
                <td className="px-4 py-2 border text-gray-600">2</td>
                <td className="px-4 py-2 border text-gray-600">Credit Card</td>
                <td className="px-4 py-2 border">
                  <div className="flex flex-col space-y-1 text-sm">
                    <span className="text-green-600">Opening Balance(+)</span>
                    <span className="text-red-600">Purchase(-)</span>
                    <span className="text-green-600">Sales(+)</span>
                    <span className="text-green-600">Due Received(+)</span>
                    <span className="text-red-600">Due Payment(-)</span>
                    <span className="text-red-600">Expense(-)</span>
                    <span className="text-green-600">Refund Amount(+)</span>
                  </div>
                </td>
                <td className="px-4 py-2 border text-right text-gray-600">
                  <div className="flex flex-col space-y-1">
                    <span>4,544.00</span>
                    <span>2,582.00</span>
                    <span>311.32</span>
                    <span>0.00</span>
                    <span>300.00</span>
                    <span>0.00</span>
                    <span>8.00</span>
                  </div>
                  <p className="mt-2 text-black font-bold">1981.32</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisterReport;
