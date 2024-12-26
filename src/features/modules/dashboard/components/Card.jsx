import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";

import revenue from "../assets/revenue.png";
import profit from "../assets/profit.png";
import transaction from "../assets/transaction.png";
import recept from "../assets/recipt.png";
import customer from "../assets/customer.png";
import { useTranslation } from "react-i18next";

const cards = [
  {
    title: "dashBoard.card.Total Revenue",
    value: "40,689",
    change: "8.5% Up from yesterday",
    icon: revenue,
    color: "text-green-500",
  },
  {
    title: "dashBoard.card.Net Profit",
    value: "10,293",
    change: "1.3% Up from past week",
    icon: profit,
    color: "text-yellow-500",
  },
  {
    title: "dashBoard.card.Online Transaction",
    value: "$89,000",
    change: "4.3% Down from yesterday",
    icon: transaction,
    color: "text-red-500",
  },
  {
    title: "dashBoard.card.Average Receipt",
    value: "27.98",
    change: "1.8% Up from yesterday",
    icon: recept,
    color: "text-green-500",
  },
  {
    title: "dashBoard.card.Total Customers",
    value: "40,689",
    change: "8.5% Up from yesterday",
    icon: customer,
    color: "text-blue-500",
  },
];
const Card = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
      {cards.map((card, index) => {
        // Determine if the change is "Up" or "Down"
        const isUp = card.change.toLowerCase().includes("up");
        const changeIcon = isUp ? (
          <IoMdTrendingUp className=" text-green-500 text-lg" />
        ) : (
          <IoMdTrendingDown className=" text-red-500 text-lg" />
        );

        return (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm flex flex-col space-y-2 border "
          >
            {/* Card Header */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-gray-600 text-sm">{t(card.title)}</div>
                <div className="text-2xl font-bold">{card.value}</div>
              </div>
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>

            {/* Change Indicator */}
            <div className="flex items-center space-x-2 text-sm">
              {changeIcon}
              <span className="text-gray-500">{card.change}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
