/* eslint-disable react/prop-types */
const RecentSalesButtons = ({ activeTab }) => {
  return (
    <div className="mt-6 flex justify-between space-x-2">
      {activeTab === "self" && (
        <button className="text-green-700 font-semibold py-1 px-4 rounded-md border border-green-400 text-xs">
          Modify Order
        </button>
      )}

      <button className="text-[#1A9882] border border-[#1A9882] font-semibold py-1 px-4 rounded-md text-xs">
        Print Invoice
      </button>
      <button className="text-gray-700 border  font-semibold py-1 px-4 rounded-md text-xs">
        Delete
      </button>
      <button className="text-red-600 font-semibold py-1 px-4 rounded-md border border-red-400 text-xs">
        Cancel
      </button>
    </div>
  );
};

export default RecentSalesButtons;
