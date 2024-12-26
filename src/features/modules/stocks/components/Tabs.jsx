import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const tabs = [
    { name: "All Stocks", path: "/admin/pos/stocks/allstocks" },
    { name: "Low Stocks", path: "/admin/pos/stocks/lowstocks" },
    { name: "Slow Moving Stocks", path: "/admin/pos/stocks/slowstocks" },
    { name: "Adjust Stocks", path: "/admin/pos/stocks/adjuststocks" },
  ];

  const location = useLocation();

  return (
    <div className="flex w-full mt-6">
      <div className="bg-white flex  justify-around gap-2 items-center rounded-full py-1 px-2 shadow-md w-full">
        {tabs.map((tab) => (
          <Link
            to={tab.path}
            className={`loenex_family_toggle_bar  group ${
              location.pathname === tab.path
                ? "bg-[#064e79] text-white rounded-full"
                : ""
            }`}
            key={tab.name}
          >
            <div>
              <p
                className={`text-center group-hover:text-white w-full ${
                  location.pathname === tab.path
                    ? "text-white"
                    : "text-black hover:text-white"
                }`}
              >
                {tab.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
