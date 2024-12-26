const CustomerDisplay = () => {
  const items = [
    {
      name: "Tangy Noodles",
      price: "$8.00",
      quantity: 1,
      discount: "0.00",
      subtotal: "$8.00",
    },
  ];

  return (
    <div className="  flex items-center justify-center  ">
      <div className="bg-white w-2/3 container mx-auto rounded-lg ">
        <h1 className="text-center text-xl font-semibold text-blue-600 mb-6">
          Customer Display
        </h1>
        <table className="w-full border-collapse border rounded-lg">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="px-4 py-2 border">Items</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Discount</th>
              <th className="px-4 py-2 border">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.price}</td>
                <td className="px-4 py-2 border">{item.quantity}</td>
                <td className="px-4 py-2 border">{item.discount}</td>
                <td className="px-4 py-2 border">{item.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6">
          <div className="text-sm">
            <div className="flex justify-between">
              <span>Token Number:</span>
              <span>25</span>
            </div>
            <div className="flex justify-between">
              <span>Total Items:</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span>Sub Total:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Total Discount:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Charges:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tips:</span>
              <span>0.00</span>
            </div>
          </div>
          <div className="mt-4 text-center bg-green-100 text-green-700 font-semibold py-2 rounded-md">
            Total Payable: $8.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDisplay;
