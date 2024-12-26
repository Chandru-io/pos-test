/* eslint-disable react/prop-types */
const OrderStatusScreen = () => {
  return (
    <div className="w-[60vw]">
      <div className="container mx-auto p-2 bg-white">
        <div className="relative p-2 border-b">
          <h3 className="text-xl text-[#064E79] text-center font-semibold">
            Order Status Screen
          </h3>
        </div>
        <div className="grid grid-cols-2 pb-4 container mx-auto">
          <div className="border-dashed border-r border-l border-b p-2 bg-[#FCFCFC]">
            <div className="flex justify-center items-center border-dashed border-b-2 mb-4">
              <h4 className="text-xl w-2/4 text-white rounded-md text-center bg-[#064E79] p-2 m-2">
                Preparing
              </h4>
            </div>
            <div className="flex justify-center items-center gap-y-4 flex-col">
              <div className="flex flex-col w-2/3 rounded-lg">
                <h5 className="bg-orange-500 text-white text-center rounded-t-lg p-2">
                  Walk in Customer
                </h5>
                <div className="px-5 py-3 bg-white rounded-b-lg">
                  <h5 className="text-center text-[#607171] font-semibold text-xl">
                    001
                  </h5>
                  <p className="text-center text-[#607171]">
                    {" "}
                    Order Type : Dine In
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-2/3 rounded-lg">
                <h5 className="bg-orange-500 text-white text-center rounded-t-lg p-2">
                  Walk in Customer
                </h5>
                <div className="px-5 py-3 bg-white rounded-b-lg">
                  <h5 className="text-center text-[#607171] font-semibold text-xl">
                    001
                  </h5>
                  <p className="text-center text-[#607171]">
                    {" "}
                    Order Type : Dine In
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-2/3 rounded-lg">
                <h5 className="bg-orange-500 text-white text-center rounded-t-lg p-2">
                  Walk in Customer
                </h5>
                <div className="px-5 py-3 bg-white rounded-b-lg">
                  <h5 className="text-center text-[#607171] font-semibold text-xl">
                    001
                  </h5>
                  <p className="text-center text-[#607171]">
                    {" "}
                    Order Type : Dine In
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-dashed border-r border-l border-b p-2 bg-[#E9FAF780]">
            <div className="flex justify-center items-center border-dashed border-b-2 mb-4">
              <h4 className="text-xl w-2/4 text-white rounded-md text-center bg-[#3FB547] p-2 m-2">
                Ready to Pick
              </h4>
            </div>
            <div className="flex justify-center items-center gap-y-4 flex-col">
              <div className="flex flex-col w-2/3 rounded-lg">
                <h5 className="bg-[#1A9882] text-white text-center rounded-t-lg p-2">
                  Walk in Customer
                </h5>
                <div className="px-5 py-3 bg-white rounded-b-lg">
                  <h5 className="text-center text-[#607171] font-semibold text-xl">
                    001
                  </h5>
                  <p className="text-center text-[#607171]">
                    {" "}
                    Order Type : Dine In
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusScreen;
