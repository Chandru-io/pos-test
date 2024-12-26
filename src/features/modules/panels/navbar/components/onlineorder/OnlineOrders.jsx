/* eslint-disable react/prop-types */
import { useState } from "react";
import TabSwitcher from "./TableSwitcher";
import OrderListTable from "../OrderDetailsTable";
import RecentSalesButtons from "../reservavationlist/RecentSaleButtons";
import FooterButtons from "../FooterButtons";

const OnlineOrders = () => {
  const [activeTab, setActiveTab] = useState("self");
  const [selectedOrder, setSelectedOrder] = useState(null);
  return (
    <div>
      <div className=" bg-white rounded-lg  relative">
        <h2 className="text-lg font-semibold">
          {activeTab === "self" ? "Self Orders " : "Online Orders"}{" "}
        </h2>

        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex  mt-4 gap-x-3">
          <OrderListTable
            activeTab={activeTab}
            setSelectedOrder={setSelectedOrder}
          />

          <div className="flex flex-col items-start ">
            <h2 className="text-lg font-semibold text-blue-700">
              Order Details
            </h2>
            <div className="flex  border rounded-md ">
              <div className="bg-white rounded-md px-6 py-1 w-full">
                <div className="mt-4 space-y-1 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold">Order Type :</span>{" "}
                    <span></span>
                  </div>
                  <div>
                    <span className="font-semibold">Waiter :</span>{" "}
                    <span></span>
                  </div>
                  <div>
                    <span className="font-semibold">Customer :</span>{" "}
                    <span></span>
                  </div>
                  <div>
                    <span className="font-semibold">Table :</span> <span></span>
                  </div>
                  <div>
                    <span className="font-semibold">Order Number :</span>{" "}
                    <span></span>
                  </div>
                  <div>
                    <span className="font-semibold">Token Number :</span>{" "}
                    <span></span>
                  </div>
                </div>

                <div className="mt-6">
                  <table className="w-full border border-green-500 text-sm">
                    <thead>
                      <tr className="bg-green-500 text-white">
                        <th className="px-2 py-1 text-left">Items</th>
                        <th className="px-2 py-1 text-center">Quantity</th>
                        <th className="px-2 py-1 text-center">Price</th>
                        <th className="px-2 py-1 text-center">Discount</th>
                        <th className="px-2 py-1 text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center text-gray-400 py-2"
                        >
                          No items available
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 space-y-1 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold">Total Items :</span>{" "}
                    <span>0</span>
                  </div>
                  <div>
                    <span className="font-semibold">Sub Total :</span>{" "}
                    <span>0.00</span>
                  </div>
                  <div>
                    <span className="font-semibold">Discount :</span>{" "}
                    <span>0.00</span>
                  </div>
                  <div>
                    <span className="font-semibold">Total Discounts :</span>{" "}
                    <span>0.00</span>
                  </div>
                  <div>
                    <span className="font-semibold">Tax :</span>{" "}
                    <span>0.00</span>
                  </div>
                  <div>
                    <span className="font-semibold">Charges :</span>{" "}
                    <span>0.00</span>
                  </div>
                </div>

                <div className="mt-4 text-center font-semibold text-lg text-green-600 p-2 rounded-md bg-[#E9FAF7]">
                  Total Payable : 0.00
                </div>
                {activeTab === "Draft" ? (
                  <RecentSalesButtons activeTab={activeTab} />
                ) : (
                  <FooterButtons activeTab={activeTab} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrders;
