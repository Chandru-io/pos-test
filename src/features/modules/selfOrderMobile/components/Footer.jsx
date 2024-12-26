import { HiOutlineShoppingCart } from "react-icons/hi";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router";

const NavFooter = () => {
  const [activeTab, setActiveTab] = useState("Food");

  const footer = [
    {
      name: "Food",
      icon: GiKnifeFork,
      link: "/mobile/food",
    },
    {
      name: "Cart",
      icon: HiOutlineShoppingCart,
      link: "/mobile/cart",
    },
    {
      name: "Orders",
      icon: PiClockCounterClockwiseBold,
      link: "/mobile/orders",
    },
  ];

  return (
    <div className="bg-white fixed bottom-0 w-full z-10 shadow-md">
      <div className="flex justify-evenly py-2">
        {footer.map((data, i) => (
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            key={i}
            onClick={() => setActiveTab(data.name)}
          >
            <Link to={data.link}>
              <data.icon
                size={30}
                className={`${
                  activeTab === data.name ? "text-green-500" : "text-gray-500"
                }`}
              />
              <p
                className={`mt-1 text-sm ${
                  activeTab === data.name
                    ? "text-green-500 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {data.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavFooter;
