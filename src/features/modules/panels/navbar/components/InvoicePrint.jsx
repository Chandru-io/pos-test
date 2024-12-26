import { QRCodeCanvas } from "qrcode.react";

const InvoiceComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white  rounded-lg w-[800px] p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center">
            {/* <img src={logo} alt="logo" className="h-28" /> */}
          </div>
          <p className="text-sm">
            Address: House No 5, Road No 4, Nikunja 2, Khilkhet, Dhaka
          </p>
          <p className="text-sm">Phone: +8801812312345</p>
          <p className="text-sm">Invoice No: 12323444</p>
        </div>

        {/* Order Type */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-gray-700">
            Order Type: Dine In
          </h2>
        </div>

        {/* Invoice Details */}
        <div className="text-sm mb-4">
          <p>
            <strong>Date:</strong> 23/05/2024
          </p>
          <p>
            <strong>Time:</strong> 5:30 PM
          </p>
          <p>
            <strong>Sales Associate:</strong> Admin User
          </p>
          <p>
            <strong>Customer:</strong> Donald PB 432268663
          </p>
          <p>
            <strong>Customer Address:</strong> Street 992 United States
          </p>
          <p>
            <strong>Waiter:</strong> Ds Waiter
          </p>
        </div>

        {/* Invoice Table */}
        <table className="w-full text-sm text-left border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Serial No.</th>
              <th className="border border-gray-300 px-4 py-2">
                Item Description
              </th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item}>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  All Mix Salad
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  4
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  $4.90
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Section */}
        <div className="mt-4 text-sm">
          <p>
            <strong>Total Items:</strong> 12
          </p>
          <p>
            <strong>Sub Total:</strong> $14.70
          </p>
          <p>
            <strong>VAT:</strong> $0.30
          </p>
          <p>
            <strong>Grand Total:</strong> $15.00
          </p>
          <p>
            <strong>Paid Amount:</strong> $15.00
          </p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center my-6">
          <QRCodeCanvas value="https://example.com/paid" size={128} />
        </div>

        {/* Footer */}
        <div className="text-center text-sm">
          <p>
            <strong>**Paid Ticket**</strong>
          </p>
          <p>Thank you for visiting us!</p>
        </div>

        {/* Print Button */}
        <div className="flex justify-center mt-4">
          <button className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-500">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
