/* eslint-disable react/prop-types */
import { HiOutlineRefresh } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import React from "react";
import NotificationModal from "./popup/Notification";
import HelpPopup from "./popup/HelpPopup";
import Modal from "../../POS/components/Modal";
import KitchenCard from "./KitchenCard";

const KitchenPanel = () => {
  const data = [
    {
      id: "OR1",
      order_time: "12:00",
      orderStatus: "Not Ready",
      table_no: "21",
      order_Type: "Dine",
      order_Items: [
        {
          item_id: "IT1",
          item_Name: "Cheese Pizza",
          item_Des: "Classic cheese pizza with mozzarella.",
          qty: 2,
          orderStatus: "Not Ready",
        },
        {
          item_id: "IT2",
          item_Name: "Garlic Bread",
          item_Des: "Crispy garlic bread served with dip.",
          qty: 3,
          orderStatus: "Not Ready",
        },
        {
          item_id: "IT3",
          item_Name: "Cola",
          item_Des: "Chilled 300ml Cola bottle.",
          qty: 1,
          orderStatus: "Not Ready",
        },
        {
          item_id: "IT4",
          item_Name: "Cheese Pizza",
          item_Des: "Classic cheese pizza with mozzarella.",
          qty: 2,
          orderStatus: "Not Ready",
        },
      ],
    },
    {
      id: "OR2",
      order_time: "12:30",
      orderStatus: "Preparation",
      table_no: "15",
      order_Type: "Takeaway",
      order_Items: [
        {
          item_id: "IT4",
          item_Name: "Burger",
          item_Des: "Juicy beef burger with lettuce and cheese.",
          qty: 1,
          orderStatus: "Preparation",
        },
        {
          item_id: "IT5",
          item_Name: "Fries",
          item_Des: "Crispy French fries with ketchup.",
          qty: 2,
          orderStatus: "Preparation",
        },
      ],
    },
    {
      id: "OR3",
      order_time: "13:00",
      orderStatus: "Not Ready",
      table_no: "9",
      order_Type: "Dine",
      order_Items: [
        {
          item_id: "IT6",
          item_Name: "Pasta",
          item_Des: "Creamy Alfredo pasta with chicken.",
          qty: 1,
          orderStatus: "Not Ready",
        },
        {
          item_id: "IT7",
          item_Name: "Water",
          item_Des: "Bottled mineral water.",
          qty: 2,
          orderStatus: "Not Ready",
        },
      ],
    },
    {
      id: "OR4",
      order_time: "14:00",
      orderStatus: "Not Ready",
      table_no: "5",
      order_Type: "Dine",
      order_Items: [
        {
          item_id: "IT8",
          item_Name: "Caesar Salad",
          item_Des: "Fresh Caesar salad with chicken.",
          qty: 1,
          orderStatus: "Not Ready",
        },
        {
          item_id: "IT9",
          item_Name: "Iced Tea",
          item_Des: "Refreshing iced tea with lemon.",
          qty: 2,
          orderStatus: "Not Ready",
        },
      ],
    },
    {
      id: "OR5",
      order_time: "14:30",
      orderStatus: "Not Ready",
      table_no: "12",
      order_Type: "Takeaway",
      order_Items: [
        {
          item_id: "IT10",
          item_Name: "Sushi",
          item_Des: "Fresh sushi rolls with soy sauce.",
          qty: 1,
          orderStatus: "Not Ready",
        },
        {
          item_id: "IT11",
          item_Name: "Miso Soup",
          item_Des: "Traditional miso soup with tofu.",
          qty: 1,
          orderStatus: "Not Ready",
        },
      ],
    },
  ];

  const BTN_GROUP_DATA = [
    // { id: "BGD1", icon: HiOutlineRefresh },
    // { id: "BGD2", title: "Back", icon: IoArrowBack },
    {
      id: "BGD3",
      title: "Notification",
      icon: IoMdNotificationsOutline,
      modal: NotificationModal,
    },
    { id: "BGD4", title: "Help", icon: IoHelpCircleOutline, modal: HelpPopup },
    // { id: "BGD5", title: "Log Out", icon: RiLogoutCircleRLine },
  ];

  function Button({ title, icon, onClick }) {
    function handleClick() {
      if (onClick) onClick();
    }

    return (
      <button
        className="bg-primary_button hover:bg-primary_button_hover text-white text-center min-w-12 px-4 py-2 flex justify-center items-center gap-x-1 cursor-pointer rounded-md"
        onClick={handleClick}
      >
        {icon && React.createElement(icon, { size: 20 })}
        <span className="text-white text-sm">{title}</span>
      </button>
    );
  }
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4 px-4 mt-2">
        <h2 className="text-xl text-black font-semibold">Kitchen</h2>
        <div className="flex items-center gap-x-1">
          <Button icon={HiOutlineRefresh} />
          <Button icon={IoArrowBack} onClick={Back} title={"Back"} />
          {BTN_GROUP_DATA.map((item) => (
            <Modal key={item.id}>
              <Modal.Open openName={item.title}>
                <div>
                  <Button key={item.id} title={item.title} icon={item.icon} />
                </div>
              </Modal.Open>
              <Modal.Window windowName={item.title}>
                <item.modal />
              </Modal.Window>
            </Modal>
          ))}
          <Button icon={RiLogoutCircleRLine} title={"Log Out"} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4  m-2">
        {data.map((data) => (
          <KitchenCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default KitchenPanel;
