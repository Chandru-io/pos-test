/* eslint-disable react/prop-types */

import OrderDetail from "../OrderDetails";
import OrderListTable from "../OrderDetailsTable";

const DraftSales = () => {
  return (
    <div className="">
      <div className=" bg-white rounded-lg  relative">
        <h2 className="text-lg font-semibold">Draft Sales </h2>

        <div className="flex  mt-4 gap-x-3">
          <OrderListTable />
          <OrderDetail activeTab={"Draft"} />
        </div>
      </div>
    </div>
  );
};

export default DraftSales;
