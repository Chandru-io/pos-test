import { Link, useLocation } from "react-router";

const Tabs = () => {
  const tabs = [{ name: "Expense" }, { name: "Expense Items" }];

  const location = useLocation();

  return (
    <div className="flex bg-white shadow-sm rounded-md gap-4 space-x-8 border-b p-4 my-4">
      {tabs.map((tab) => (
        <Link to={tab.path} key={tab.name}>
          <button
            className={` bg-white ${
              location.pathname === tab.path
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-600 hover:text-black"
            } `}
          >
            {tab.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
