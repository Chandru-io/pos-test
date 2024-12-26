/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import AlertPopup from "./popup/AlartPopup";

function CardHeader({ orderStatus, table_no, order_Type }) {
  const [orderTime, setOrderTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOrderTime((prevTime) => prevTime + 5);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div
      className={`${
        orderStatus === "Not Ready"
          ? "bg-[#616E80]"
          : orderStatus === "Ready"
          ? "bg-[#3FB547]"
          : orderStatus === "Preparation"
          ? "bg-[#064E79]"
          : ""
      } px-8 py-4 rounded-t-lg flex justify-between items-center`}
    >
      <div className="bg-transparent">
        <h4 className="text-white text-xl">Token #{table_no}</h4>
        <p className="text-white">Table: {table_no}</p>
        <p className="text-white">Order Type: {order_Type}</p>
      </div>
      <div className="bg-white rounded-md p-2">
        <h5 className="text-center text-black text-lg font-semibold">
          {formatTime(orderTime)}
        </h5>
      </div>
    </div>
  );
}

function CardBody({
  cardItemData,
  setSelectedItem,
  selectedItem,
  setInitialData,
}) {
  function handleClick(id) {
    setSelectedItem((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  useEffect(() => {
    const ids = cardItemData
      .map(({ item_id, orderStatus }) => {
        if (orderStatus === "Ready") {
          return item_id;
        }
        return null;
      })
      .filter((id) => id !== null);

    setTimeout(() => {
      setInitialData((prev) => {
        const orderItems = Array.isArray(prev.order_Items)
          ? prev.order_Items
          : [];
        const updatedOrderItems = orderItems.filter(
          (item) => !ids.includes(item.item_id)
        );
        return {
          ...prev,
          order_Items: updatedOrderItems,
        };
      });
    }, 3000);
  }, [cardItemData]);

  return (
    <div className="flex-1 max-h-72 overflow-y-scroll cursor-pointer">
      {cardItemData.map(
        ({ item_id, item_Name, item_Des, qty, orderStatus }) => {
          const isActive = selectedItem.includes(item_id);

          if (orderStatus !== "Ready")
            return (
              <div
                className={`${
                  isActive ? "bg-slate-200" : ""
                } flex justify-between  items-start py-3 px-5 border-b-2 pb-2 hover:bg-slate-200 duration-200`}
                key={item_id}
                onClick={() => handleClick(item_id)}
              >
                <div>
                  <h3 className="text-black text-lg font-semibold">
                    {item_Name}
                  </h3>
                  <h4 className="text-gray-400 text-sm break-words">
                    {item_Des}
                  </h4>
                  <h5 className="text-gray-400 font-semibold text-sm">{qty}</h5>
                </div>
                <div>
                  <div
                    className={`flex items-center justify-start py-1 px-2 rounded-xl ${
                      orderStatus === "Ready"
                        ? "bg-[#28FF284D]"
                        : orderStatus === "Not Ready"
                        ? "bg-[#FFA4874D]"
                        : orderStatus === "Preparation"
                        ? "bg-[#B8F9F94D]"
                        : ""
                    }`}
                  >
                    <GoDotFill
                      className={`${
                        orderStatus === "Ready"
                          ? "text-[#008000]"
                          : orderStatus === "Not Ready"
                          ? "text-[#BB0C26]"
                          : orderStatus === "Preparation"
                          ? "text-[#00959E]"
                          : ""
                      } text-lg`}
                    />
                    <span className="font-thin text-sm whitespace-nowrap">
                      {orderStatus}
                    </span>
                  </div>
                </div>
              </div>
            );
          else {
            return (
              <div
                className={`${
                  isActive ? "bg-slate-200" : ""
                } flex justify-between  items-start py-3 px-5 border-b-2 pb-2 hover:bg-slate-200 duration-200`}
                key={item_id}
                onClick={() => handleClick(item_id)}
              >
                <div>
                  <h3 className="text-black text-lg font-semibold">
                    {item_Name}
                  </h3>
                  <h4 className="text-gray-400 text-sm break-words">
                    {item_Des}
                  </h4>
                  <h5 className="text-gray-400 font-semibold text-sm">{qty}</h5>
                </div>
                <div>
                  <div
                    className={`flex items-center justify-start py-1 px-2 rounded-xlbg-[#28FF284D]`}
                  >
                    <GoDotFill className={`text-[#008000] text-lg`} />
                    <span className="font-thin text-sm whitespace-nowrap">
                      {orderStatus}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        }
      )}
    </div>
  );
}

function CardAction({
  selectedItem,
  setSelectedItem,
  cardItemData,
  setInitialData,
}) {
  function selectAll() {
    const allItemId = cardItemData.map((item) => item.item_id);
    setSelectedItem(allItemId);
  }

  function unSelectAll() {
    setSelectedItem([]);
  }
  const [isCookModalOpen, setIsCookModelOpen] = useState(false);
  const [isCookDoneModelOpen, setIsCookDoneModalOpen] = useState(false);

  function handleCook() {
    setIsCookModelOpen(true);
    if (selectedItem.length !== 0) {
      setInitialData((prev) => {
        const updatedOrderItems = prev.order_Items.map((item) => {
          if (selectedItem.includes(item.item_id)) {
            const newStatus =
              item.orderStatus === "Not Ready"
                ? "Preparation"
                : item.orderStatus;

            return { ...item, orderStatus: newStatus };
          }
          return item;
        });

        return { ...prev, order_Items: updatedOrderItems };
      });
    }
  }

  function handleDone() {
    setIsCookDoneModalOpen(true);
    if (selectedItem.length !== 0) {
      setInitialData((prev) => {
        const updatedOrderItems = prev.order_Items.map((item) => {
          if (selectedItem.includes(item.item_id)) {
            const newStatus =
              item.orderStatus === "Preparation" ? "Ready" : item.orderStatus;

            return { ...item, orderStatus: newStatus };
          }
          return item;
        });

        return { ...prev, order_Items: updatedOrderItems };
      });
    }
  }

  return (
    <div className="p-4 flex justify-between gap-2 border-t">
      <div className="flex items-center gap-2">
        <Button action_name="Unselect All" onClick={unSelectAll} />
        <Button action_name="Select All" onClick={selectAll} />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <Button action_name="Cook" onClick={handleCook} />
        </div>

        <AlertPopup
          message={"Cooking Started !"}
          isOpen={isCookModalOpen}
          onCloseModal={() => setIsCookModelOpen(false)}
        />

        <div>
          <Button action_name="Done" disable={false} onClick={handleDone} />
        </div>

        <AlertPopup
          message={"Cooking Done !"}
          isOpen={isCookDoneModelOpen}
          onCloseModal={() => setIsCookDoneModalOpen(false)}
        />
      </div>
    </div>
  );
}

function Button({ action_name, disable, onClick }) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      className={`p-2 border rounded-md  text-center text-sm whitespace-nowrap bg-white text-black ${
        disable && disable ? "cursor-not-allowed" : "cursor-pointer"
      } `}
      onClick={handleClick}
      disabled={disable}
    >
      {action_name}
    </button>
  );
}

const KitchenCard = ({ data = [] }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [initialData, setInitialData] = useState(data);

  useEffect(() => {
    if (initialData.length === 0) return;

    const status = initialData.order_Items.map((item) => item.orderStatus);

    const currentStatus = status.every(
      (currentValue) => currentValue === "Ready"
    );

    if (currentStatus) {
      setInitialData((prev) => ({
        ...prev,
        orderStatus: "Ready",
        order_Items: prev.order_Items.map((item) => ({
          ...item,
          orderStatus: "Ready",
        })),
      }));
    }

    // if (currentStatus) setInitialData([]);

    // if (currentStatus) {
    //   const timer = setTimeout(() => {
    //     setInitialData([]);
    //   }, 300);

    //   return () => clearTimeout(timer);
    // }
  }, [initialData.order_Items, initialData.length]);

  if (initialData.length === 0) return;

  return (
    <div className="flex flex-col border-gray-300 rounded-lg border">
      <CardHeader
        orderStatus={initialData.orderStatus}
        order_time={initialData.order_time}
        table_no={initialData.table_no}
        order_Type={initialData.order_Type}
      />

      <CardBody
        cardItemData={initialData.order_Items}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        setInitialData={setInitialData}
      />

      <CardAction
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        cardItemData={initialData.order_Items}
        setInitialData={setInitialData}
      />
    </div>
  );
};

export default KitchenCard;
