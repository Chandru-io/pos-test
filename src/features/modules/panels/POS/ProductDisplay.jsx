/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

import { Modal } from "flowbite-react";
import FoodOrderCardModal from "./popup/FoodOrderCard";
import PromoTable from "./popup/PromoPopup";
import { useTranslation } from "react-i18next";

const FOOD_CATEGORIES = [
  { id: "FC1", name: "All" },
  { id: "FC2", name: "Pizza" },
  { id: "FC3", name: "Chinese" },
  { id: "FC4", name: "Beverage" },
  { id: "FC5", name: "Fast Food" },
  { id: "FC6", name: "Mexican" },
  { id: "FC7", name: "Desert" },
  { id: "FC8", name: "Italian" },
  { id: "FC9", name: "Thai Food" },
  { id: "FC10", name: "Japanese" },
  { id: "FC11", name: "Bengali" },
  { id: "FC12", name: "American" },
  { id: "FC13", name: "North Indian" },
  { id: "FC14", name: "South Indian" },
  { id: "FC15", name: "Pakistani" },
];

const FOOD_TYPES = [
  "Panels.All",
  "Panels.Vegetarian",
  "Panels.Beverages",
  "Panels.Combo",
];

const PRODUCT_DATA = [
  {
    id: "PRO1",
    imageUrl: "https://via.placeholder.com/150",
    title: "Traditional Pizza",
    price: "4.97",
  },
  {
    id: "PRO2",
    imageUrl: "https://via.placeholder.com/150",
    title: "Cheeseburger",
    price: "3.49",
  },
  {
    id: "PRO3",
    imageUrl: "https://via.placeholder.com/150",
    title: "Veggie Salad",
    price: "2.99",
  },
  {
    id: "PRO4",
    imageUrl: "https://via.placeholder.com/150",
    title: "Spaghetti Bolognese",
    price: "5.49",
  },
  {
    id: "PRO5",
    imageUrl: "https://via.placeholder.com/150",
    title: "Chicken Wrap",
    price: "4.29",
  },
];

const ProductCard = ({ title, price }) => {
  return (
    <div className="rounded-lg p-2 h-full flex flex-col items-center hover:cursor-pointer relative ">
      <div className="w-24 h-24 rounded-full  mb-3 z-10">
        <img
          src={
            "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
          }
          alt={title}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="text-sm text-[#064E79] font-semibold text-center  z-10">
        {title}
      </h3>
      <p className="text-gray-600 text-center z-10">${price}</p>
      <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md absolute left-0 right-0  top-16 border  z-[0] bottom-0"></div>
    </div>
  );
};

const ProductDisplay = ({ setOrders }) => {
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const handleOpenModal = (productId) => {
    setOpenModal(productId);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="grid grid-cols-6 h-full">
      <div className="col-span-1 bg-transparent p-2">
        <div className="inline-flex items-center gap-x-1 p-1 border border-green-500 rounded-md my-4">
          <GoDotFill className="text-green-400" />
          <span className="text-green-400 text-sm">{t("Panels.Online")}</span>
        </div>
        <div className="flex justify-center flex-col gap-y-2 ">
          {FOOD_CATEGORIES.map(({ id, name }) => (
            <p
              key={id}
              className={`rounded-md  p-2 text-center hover:bg-gray-200 text-sm duration-200 cursor-pointer text-black border-blue-500 border-opacity-35 ${
                selectedCategories === name
                  ? "bg-[#064E79] text-white"
                  : "bg-white"
              }`}
              onClick={() => setSelectedCategories(name)}
            >
              {name}
            </p>
          ))}
        </div>
      </div>
      <div className="col-span-5 col-start-2  h-full flex flex-col">
        <div className="flex flex-col gap-y-4 flex-grow">
          <div className="flex justify-end items-center gap-x-3">
            <div className="flex justify-around border border-gray-300 bg-white rounded-md p-1 gap-x-3">
              {FOOD_TYPES.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-gray-500 text-sm font-medium px-2 py-1 relative bg-white ${
                    activeTab === tab ? "text-green-600" : ""
                  }`}
                >
                  {t(tab)}
                  {activeTab === tab && (
                    <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 rounded"></span>
                  )}
                </button>
              ))}
            </div>
            <div
              className="flex items-center justify-center border text-sm text-white border-gray-300 bg-[#3FB547] rounded-md p-2 "
              onClick={() => setIsOpen(true)}
            >
              <span className="cursor-pointer"> {t("Panels.Promo")}</span>
            </div>
          </div>

          <div className="w-full relative">
            <input
              type="text"
              className="bg-white w-full rounded-md cursor-pointer text-left border border-gray-300 border-opacity-70 placeholder:text-[#777980] placeholder:text-left text-sm p-2 focus:outline-green-400"
              placeholder={t("Panels.Search Name or code or Category or Any")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoIosSearch className="absolute top-2 right-3 h-5 w-5 text-[#777980] cursor-pointer" />
          </div>

          <div className="bg-white p-2 rounded-md flex-grow h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8">
              {PRODUCT_DATA.map((product) => (
                <div key={product.id}>
                  {/* Product Card - Modal Trigger */}
                  <div onClick={() => handleOpenModal(product.id)}>
                    <ProductCard
                      imageUrl={product.imageUrl}
                      title={product.title}
                      price={product.price}
                    />
                  </div>

                  {/* Modal */}
                  <Modal
                    show={openModal === product.id}
                    onClose={handleCloseModal}
                    size="4xl"
                    popup
                  >
                    <Modal.Header />
                    <Modal.Body className="scrollbar-hide">
                      <div className="scale-90">
                        <FoodOrderCardModal
                          productName={product.title}
                          productPrice={product.price}
                          productId={product.id}
                          setOrders={setOrders}
                          openModal={openModal}
                        />
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ))}
            </div>

            <PromoTable onCloseModal={() => setIsOpen(false)} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
