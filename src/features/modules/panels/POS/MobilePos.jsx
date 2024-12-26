/* eslint-disable react/prop-types */
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Drawer } from "flowbite-react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { PiWarningCircleThin } from "react-icons/pi";
import { IoMdPrint } from "react-icons/io";
import { MdNotInterested } from "react-icons/md";
import { FaTableCells } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaBell, FaTags, FaClipboardList, FaHistory } from "react-icons/fa";
import {
  MdCategory,
  MdDashboard,
  MdPrint,
  MdFullscreen,
  MdLanguage,
} from "react-icons/md";
import { BiDish, BiUserCircle } from "react-icons/bi";

const Btn_group = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);

  const handleClose = () => setIsOpen(false);

  function handleRunningOrder() {
    setIsOpen(true);
  }

  return (
    <div className="grid grid-cols-4 gap-x-1 p-1">
      <button
        className="px-1.5 py-2 shadow-sm rounded-md bg-red-500 hover:bg-red-600 duration-200 text-center text-white text-[10px]"
        onClick={handleRunningOrder}
      >
        Running Orders
      </button>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Running Order" />
        <Drawer.Items>
          <div className="flex justify-between bg-white pb-2 flex-col h-[92vh]">
            <div>
              <input
                type="text"
                placeholder="Table, Order, Number"
                className="p-1 rounded-md bg-white placeholder:text-sm my-1 border w-full"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="bg-gray-200 rounded-md flex items-center justify-center p-2">
                <FaEdit /> <span className="text-sm">Modify Order</span>
              </div>
              <div className="bg-gray-200 rounded-md flex items-center justify-center p-2">
                <PiWarningCircleThin />
                <span className="text-sm">Order Details</span>
              </div>
              <div className="bg-gray-200 rounded-md flex items-center justify-center p-2">
                <IoMdPrint />
                <span className="text-sm">Re-print KOT</span>
              </div>
              <div className="flex gap-x-1">
                <div className="bg-gray-200 rounded-md flex items-center justify-center p-2 w-full">
                  <span className="text-sm">Invoice</span>
                </div>
                <div className="bg-gray-200 rounded-md flex items-center justify-center p-2 w-full">
                  <span className="text-sm">Bill</span>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex items-center justify-center p-2">
                <MdNotInterested />
                <span className="text-sm">Cancel Order</span>
              </div>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>

      <button
        className="px-1.5 py-1 shadow-sm rounded-md bg-fuchsia-700 hover:bg-fuchsia-800 duration-200 text-center text-white text-[10px]"
        onClick={() => setActiveTab("cart")}
      >
        Cart
      </button>

      <button
        className="px-1.5 py-1 shadow-sm rounded-md bg-gray-500 hover:bg-gray-600 duration-200 text-center text-white text-[10px]"
        onClick={() => setActiveTab("foodContainer")}
      >
        Products
      </button>

      <button
        className="px-1.5 py-1 shadow-sm rounded-md bg-green-400 hover:bg-green-500 duration-200 text-center text-white text-[10px]"
        onClick={() => setIsOpenRight(true)}
      >
        Others
      </button>
      <Drawer
        open={isOpenRight}
        onClose={() => setIsOpenRight(false)}
        position="right"
      >
        <Drawer.Header title="Others" />
        <Drawer.Items>
          <div className="flex justify-between bg-white pb-2 flex-col h-[92vh]">
            <div className="w-64 bg-white p-4">
              <ul className="space-y-2 text-blue-500">
                <li className="flex items-center gap-2">
                  <FaBell />
                  <span>Kitchen Notification</span>
                </li>
                <li className="flex items-center gap-2">
                  <BiUserCircle />
                  <span>Main Menu</span>
                </li>
                <li>
                  <ul className="ml-6">
                    <li className="flex items-center gap-2">
                      <MdCategory />
                      <span>Category</span>
                    </li>
                    <ul className="ml-6">
                      <li className="flex items-center gap-2">
                        <BiDish />
                        <span>Beverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BiDish />
                        <span>Vegetarian</span>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li className="flex items-center gap-2">
                  <FaTags />
                  <span>Promo</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaClipboardList />
                  <span>Open Draft Sales</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaHistory />
                  <span>Recent Sales</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaHistory />
                  <span>Future Sales</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaClipboardList />
                  <span>Self/Online Orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaClipboardList />
                  <span>Reservation List</span>
                </li>
                <li>
                  <ul className="ml-6">
                    <li className="flex items-center gap-2">
                      <MdLanguage />
                      <span>Language</span>
                    </li>
                  </ul>
                </li>
                <li className="flex items-center gap-2">
                  <MdPrint />
                  <span>Print Last Invoice</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDashboard />
                  <span>Dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdFullscreen />
                  <span>Full Screen</span>
                </li>
              </ul>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

const Card = () => {
  return (
    <div className="shadow-md flex flex-col rounded-md">
      <img
        src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg "
        alt="food"
        className="rounded-lg"
      />
      <p className="font-light text-center text-[14px] mt-1">Shrip Toast</p>
      <p className="font-light text-center text-[12px] mb-2">Price : 9.00</p>
    </div>
  );
};

export function Component() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const FoodContainer = () => {
  return (
    <div className="bg-white p-1 flex flex-col gap-0">
      <input
        type="text"
        className="p-1 border rounded-md w-full  placeholder:text-[10px] placeholder:text-gray-300 mb-2"
        placeholder="Name or Code or Category or VEG or BEV or BAR"
      />
      <div className="grid grid-cols-2 gap-2">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="bg-white p-1 h-[95vh] flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-200 rounded-md flex items-center justify-center p-2 gap-x-1 cursor-pointer hover:bg-gray-300 duration-200">
          <FaTableCells /> <span className="text-sm">Dine In</span>
        </div>
        <div className="bg-gray-200 rounded-md flex items-center justify-center p-2 hover:bg-gray-300 duration-200 cursor-pointer">
          <MdOutlineShoppingBag /> <span className="text-sm">Take Away</span>
        </div>
        <div className="bg-gray-200 rounded-md flex items-center justify-center p-2 hover:bg-gray-300 duration-200 cursor-pointer">
          <FaEdit /> <span className="text-sm">Delivery</span>
        </div>
      </div>
      <div className="flex gap-x-2 mt-3">
        <select className="p-1 w-full rounded-sm">
          <option value={"Waiter 0"}>Waiter 0</option>
          <option value={"Waiter 1"}>Waiter 1</option>
          <option value={"Waiter 2"}>Waiter 2</option>
        </select>
        <select className="p-1 w-full rounded-sm">
          <option value={"Customer 0"}>Customer 0</option>
          <option value={"Customer 1"}>Customer 1</option>
          <option value={"Customer 2"}>Customer 2</option>
        </select>
        <div className="p-1 px-1.5 rounded-md bg-gray-200 hover:bg-gray-300 duration-100 cursor-pointer flex justify-center items-center">
          <CiEdit />
        </div>
        <div className="p-1 px-1.5 rounded-md bg-gray-200 hover:bg-gray-300 duration-100 cursor-pointer flex justify-center items-center">
          <FaPlus />
        </div>
      </div>

      <div className="mt-2 bg-white rounded-md flex-grow ">
        <div className="overflow-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 h-full">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border border-gray-300">Item</th>
                <th className="px-4 py-2 border border-gray-300">Price</th>
                <th className="px-4 py-2 border border-gray-300">Qty</th>
                <th className="px-4 py-2 border border-gray-300">Discount</th>
                <th className="px-4 py-2 border border-gray-300">Total</th>
              </tr>
            </thead>
            <tbody className="h-[50vh]"></tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 border-t pt-4">
          <div className="text-lg font-bold">Total Payable: 0.000</div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Cancel
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            Draft
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Quick Invoice
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

const MobilePos = () => {
  const [activeTAb, setActiveTab] = useState("foodContainer");
  return (
    <div className="flex flex-col gap-y-1">
      <Btn_group setActiveTab={setActiveTab} />
      {activeTAb === "foodContainer" && <FoodContainer />}
      {activeTAb === "cart" && <Cart />}
    </div>
  );
};

export default MobilePos;
