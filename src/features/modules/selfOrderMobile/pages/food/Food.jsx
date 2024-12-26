import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import toast from "react-hot-toast";
import SearchComponentForMob from "../../components/SearchComponentForMob";
import FoodCard from "../../components/Card";
import { CartDrawer } from "../../components/CartDrawer";
import { MenuItems } from "../../../../data/menuItems";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import IntroModal from "../../components/IntroModal";
import { BsFillTelephoneFill } from "react-icons/bs";

const Food = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState();
  const [customerName, setCustomerName] = useState([]);
  const [name, setName] = useState("");

  const handleConfirm = () => {
    toast.success("Cart added Successfully");

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  const handleSuccess = () => {
    if (name === "") {
      setIsNameModalOpen(true);
    } else {
      setCustomerName(name);
      setIsNameModalOpen(false);
      setName("");
    }
  };

  const handleNewOrderClick = () => {
    setIsNameModalOpen(true);
  };

  const FOOD_TYPES = ["All", "Vegetarian", "Beverages", "Combo"];
  const Menu = [
    "All",
    "Pizza",
    "Chiness",
    "Noodles",
    "Italian",
    "Desert",
    "All",
    "Pizza",
    "Chiness",
    "Noodles",
    "Italian",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Search Component */}
          <div>
            <SearchComponentForMob />
          </div>

          {/* Tabs */}
          <div className="flex flex-row gap-1 sm:flex-row justify-end items-center gap-y-2 sm:gap-x-3 px-2 py-2 mb-2">
            <div className="flex justify-center sm:justify-around border border-gray-300 bg-white rounded-md p-1 gap-x-2 sm:gap-x-3 w-full sm:w-auto ">
              {FOOD_TYPES.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-gray-500 text-sm font-medium px-2 py-2 relative bg-white ${
                    activeTab === tab ? "text-green-600" : ""
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 rounded"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Promo Button */}
            <div className="flex items-center justify-center border text-sm text-white border-gray-300 bg-[#3FB547] rounded-md px-2 py-3 w-full sm:w-auto">
              <span className="cursor-pointer">Promo</span>
            </div>
          </div>
          <div className="flex justify-center">
            <p>Hii Rps!!</p>
          </div>
          <div className="flex justify-between px-4">
            <div className="relative flex items-center gap-4 min-w-20 justify-center">
              {/* Left Scroll Button */}
              <button
                onClick={() => {
                  document.getElementById("scroll-container").scrollBy({
                    left: -100,
                    behavior: "smooth",
                  });
                }}
                className="absolute left-0 rounded-md p-2 text-white"
              >
                <FaCaretLeft />
              </button>

              {/* Scrollable Content */}
              <div
                id="scroll-container"
                className="flex items-center gap-4 overflow-x-scroll scroll-smooth scrollbar-hide px-8"
              >
                <p className="border rounded-md px-2 cursor-pointer hover:bg-primary_button_hover hover:text-white">
                  1
                </p>
                <p className="border rounded-md px-2 cursor-pointer hover:bg-primary_button_hover hover:text-white">
                  2
                </p>
                <p className="border rounded-md px-2 cursor-pointer hover:bg-primary_button_hover hover:text-white">
                  3
                </p>
                <p className="border rounded-md px-2 cursor-pointer hover:bg-primary_button_hover hover:text-white">
                  4
                </p>
                <p className="border rounded-md px-2 cursor-pointer hover:bg-primary_button_hover hover:text-white">
                  5
                </p>
                <p className="border rounded-md px-2 cursor-pointer hover:bg-primary_button_hover hover:text-white">
                  6
                </p>
              </div>

              {/* Right Scroll Button */}
              <button
                onClick={() => {
                  document.getElementById("scroll-container").scrollBy({
                    left: 100,
                    behavior: "smooth",
                  });
                }}
                className="absolute right-0 rounded-md p-2 text-white"
              >
                <FaCaretRight />
              </button>
            </div>

            <div>
              <p
                className="p-2 bg-primary_button whitespace-nowrap font-semibold hover:bg-primary_button_hover hover:text-white cursor-pointer rounded-md"
                onClick={handleNewOrderClick} // Trigger validation
              >
                New Order
              </p>
            </div>
          </div>

          {/* Food Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-1.5">
            {MenuItems.map((data, i) => (
              <FoodCard
                key={i}
                image={data.image}
                name={data.name}
                price={data.price}
                onClick={() => setIsOpen(true)}
              />
            ))}
          </div>
        </div>

        {/* Sticky Hamburger Menu */}
        <div className="sticky bottom-28 left-[90%] flex flex-col justify-center items-center shadow-md bg-green-400 text-white p-2 rounded-full w-12 h-12 font-bold cursor-pointer">
          <BsFillTelephoneFill size={24} />
        </div>
        <div
          className="sticky bottom-16 left-[90%] flex flex-col justify-center items-center shadow-md bg-yellow-200 p-2 rounded-full w-12 h-12 font-bold cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <RxHamburgerMenu size={24} />
          <p className="text-xs">Menu</p>
        </div>
        <CartDrawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          handleConfirm={handleConfirm}
        />
        {/* Conditional Menu Display */}
        {showMenu && (
          <div className="sticky bottom-20 left-3/4 transform -translate-x-1/2 bg-white shadow-md flex flex-col gap-2 p-2 rounded-md w-56 overflow-y-auto h-full max-h-72">
            <div>
              {Menu.map((data, i) => (
                <p
                  key={i}
                  className={`border-b p-2 ${
                    activeMenu === data ? "text-green-400" : ""
                  }`}
                  onClick={() => setActiveMenu(data)}
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Sticky Footer */}

        <IntroModal
          isOpen={isNameModalOpen}
          onCloseModal={() => setIsNameModalOpen(false)}
          handleConfirm={handleSuccess}
          name={setName}
        />
      </div>
    </div>
  );
};

export default Food;
