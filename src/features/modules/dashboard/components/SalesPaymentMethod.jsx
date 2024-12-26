import cash from "../assets/fan of banknote.png";
import creditcard from "../assets/blue credit card front.png";
import check from "../assets/online bank window.png";
import bank from "../assets/bank building.png";

import { ProgressBar } from "primereact/progressbar";
import { useTranslation } from "react-i18next";

const SalesPaymentMethod = () => {
  const { t } = useTranslation();
  const methods = [
    {
      method: "dashBoard.Sales by Payment Method.Cash",
      image: cash,
      amount: "2,976.99",
      percentage: 94,
    },
    {
      method: "dashBoard.Sales by Payment Method.Credit Card",
      image: creditcard,
      amount: "270.99",
      percentage: 60,
    },
    {
      method: "dashBoard.Sales by Payment Method.Check",
      image: check,
      amount: "150.94",
      percentage: 30,
    },
    {
      method: "dashBoard.Sales by Payment Method.Bank Transfer",
      image: bank,
      amount: "45.98",
      percentage: 10,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className=" flex justify-between items-center mb-2">
        <h3 className="font-semibold text-[#064E79] mb-4 text-sm md:text-lg">
          {t("dashBoard.Sales by Payment Method.Sales by Payment Method")}
        </h3>
        <div className=" px-3 py-1 bg-green-500 text-white rounded-lg text-sm md:text-base">
          {t("dashBoard.Sales by Payment Method.Total Sales")}: 32,121.026
        </div>
      </div>
      <ul className="space-y-4">
        {methods.map((item, index) => (
          <li key={index} className="flex justify-between">
            <div className=" flex gap-2 items-center">
              <img src={item.image} alt={item.method} className=" w-6 h-6" />
              <div className=" flex flex-col">
                <span className="text-sm">{t(item.method)}</span>
                <span className=" text-sm text-green-500">{item.amount}</span>
              </div>
            </div>
            <div className=" flex gap-1">
              <ProgressBar value={90}></ProgressBar>
              <span className="text-gray-500 text-sm">{item.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesPaymentMethod;
