import { Link, useLocation } from "react-router";

const Tabs = () => {
  const tabs = [
    { name: "Purchase", path: "/admin/pos/supplierPurchase/purchase" },
    { name: "Supplier", path: "/admin/pos/supplierPurchase/supplier" },
    { name: "Vendor Due Payment", path: "/admin/pos/supplierPurchase/vendor" },
  ];

  const location = useLocation();

  return (
    <div className="flex bg-white shadow-sm w-full max-w-3xl rounded-full justify-between space-x-6 border-b  p-1  my-4">
      {tabs.map((tab) => (
        <Link to={tab.path} key={tab.name}>
          <button
            className={`${
              location.pathname === tab.path
                ? "text-white py-2 px-16 rounded-full bg-[#064E79]   "
                : "text-gray-600 hover:text-white py-2 px-16  rounded-full hover:bg-green-500"
            }`}
          >
            {tab.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
