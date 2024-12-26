import { useState } from "react";
import ProductDisplay from "../POS/ProductDisplay";
import OrderDetails from "../POS/OrderDetails";
import RunningOrders from "../POS/RunningOrders";
import Navbar from "../navbar/PosNavbar";

const PosLayout = () => {
  const [orders, setOrders] = useState([]);
  const [runningOrders, setRunningOrders] = useState([]);

  return (
    <div className="bg-bg-primary h-full flex flex-col ">
      <Navbar />

      <main className="grid grid-cols-10  gap-1 h-full bg-bg-primary">
        <div className="col-span-5  mt-3 p-2 ">
          <ProductDisplay setOrders={setOrders} />
        </div>
        <div className="col-span-3  col-start-6 ">
          <OrderDetails
            orders={orders}
            setOrders={setOrders}
            setRunningOrders={setRunningOrders}
          />
        </div>
        <div className="col-span-2  col-start-9 ">
          <RunningOrders
            runningOrders={runningOrders}
            setRunningOrders={setRunningOrders}
            setOrders={setOrders}
          />
        </div>
      </main>
    </div>
  );
};

export default PosLayout;
