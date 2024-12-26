/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

import KitchenOrderTicket from "./popup/KOTPrint";
import Invoice from "./popup/InvoicePopup";

import CancelOrderModal from "./popup/CancelOrder";
import OrderDetails from "./popup/OrderDetails";
import BillPopup from "./popup/BillPopup";
import { useTranslation } from "react-i18next";

function OrderCard({
  customerName,
  orderId,
  orderType,
  tableNo,
  waiterName,
  tokenNo,
  selectedOrders,
  toggleOrderSelection,
}) {
  const { t } = useTranslation();
  return (
    <div
      className={`p-2 rounded-md cursor-pointer border relative ${
        selectedOrders[0] === orderId
          ? "border-[#3FB547] bg-[#C4EEC6]"
          : "bg-white border-none"
      } text-black`}
      onClick={() => toggleOrderSelection(orderId)}
    >
      <div>
        <input type="checkbox" className="rounded-md" />
      </div>
      <div className="inline-flex items-center gap-x-1 p-1  my-4 absolute -top-3 right-4">
        <GoDotFill className="text-red-500" />
        <span className="text-red-500 text-sm font-bold">
          {t("Panels.Waiting")}
        </span>
      </div>
      <h3 className="text-lg font-semibold">
        {t("Panels.Customer")} :{" "}
        <span className="text-[#3FB547]">{customerName}</span>
      </h3>
      <div className="grid grid-cols-1">
        <div className="flex justify-between">
          <span>
            {t("Panels.Order ID ")}: {orderId}
          </span>
          <span>
            {t("Panels.Order Type")} : {orderType}
          </span>
        </div>
        <div className="flex justify-between">
          <span>
            {t("Panels.Table")} : {tableNo}
          </span>
          <span>
            {t("Panels.Waiter")} : {waiterName}
          </span>
        </div>
        <div className="flex justify-between">
          <span>
            {t("Panels.Token No")} : {tokenNo}
          </span>
        </div>
      </div>
    </div>
  );
}

const RunningOrders = ({ runningOrders, setRunningOrders, setOrders }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCancelOrderOpen, setIsCancelOrderOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isBillOpen, setIsBillOpen] = useState(false);
  const [isKOTeOpen, setIsKOTOpen] = useState(false);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders([orderId]);
  };

  function handleModifyOrder() {
    console.log(runningOrders[selectedOrders]);
    setOrders([runningOrders?.[selectedOrders]]);
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 mt-1">
          <input
            placeholder={t("Panels.Table,Order Number,Waiter")}
            className="p-2 rounded-md text-[#777980] bg-white border pl-3 focus:outline-green-500 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between px-3">
          <h3 className="text-lg text-[#064E79] font-semibold px-2 my-2">
            {t("Panels.Running Details")}
          </h3>
          {/* <img src={Sync} alt="Sync" /> */}
        </div>

        <div
          className="flex flex-col gap-y-3 h-[25vw]
         overflow-y-scroll hide-scrollbar p-2"
        >
          {runningOrders.map((order, i) => (
            <OrderCard
              key={i}
              customerName={order.customerName}
              orderId={i}
              orderType={order.orderType}
              tableNo={order.tableNo}
              waiterName={order.waiterName}
              tokenNo={order.tokenNo}
              selectedOrders={selectedOrders}
              toggleOrderSelection={toggleOrderSelection}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-1">
        <button
          className={`flex-1 p-2 text-center rounded-md border border-green-500 font-semibold text-[#3FB547] bg-[#E9FAF7]  ${
            selectedOrders.length > 0 ? " cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={handleModifyOrder}
          disabled={!selectedOrders.length > 0}
        >
          {t("Panels.Modify Order")}
        </button>

        <button
          className={`flex-1 p-2 text-center rounded-md border border-green-500 font-semibold text-[#3FB547] bg-[#E9FAF7]  ${
            selectedOrders.length > 0 ? " cursor-pointer" : "cursor-not-allowed"
          }`}
          disabled={!selectedOrders.length > 0}
          onClick={() => setIsOrderDetailsOpen(false)}
        >
          {t("Panels.Order Details")}
        </button>

        <OrderDetails
          isOpen={isOrderDetailsOpen}
          onClose={() => setIsOrderDetailsOpen(false)}
        />

        <button
          className={`flex-1 p-2 text-center rounded-md border border-green-500 font-semibold text-[#3FB547] bg-[#E9FAF7]  ${
            selectedOrders.length > 0 ? " cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() => setIsKOTOpen(true)}
        >
          {t("Panels.Reprint KOT")}
        </button>

        <KitchenOrderTicket
          isOpen={isKOTeOpen}
          onClose={() => setIsKOTOpen(false)}
        />

        <div className="flex items-center gap-x-1">
          <button
            className={`flex-1 p-2 text-center rounded-md border border-green-500 font-semibold text-[#3FB547] bg-[#E9FAF7]  ${
              selectedOrders.length > 0
                ? " cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={() => setIsInvoiceOpen(true)}
          >
            {t("Panels.Invoice")}
          </button>

          <Invoice
            isOpen={isInvoiceOpen}
            onClose={() => setIsInvoiceOpen(false)}
          />

          <button
            className={`flex-1 p-2 text-center rounded-md border border-green-500 font-semibold text-[#3FB547] bg-[#E9FAF7]  ${
              selectedOrders.length > 0
                ? " cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={() => setIsBillOpen(true)}
          >
            {t("Panels.Bill")}
          </button>

          <BillPopup
            isOpen={isBillOpen}
            onCloseModal={() => setIsBillOpen(false)}
          />
        </div>

        <button
          className={`flex-1 p-2 text-center rounded-md border border-[#F56B3F] font-semibold text-[#3FB547] bg-[#E9FAF7]  ${
            selectedOrders.length > 0 ? " cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          <span
            className="text-[#F56B3F]  border-[#F56B3F] mb-2"
            onClick={() => setIsCancelOrderOpen(true)}
          >
            {" "}
            {t("Panels.Cancel Order")}
          </span>

          <CancelOrderModal
            setRunningOrders={setRunningOrders}
            isOpen={isCancelOrderOpen}
            onCloseModal={() => setIsCancelOrderOpen(false)}
          />
        </button>
      </div>
    </div>
  );
};

export default RunningOrders;
