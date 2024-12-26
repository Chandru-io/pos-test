import { Link, useLocation } from "react-router";

const SalesTabs = () => {
  const tabs = [
    { name: "Sales", path: "/admin/pos/sales/saleslist" },
    { name: "Customer", path: "/admin/pos/sales/customer" },
    { name: "Promotion", path: "/admin/pos/sales/promotion" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-4 space-x-8 shadow-sm rounded-md border-b p-4 my-4 bg-white">
      {tabs.map((tab) => (
        <Link to={tab.path} key={tab.name}>
          <button
            className={`${
              location.pathname === tab.path
                ? "text-green-600 border-b-2 border-green-600 bg-white"
                : "text-gray-600 hover:text-black bg-white"
            }`}
          >
            {tab.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SalesTabs;
