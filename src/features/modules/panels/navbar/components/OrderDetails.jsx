import FooterButtons from "./FooterButtons";

const OrderDetail = () => {
  return (
    <div className="w-full max-w-lg">
      <h2 className="text-lg font-semibold text-blue-700">Order Details</h2>

      <div className="flex border rounded-md">
        <div className="bg-white rounded-md px-6 py-4 w-full">
          {/* Order Information Section */}
          <div className="space-y-2 text-sm text-gray-700">
            {[
              { label: "Order Type", value: "" },
              { label: "Waiter", value: "" },
              { label: "Customer", value: "" },
              { label: "Table", value: "" },
              { label: "Order Number", value: "" },
              { label: "Token Number", value: "" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-semibold">{item.label} :</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Items Table */}
          <div className="mt-6">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-green-500 text-white">
                  {["Items", "Quantity", "Price", "Discount", "Total"].map(
                    (header, index) => (
                      <th key={index} className="px-2 py-1 text-center">
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center text-gray-400 py-2">
                    No items available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            {[
              { label: "Total Items", value: "0" },
              { label: "Sub Total", value: "0.00" },
              { label: "Discount", value: "0.00" },
              { label: "Total Discounts", value: "0.00" },
              { label: "Tax", value: "0.00" },
              { label: "Charges", value: "0.00" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-semibold">{item.label} :</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Total Payable Section */}
          <div className="mt-6 text-center font-semibold text-lg text-green-600 p-2 rounded-md bg-[#E9FAF7]">
            Total Payable: 0.00
          </div>

          {/* Footer Buttons */}
          <div className="mt-4">
            <FooterButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
