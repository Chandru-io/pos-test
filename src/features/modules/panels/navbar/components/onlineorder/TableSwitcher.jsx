/* eslint-disable react/prop-types */
const TabSwitcher = ({ activeTab, setActiveTab }) => {
  return (
    <div className="inline-flex space-x-2 my-2 border rounded-xl">
      <button
        className={`px-2 py-1 ${
          activeTab === "self"
            ? "text-white border-b-2 cursor-pointer rounded-tl-xl rounded-bl-xl border-green-500 bg-green-500"
            : ""
        }`}
        onClick={() => setActiveTab("self")}
      >
        Self Orders
      </button>
      <button
        className={`px-2 py-1 ${
          activeTab === "online"
            ? " border-b-2 border-green-500 cursor-pointer rounded-tr-xl rounded-br-xl bg-green-500 text-white"
            : ""
        }`}
        onClick={() => setActiveTab("online")}
      >
        Online Orders
      </button>
    </div>
  );
};

export default TabSwitcher;
