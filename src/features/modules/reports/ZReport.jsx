import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
];

const salesSummary = [
  { description: "Total Food Sales (Without Tax)", amount: 422.5 },
  { description: "Total Sale Return (-)", amount: 0.0 },
  { description: "Total Modifier Sales (Without Tax) (+)", amount: 79.4 },
  { description: "Delivery Charge (+)", amount: 0.0 },
  { description: "Service Charge (+)", amount: 0.0 },
  { description: "VAT (Tax)", amount: 64.83 },
  { description: "CGST (Tax)", amount: 18.16 },
  { description: "SGST (Tax)", amount: 18.16 },
  { description: "IGST (Tax)", amount: 14.47 },
  { description: "Customer Due Receive (+)", amount: 0.0 },
  { description: "Discount (-)", amount: 7.7 },
];
const paymentMethod = [
  { description: "Cash", amount: 422.5 },
  { description: "Credit Card", amount: 25001.0 },
];

const foodMenu = [
  { item: "e triple", quantity: 5.0, amount: 45.0 },
  { item: "Combo Offer", quantity: 5.0, amount: 200.0 },
  { item: "Shrimp Toast", quantity: 3.0, amount: 27.0 },
  { item: "Black Pepper Beef", quantity: 2.0, amount: 16.0 },
  { item: "Wonton Soup", quantity: 2.0, amount: 8.0 },
  { item: "Crispy Taco Rice", quantity: 2.0, amount: 18.0 },
  { item: "Fish And Chips", quantity: 2.0, amount: 14.0 },
  { item: "Coca cola 400ml", quantity: 2.0, amount: 4.0 },
  {
    item: "Garlic Chive Shrimp Fried Rice With Garlic Chips",
    quantity: 2.0,
    amount: 8.0,
  },
  { item: "Better Chocolate Chip Cookies", quantity: 2.0, amount: 4.0 },
  { item: "Whisky", quantity: 2.0, amount: 6.0 },
  { item: "Tuna Sashimi Pizza", quantity: 1.0, amount: 6.5 },
  { item: "e double shot", quantity: 1.0, amount: 6.0 },
  { item: "2:1 Lunch Combo Package", quantity: 1.0, amount: 35.0 },
  { item: "B Medium", quantity: 1.0, amount: 22.0 },
  { item: "Parsley Pasta", quantity: 1.0, amount: 3.0 },
];

const modifier = [
  { item: "e triple", quantity: 5.0, amount: 45.0 },
  { item: "Combo Offer", quantity: 5.0, amount: 200.0 },
  { item: "Shrimp Toast", quantity: 3.0, amount: 27.0 },
  { item: "Black Pepper Beef", quantity: 2.0, amount: 16.0 },
  { item: "Wonton Soup", quantity: 2.0, amount: 8.0 },
  { item: "Crispy Taco Rice", quantity: 2.0, amount: 18.0 },
  { item: "Fish And Chips", quantity: 2.0, amount: 14.0 },
  { item: "Coca cola 400ml", quantity: 2.0, amount: 4.0 },
];

const TotalHand = [
  {
    method: "Cash",
    transactions: [
      { type: "Sale (+)", amount: 38.2 },
      { type: "Refund Sale (-)", amount: 0.0 },
      { type: "Purchase (-)", amount: 0.0 },
      { type: "Due Receive (+)", amount: 0.0 },
      { type: "Due Payment (-)", amount: 0.0 },
      { type: "Expense (-)", amount: 0.0 },
      { type: "Balance", amount: 0.0 },
    ],
  },
  {
    method: "Credit Card",
    transactions: [
      { type: "Sale (+)", amount: 0.0 },
      { type: "Refund Sale (-)", amount: 0.0 },
      { type: "Purchase (-)", amount: 0.0 },
      { type: "Due Receive (+)", amount: 0.0 },
      { type: "Due Payment (-)", amount: 0.0 },
      { type: "Expense (-)", amount: 0.0 },
      { type: "Balance", amount: 0.0 },
    ],
  },
  {
    method: "Check",
    transactions: [
      { type: "Sale (+)", amount: 0.0 },
      { type: "Refund Sale (-)", amount: 0.0 },
      { type: "Purchase (-)", amount: 0.0 },
      { type: "Due Receive (+)", amount: 0.0 },
      { type: "Due Payment (-)", amount: 0.0 },
      { type: "Expense (-)", amount: 0.0 },
      { type: "Balance", amount: 0.0 },
    ],
  },
  {
    method: "Bank Transfer",
    transactions: [
      { type: "Sale (+)", amount: 0.0 },
      { type: "Refund Sale (-)", amount: 0.0 },
      { type: "Purchase (-)", amount: 0.0 },
      { type: "Due Receive (+)", amount: 0.0 },
      { type: "Due Payment (-)", amount: 0.0 },
      { type: "Expense (-)", amount: 0.0 },
      { type: "Balance", amount: 0.0 },
    ],
  },
];

const ZReport = () => {
  const [filterData, setFilterData] = useState({});
  const [salesandTaxesSummaryData, setSalesandTaxesSummaryData] =
    useState(salesSummary);
  const [paymentMethodData, setPaymentMethodData] = useState(paymentMethod);
  const [foodMenuData, setFoodMenuData] = useState(foodMenu);
  const [modifierData, setModifierData] = useState(modifier);
  const [totalHandData, setTotalHandData] = useState(TotalHand);

  // Calculate total for sales and tax
  const totalAmount = salesandTaxesSummaryData.reduce(
    (acc, row) => acc + row.amount,
    0
  );
  // Calculate total for Food menu
  const FoodMenuTotal = salesandTaxesSummaryData.reduce(
    (acc, row) => acc + row.amount,
    0
  );
  //   calculate modifier total
  const modifierTotal = modifierData.reduce((acc, row) => acc + row.amount, 0);

  //   calculate in hand summary
  const inHandSummary = totalHandData.map((payment) => ({
    method: payment.method,
    total: payment.transactions.reduce((acc, trans) => acc + trans.amount, 0),
  }));
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Z-Report </p>
      </div>
      {/* Filter Section */}
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>

      {/* Search and Download Section */}
      <div className="px-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between md:items-center">
        <SearchComponent />
        <DownloadComponent />
      </div>

      {/* Table Section */}
      <div>
        <p className="font-bold p-2 rounded bg-primary text-white">
          Sales And Tax Summary
        </p>

        <table
          className="w-full border border-collapse"
          style={{ borderCollapse: "collapse" }}
        >
          <tbody>
            {salesandTaxesSummaryData
              .filter((row) => row.description)
              .map((row, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{row.description}</td>
                  <td className="border p-2 text-right">
                    {row.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            <tr>
              <td className="border p-2 font-bold">Total Amount</td>
              <td className="border p-2 font-bold text-right">
                {totalAmount.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className="font-bold p-2 rounded ">
          Payment Method Wise Breakdown(Paid Amount)
        </p>

        <table
          className="w-full border border-collapse"
          style={{ borderCollapse: "collapse" }}
        >
          <tbody>
            {paymentMethodData
              .filter((row) => row.description)
              .map((row, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{row.description}</td>
                  <td className="border p-2 text-right">
                    {row.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <p className="font-bold p-2 rounded ">Sales And Tax Summary</p>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-left">Food Menu</th>
              <th className="border p-2 text-center">Quantity</th>
              <th className="border p-2 text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {foodMenuData.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{item.item}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-right">
                  {item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="font-bold border p-2">Total Amount</td>
              <td className="border p-2 text-center">-</td>
              <td className="font-bold border p-2 text-right">
                {FoodMenuTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className="font-bold p-2 rounded ">Modifire Wise Sale</p>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-left">Modifier</th>
              <th className="border p-2 text-center">Quantity</th>
              <th className="border p-2 text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {modifierData.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{item.item}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-right">
                  {item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="font-bold border p-2">Total Amount</td>
              <td className="border p-2 text-center">-</td>
              <td className="font-bold border p-2 text-right">
                {modifierTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className="font-bold p-2 rounded ">Total In Hand</p>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-primary text-sm text-white">
              <th className="p-2 text-center">Payment Method</th>
              <th className="p-2 text-left">Transaction</th>
              <th className="p-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {totalHandData.map((payment, index) =>
              payment.transactions.map((trans, transIndex) => (
                <tr key={`${index}-${transIndex}`} className="border">
                  {/* Add rowspan for the first column */}
                  {transIndex === 0 && (
                    <td
                      className="p-2 text-center align-middle"
                      rowSpan={payment.transactions.length}
                    >
                      {payment.method}
                    </td>
                  )}
                  <td className="p-2 text-left">{trans.type}</td>
                  <td className="p-2 text-right">{trans.amount.toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* In Hand Summary */}
        <h3 className="font-bold mb-2">In Hand Summary</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-center">Payment Method</th>
              <th className="border p-2 text-right">Total (AED)</th>
            </tr>
          </thead>
          <tbody>
            {inHandSummary.map((summary, index) => (
              <tr key={index} className="border">
                <td className="border p-2 text-center">{summary.method}</td>
                <td className="border p-2 text-right">
                  {summary.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p className="font-bold p-2 rounded ">Expense</p>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-left">Modifier</th>
              <th className="border p-2 text-center">Quantity</th>
              <th className="border p-2 text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {modifierData.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{item.item}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-right">
                  {item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="font-bold border p-2">Total Amount</td>
              <td className="border p-2 text-center">-</td>
              <td className="font-bold border p-2 text-right">
                {modifierTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className="font-bold p-2 rounded ">Supplier Payment</p>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-left">Modifier</th>
              <th className="border p-2 text-center">Quantity</th>
              <th className="border p-2 text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {modifierData.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{item.item}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-right">
                  {item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="font-bold border p-2">Total Amount</td>
              <td className="border p-2 text-center">-</td>
              <td className="font-bold border p-2 text-right">
                {modifierTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className="font-bold p-2 rounded ">Customer Due Receives</p>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border p-2 text-left">Modifier</th>
              <th className="border p-2 text-center">Quantity</th>
              <th className="border p-2 text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {modifierData.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{item.item}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-right">
                  {item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="font-bold border p-2">Total Amount</td>
              <td className="border p-2 text-center">-</td>
              <td className="font-bold border p-2 text-right">
                {modifierTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ZReport;
