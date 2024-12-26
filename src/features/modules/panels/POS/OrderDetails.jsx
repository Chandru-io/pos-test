/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { MdEdit } from "react-icons/md";
import toast from "react-hot-toast";
import DineInPosPopup from "./popup/dineInPos/DineInPosPopup";
import DeliveryPartners from "./popup/DeleveryPartnerPOpup";
import InputSuggestionBox from "../../../components/InputSuggestionBox";
import CreateAndEditCustomer from "./popup/CreateAndEditCustomer";
import OrderCard from "./popup/OrderCard";
import Draftpopup from "./popup/DraftPopup";
import { useTranslation } from "react-i18next";

const SUGGESTIONS = [
  {
    id: 1,
    name: "John Doe",
    phone: "9876543210",
    email: "johndoe@example.com",
    dateOfBirth: "1990-01-15",
    dateOfAnniversary: "2015-06-25",
    discount: "10%",
    state: "Same State",
    gstNumber: "22AAAAA0000A1Z5",
    address: "123 Main Street, Cityville",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "8765432109",
    email: "janesmith@example.com",
    dateOfBirth: "1985-03-20",
    dateOfAnniversary: "2012-10-05",
    discount: "15%",
    state: "Different State",
    gstNumber: "33BBBBB1111B2Z6",
    address: "456 Oak Avenue, Townsville",
  },
  {
    id: 3,
    name: "Michael Johnson",
    phone: "7654321098",
    email: "michaelj@example.com",
    dateOfBirth: "1978-11-08",
    dateOfAnniversary: "2008-09-15",
    discount: "20%",
    state: "Same State",
    gstNumber: "44CCCCC2222C3Z7",
    address: "789 Pine Road, Villageville",
  },
  {
    id: 4,
    name: "Emily Davis",
    phone: "6543210987",
    email: "emilyd@example.com",
    dateOfBirth: "1995-07-04",
    dateOfAnniversary: "",
    discount: "5%",
    state: "Different State",
    gstNumber: "55DDDDD3333D4Z8",
    address: "101 Elm Street, Hamletown",
  },
  {
    id: 5,
    name: "Robert Brown",
    phone: "5432109876",
    email: "robertb@example.com",
    dateOfBirth: "1982-05-12",
    dateOfAnniversary: "2010-11-20",
    discount: "10%",
    state: "Same State",
    gstNumber: "66EEEEE4444E5Z9",
    address: "202 Maple Drive, Borough",
  },
];

const OrderDetails = ({ orders, setOrders, setRunningOrders }) => {
  const [orderType, setOrderType] = useState("Dine In / Table");
  const [waiter, setWaiter] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerList, setCustomList] = useState(SUGGESTIONS);
  const [isDineInOpen, setIsDineInOpen] = useState(false);
  const [isDeleveryOpen, setIsDeleveryOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [isDraftOpen, setIsDraftOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();
  const total = useMemo(() => {
    return orders?.reduce((acc, item) => {
      const itemTotal = item.amount * item.quantity;
      return acc + itemTotal;
    }, 0);
  }, [orders]);

  function handleUpdateOrder() {
    const errorMessages = [];

    if (!selectedCustomer) {
      errorMessages.push("Select the Customer");
    }

    if (!waiter) {
      errorMessages.push("Select the Waiter");
    }

    if (errorMessages.length > 0) {
      toast.error(errorMessages.join(" and "));
      return;
    }

    let newRunningOrder = {
      customerName: selectedCustomer.name,
      orderId: "ORD12345",
      orderType: "Dine-In",
      tableNo: Math.floor(Math.random() * 10) + 1,
      waiterName: "Alice",
      tokenNo: `T1${Math.floor(Math.random() * 30) + 1}`,
      ordersDetails: orders,
      waiter: waiter,
      customerDetails: selectedCustomer,
    };
    setRunningOrders((previous) => [newRunningOrder, ...previous]);
    setOrders([]);
    setSelectedCustomer(null);
    setWaiter("");
    setInputValue("");
  }

  function handleCancel() {
    setOrders([]);
  }

  const handleSuggestionSelect = (selectedSuggestion) => {
    setSelectedCustomer(selectedSuggestion);
  };

  return (
    <div className="flex justify-between flex-col h-full px-4 py-2 border-b border-l border-r">
      <div>
        <div className="flex items-center justify-center gap-x-8 mt-2">
          <div
            className={`flex items-center justify-center cursor-pointer border text-sm  border-gray-300 ${
              orderType === "Dine In / Table"
                ? "bg-[#3FB547] text-white"
                : "bg-[#E9FAF7] text-[#1A9882]"
            }  rounded-md p-2`}
            onClick={() => setIsDineInOpen(true)}
          >
            <span>{t("Dine In/Table")}</span>
          </div>

          <DineInPosPopup
            isOpen={isDineInOpen}
            onCloseModal={() => setIsDineInOpen(false)}
          />

          <div>
            <div
              className={`flex items-center justify-center cursor-pointer border text-sm  border-gray-300 ${
                orderType === "Delivery"
                  ? "bg-[#3FB547] text-white"
                  : "bg-[#E9FAF7] text-[#1A9882]"
              }  rounded-md p-2`}
              onClick={() => setIsDeleveryOpen(true)}
            >
              <span>{t("Panels.Delivery")}</span>
            </div>
          </div>

          <DeliveryPartners
            isOpen={isDeleveryOpen}
            onCloseModal={() => setIsDeleveryOpen(false)}
          />

          <div
            className={`flex items-center justify-center cursor-pointer border text-sm  border-gray-300 ${
              orderType === "Take Away"
                ? "bg-[#3FB547] text-white"
                : "bg-[#E9FAF7] text-[#1A9882]"
            }  rounded-md p-2`}
            onClick={() => setOrderType("Take Away")}
          >
            <span>{t("Panels.Take Away")}</span>
          </div>
        </div>
        <h3 className="text-lg text-[#064E79] mt-2 font-semibold px-2 ">
          {t("Panels.Order Details")}
        </h3>
        <hr className="my-3" />

        <div className="grid grid-cols-5 gap-x-5">
          <div className="relative col-span-3">
            <InputSuggestionBox
              suggestions={customerList}
              onSuggestionSelect={handleSuggestionSelect}
              placeholder={t("Panels.Enter Customer Name")}
              customStyle={
                "p-1.5 rounded-md border  border-opacity-50 text-sm focus:outline-green-500 w-full"
              }
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
            {selectedCustomer === null ? (
              ""
            ) : (
              <>
                <div>
                  <MdEdit className="absolute top-2 right-3 cursor-pointer" />
                </div>

                <CreateAndEditCustomer
                  isEdit={true}
                  customerList={customerList}
                  setCustomList={setCustomList}
                  editId={selectedCustomer.id}
                  initialValues={selectedCustomer}
                  setSelectedCustomer={setSelectedCustomer}
                />
              </>
            )}
          </div>

          <div className="col-span-2 col-start-4 text-center bg-[#C2F0CA] text-black rounded-md flex justify-center items-center cursor-pointer">
            <div>
              <span className="font-normal" onClick={() => setIsOpen(true)}>
                {t("Panels.Add Customer")}
              </span>
            </div>

            <CreateAndEditCustomer
              isEdit={false}
              customerList={customerList}
              setCustomList={setCustomList}
              setSelectedCustomer={setSelectedCustomer}
              isOpen={isopen}
              type="Add"
              onCloseModal={() => setIsOpen(false)}
            />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-x-5 mt-3">
          <div className="relative col-span-3">
            <select
              className="p-1.5 rounded-md border  border-opacity-50 text-sm focus:outline-green-500 w-full :text-[#777980]"
              value={waiter}
              onChange={(e) => setWaiter(e.target.value)}
            >
              <option value={""} disabled>
                {t("Panels.Select Waiter")}
              </option>
              <option value={"Waiter 1"}>Waiter 1</option>
              <option value={"Waiter 2"}>Waiter 2</option>
              <option value={"Waiter 3"}>Waiter 3</option>
              <option value={"Waiter 4"}>Waiter 4</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 mt-3 h-56 overflow-y-scroll hide-scrollbar">
          {orders?.map(({ id, name, amount, discount, quantity }) => (
            <OrderCard
              key={id}
              id={id}
              name={name}
              amount={amount}
              discount={discount}
              quantity={quantity}
              setOrders={setOrders}
            />
          ))}
        </div>

        <div className="border-b mt-2" />
      </div>

      <div>
        <div className="flex justify-center items-center">
          <div className="bg-white p-4 rounded-md  w-full max-w-sm">
            <div className="flex justify-between py-1">
              <span className="font-semibold">{t("Panels.Total Items")}:</span>
              <span>{orders?.length}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">{t("Panels.Sub Total")}:</span>
              <span>${total?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">{t("Panels.Discount")}:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">
                {t("Panels.Total Discount")}:
              </span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">{t("Panels.Tax")}:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">{t("Panels.Charges")}:</span>
              <span>0.00</span>
            </div>
          </div>
        </div>
        <p className="text-center p-2 rounded-md text-[#1A9882] font-semibold text-lg bg-[#E9FAF7]">
          {t("Panels.Total Payable")} : ${total?.toFixed(2)}
        </p>
        <div className="my-2 flex justify-center items-center gap-x-5">
          <p className="flex-1 p-2 text-center rounded-md border border-green-500 font-semibold text-[#3FB547] cursor-pointer">
            {t("Panels.Quick Invoice")}
          </p>

          <p
            className="flex-1 p-2 text-center rounded-md border border-gray-500 font-semibold text-[#BCBCBC] cursor-pointer"
            onClick={() => setIsDraftOpen(true)}
          >
            {t("Panels.Draft")}
          </p>

          <Draftpopup
            isOpen={isDraftOpen}
            onCloseModal={() => setIsDraftOpen(false)}
          />

          <p
            className="flex-1 p-2 text-center rounded-md border  text-[#F56B3F] bg-[#FFF0EA] border-[#F56B3F] font-semibold  cursor-pointer"
            onClick={handleCancel}
          >
            {t("Panels.Cancel")}
          </p>
        </div>

        <p
          className="text-center p-2 rounded-md text-white font-semibold text-lg bg-[#3FB547] cursor-pointer "
          onClick={handleUpdateOrder}
        >
          {t("Panels.Update Order")}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
